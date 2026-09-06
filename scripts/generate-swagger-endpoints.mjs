import https from 'node:https'
import { writeFile } from 'node:fs/promises'

const swaggerUrl = process.argv[2] ?? 'https://localhost:44366/swagger/v1/swagger.json'
const outputPath = process.argv[3] ?? 'src/lib/api/endpoints.ts'
const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options']

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { rejectUnauthorized: false }, (response) => {
        if (!response.statusCode || response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`Swagger request failed with status ${response.statusCode ?? 'unknown'}`))
          response.resume()
          return
        }

        let body = ''
        response.setEncoding('utf8')
        response.on('data', (chunk) => {
          body += chunk
        })
        response.on('end', () => {
          try {
            resolve(JSON.parse(body))
          } catch (error) {
            reject(error)
          }
        })
      })
      .on('error', reject)
  })
}

function words(value) {
  return value
    .replace(/[{}]/g, '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
}

function pascalCase(value) {
  return words(value)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function endpointBaseName(method, path) {
  const pathWithoutApiPrefix = path.replace(/^\/api\/?/, '')
  return method.toLowerCase() + pascalCase(pathWithoutApiPrefix)
}

function propertyName(value) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) ? value : JSON.stringify(value)
}

function refName(ref) {
  return decodeURIComponent(ref.split('/').at(-1))
}

function nullable(type, schema) {
  return schema?.nullable ? `${type} | null` : type
}

function schemaToType(schema) {
  if (!schema) return 'unknown'
  if (schema.$ref) return nullable(`ApiModels[${JSON.stringify(refName(schema.$ref))}]`, schema)

  if (schema.enum) {
    const enumType = schema.enum.map((value) => JSON.stringify(value)).join(' | ') || 'never'
    return nullable(enumType, schema)
  }

  if (schema.oneOf || schema.anyOf) {
    const variants = schema.oneOf ?? schema.anyOf
    return nullable(variants.map(schemaToType).join(' | '), schema)
  }

  if (schema.allOf) {
    return nullable(schema.allOf.map(schemaToType).join(' & '), schema)
  }

  if (schema.type === 'array') {
    return nullable(`Array<${schemaToType(schema.items)}>`, schema)
  }

  if (schema.type === 'object' || schema.properties || schema.additionalProperties) {
    const required = new Set(schema.required ?? [])
    const properties = Object.entries(schema.properties ?? {}).map(
      ([name, value]) => `    ${propertyName(name)}${required.has(name) ? '' : '?'}: ${schemaToType(value)}`,
    )
    if (schema.additionalProperties && properties.length === 0) {
      const valueType = schema.additionalProperties === true ? 'unknown' : schemaToType(schema.additionalProperties)
      return nullable(`Record<string, ${valueType}>`, schema)
    }
    return nullable(properties.length ? `{\n${properties.join('\n')}\n  }` : 'Record<string, unknown>', schema)
  }

  const primitive = {
    boolean: 'boolean',
    integer: 'number',
    number: 'number',
    string: schema.format === 'binary' ? 'Blob' : 'string',
  }[schema.type]

  return nullable(primitive ?? 'unknown', schema)
}

function collectRefs(schema, target) {
  if (!schema || typeof schema !== 'object') return
  if (schema.$ref) target.add(refName(schema.$ref))
  for (const value of Object.values(schema)) {
    if (Array.isArray(value)) value.forEach((item) => collectRefs(item, target))
    else if (value && typeof value === 'object') collectRefs(value, target)
  }
}

function selectRequestContent(content) {
  if (!content) return undefined
  const preferred = ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded', 'text/json']
  const contentType = preferred.find((type) => content[type]) ?? Object.keys(content)[0]
  return contentType ? { contentType, schema: content[contentType].schema } : undefined
}

function resolveParameter(parameter, document) {
  if (!parameter?.$ref) return parameter
  return document.components?.parameters?.[refName(parameter.$ref)] ?? parameter
}

function parameterObject(parameters, location, document) {
  const matching = parameters.map((parameter) => resolveParameter(parameter, document)).filter((p) => p?.in === location)
  if (matching.length === 0) return undefined
  const lines = matching.map(
    (parameter) =>
      `    ${propertyName(parameter.name)}${parameter.required ? '' : '?'}: ${schemaToType(parameter.schema)}`,
  )
  return `{\n${lines.join('\n')}\n  }`
}

const document = await fetchJson(swaggerUrl)
const schemas = document.components?.schemas ?? {}
const usedNames = new Map()
const operations = []

