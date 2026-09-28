import type { AxiosRequestConfig } from 'axios'
import { api } from '@/lib/api/axios'
import {
  endpoints,
  type ApiEndpoint,
  type ApiEndpointName,
  type ApiRequests,
  type ApiResponses,
} from '@/lib/api/endpoints'

type RequiredKeys<T> = {
  [TKey in keyof T]-?: Record<string, never> extends Pick<T, TKey> ? never : TKey
}[keyof T]

export type RequestFor<TEndpoint extends ApiEndpointName> = ApiRequests[TEndpoint]

export type ApiCallConfig = Omit<
  AxiosRequestConfig,
  'url' | 'method' | 'params' | 'data'
>

type ClientArguments<TEndpoint extends ApiEndpointName> =
  RequiredKeys<RequestFor<TEndpoint>> extends never
    ? [request?: RequestFor<TEndpoint>, config?: ApiCallConfig]
    : [request: RequestFor<TEndpoint>, config?: ApiCallConfig]

type ClientMethod<TEndpoint extends ApiEndpointName> = (
  ...arguments_: ClientArguments<TEndpoint>
) => Promise<ApiResponses[TEndpoint]>

/**
 * One strongly typed function for every generated endpoint.
 *
 * @example
 * apiClient.getAppAgentTeam({ query: { MaxResultCount: 20 } })
 * apiClient.getAppAgentTeamId({ path: { id } })
 * apiClient.postAppAgentTeam({ body: { name: 'Developers' } })
 */
export type ApiClient = {
  [TEndpoint in ApiEndpointName]: ClientMethod<TEndpoint>
}

interface RuntimeRequest {
  path?: Record<string, string | number>
  query?: unknown
  headers?: AxiosRequestConfig['headers']
  body?: unknown
}

function resolvePath(
  path: string,
  parameters: Record<string, string | number> = {},
): string {
  return path.replace(/\{([^}]+)\}/g, (_placeholder, parameterName: string) => {
    const parameter = Object.entries(parameters).find(
      ([name]) => name.toLowerCase() === parameterName.toLowerCase(),
    )

    if (!parameter) {
      throw new Error(`Missing path parameter: ${parameterName}`)
    }

    return encodeURIComponent(String(parameter[1]))
  })
}

const handler: ProxyHandler<ApiClient> = {
  get(_target, property): unknown {
    if (typeof property !== 'string' || !(property in endpoints)) return undefined

    const endpointName = property as ApiEndpointName
    const endpoint: ApiEndpoint = endpoints[endpointName]

    return async (
      request: RuntimeRequest = {},
      config: ApiCallConfig = {},
    ): Promise<unknown> => {
      const response = await api.request({
        ...config,
        method: endpoint.method,
        url: resolvePath(endpoint.path, request.path),
        params: request.query,
        data: request.body,
        headers: {
          ...config.headers,
          ...request.headers,
          ...(endpoint.contentType
            ? { 'Content-Type': endpoint.contentType }
            : {}),
        },
      })

      return response.data
    }
  },
}

export const apiClient = new Proxy({} as ApiClient, handler)