for (const [swaggerPath, pathItem] of Object.entries(document.paths ?? {})) {
  for (const method of methods) {
    const operation = pathItem[method]
    if (!operation) continue
    const baseName = endpointBaseName(method, swaggerPath)
    const occurrence = (usedNames.get(baseName) ?? 0) + 1
    usedNames.set(baseName, occurrence)
    const name = occurrence === 1 ? baseName : `${baseName}${occurrence}`
    const parameters = [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]
    const requestContent = selectRequestContent(operation.requestBody?.content)
    operations.push({
      name,
      method: method.toUpperCase(),
      swaggerPath,
      path: swaggerPath.replace(/^\/api(?=\/|$)/, '') || '/',
      tag: operation.tags?.[0] ?? 'Default',
      parameters,
      requestBodyRequired: operation.requestBody?.required === true,
      requestContent,
    })
  }
}

const requestModelNames = new Set()
for (const operation of operations) {
  for (const parameter of operation.parameters) {
    collectRefs(resolveParameter(parameter, document)?.schema, requestModelNames)
  }
  collectRefs(operation.requestContent?.schema, requestModelNames)
}

const pendingModels = [...requestModelNames]
for (let index = 0; index < pendingModels.length; index += 1) {
  const modelName = pendingModels[index]
  const before = requestModelNames.size
  collectRefs(schemas[modelName], requestModelNames)
  if (requestModelNames.size > before) {
    for (const name of requestModelNames) {
      if (!pendingModels.includes(name)) pendingModels.push(name)
    }
  }
}

const missingModels = [...requestModelNames].filter((name) => !schemas[name])
if (missingModels.length) throw new Error(`Missing component schemas: ${missingModels.join(', ')}`)

const modelLines = [...requestModelNames]
  .sort((left, right) => left.localeCompare(right))
  .map((name) => `  ${JSON.stringify(name)}: ${schemaToType(schemas[name])}`)

const endpointLines = operations.map((operation) => {
  const model = operation.requestContent?.schema?.$ref
    ? `, requestModel: ${JSON.stringify(refName(operation.requestContent.schema.$ref))}`
    : ''
  const contentType = operation.requestContent ? `, contentType: ${JSON.stringify(operation.requestContent.contentType)}` : ''
  return `  ${operation.name}: { method: ${JSON.stringify(operation.method)}, path: ${JSON.stringify(operation.path)}, swaggerPath: ${JSON.stringify(operation.swaggerPath)}, tag: ${JSON.stringify(operation.tag)}${contentType}${model} },`
})

const requestLines = operations.map((operation) => {
  const parts = []
  const pathParams = parameterObject(operation.parameters, 'path', document)
  const query = parameterObject(operation.parameters, 'query', document)
  const headers = parameterObject(operation.parameters, 'header', document)
  if (pathParams) parts.push(`  path: ${pathParams}`)
  if (query) parts.push(`  query: ${query}`)
  if (headers) parts.push(`  headers: ${headers}`)
  if (operation.requestContent) {
    const optional = operation.requestBodyRequired ? '' : '?'
    parts.push(`  body${optional}: ${schemaToType(operation.requestContent.schema)}`)
  }
  const requestType = parts.length ? `{\n${parts.join('\n')}\n}` : 'Record<string, never>'
  return `  ${operation.name}: ${requestType}`
})

const output = `/* eslint-disable @typescript-eslint/no-empty-object-type */
/**
 * Generated from ${swaggerUrl}
 * API: ${document.info?.title ?? 'Unknown'}${document.info?.version ? ` (${document.info.version})` : ''}
 *
 * endpoint.path is relative to the existing Axios client's /api base URL.
 * endpoint.swaggerPath is the exact path published by Swagger.
 * Run: node scripts/generate-swagger-endpoints.mjs
 */

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'

export interface ApiEndpoint {
  method: HttpMethod
  path: string
  swaggerPath: string
  tag: string
  contentType?: string
  requestModel?: keyof ApiModels
}

/** Component schemas referenced by request parameters or request bodies. */
export interface ApiModels {
${modelLines.join('\n')}
}

/** Every operation published by Swagger, keyed by a stable generated name. */
export const endpoints = {
${endpointLines.join('\n')}
} as const satisfies Record<string, ApiEndpoint>

/** Exact request shape for each endpoint (path/query/header/body). */
export interface ApiRequests {
${requestLines.join('\n')}
}

export type ApiEndpointName = keyof typeof endpoints
export type ApiRequest<TEndpoint extends ApiEndpointName> = ApiRequests[TEndpoint]
`

await writeFile(outputPath, output, 'utf8')
console.log(
  `Generated ${outputPath}: ${operations.length} operations, ${requestModelNames.size} request models.`,
)
