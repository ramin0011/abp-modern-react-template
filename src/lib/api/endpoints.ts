/**
 * Generated from https://localhost:44366/swagger/v1/swagger.json
 * API: CodeGenerator API (v1)
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

/** Component schemas referenced by requests or successful responses. */
export interface ApiModels {
  "Dotin.CodeGenerator.AppServices.DepartmentWorkItemJourneyDto": {
    id?: string
    parentJobInfoId?: string
    childJobInfoId?: string | null
    developmentJobDocumentId?: string | null
    targetDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    status?: ApiModels["Dotin.CodeGenerator.Enums.DepartmentWorkItemStatus"]
    selectedAgentTeamName?: string | null
    creatorUserName?: string | null
    createdAt?: string
  }
  "Dotin.CodeGenerator.AppServices.DevelopmentDocumentJourneyDto": {
    id?: string
    name?: string | null
    status?: ApiModels["Dotin.CodeGenerator.Enums.DevelopmentDocumentStatus"]
    sourceDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    targetDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    jiraUrl?: string | null
    creatorUserName?: string | null
    createdAt?: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    name?: string | null
    description?: string | null
    action?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    memories?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto"]> | null
    skills?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    type?: ApiModels["Dotin.CodeGenerator.Enums.AgentType"]
    model?: string | null
    systemMessage?: string | null
    name?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    name?: string | null
    type?: ApiModels["Dotin.CodeGenerator.Enums.AgentMemoryType"]
    input?: string | null
    actionsAssetsId?: string | null
    tags?: Array<string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryPagedAndSortedResultRequestDto": {
    maxResultCount?: number
    skipCount?: number
    sorting?: string | null
    filter?: string | null
    type?: ApiModels["Dotin.CodeGenerator.Enums.AgentMemoryType"]
    includeContent?: boolean | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.AgentTeamCreateDto": {
    name?: string | null
    agentMembers?: Array<string> | null
    actionsAssetsId?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto": {
    id?: string
    name?: string | null
    agentMembers?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]> | null
    actionsAssets?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
    actionsAssetsId?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CodeStudioGenerateDto": {
    prompt: string
    agentMemberId: string
    referenceFiles?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CodeStudioReferenceFileDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CodeStudioReferenceFileDto": {
    fileName: string
    relativePath?: string | null
    contentType?: string | null
    size?: number
    content: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CodeStudioWorkspaceDto": {
    jobId?: string
    files?: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateDepartmentWorkItemDto": {
    parentJobInfoId?: string
    developmentJobDocumentId?: string | null
    targetDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateOrganizationUnitInput": {
    parentId?: string | null
    displayName: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateActionsAssetsDto": {
    name?: string | null
    description?: string | null
    action?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    memories?: Array<string> | null
    skills?: Array<string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemberDto": {
    name: string
    type: ApiModels["Dotin.CodeGenerator.Enums.AgentType"]
    model?: string | null
    systemMessage?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto": {
    name: string
    type: ApiModels["Dotin.CodeGenerator.Enums.AgentMemoryType"]
    input?: string | null
    tags?: Array<string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateTeamSkillsDto": {
    description?: string | null
    skillName: string
    code: string
    codeType: ApiModels["Dotin.CodeGenerator.Enums.AgentFunctionCodeType"]
    endpoint?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateUserIntegrationDto": {
    displayName: string
    username?: string | null
    url?: string | null
    type: ApiModels["Dotin.CodeGenerator.Enums.IntegrationType"]
    password?: string | null
    token?: string | null
    clearPassword?: boolean
    clearToken?: boolean
  }
  "Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    parentJobInfoId?: string
    developmentJobDocumentId?: string | null
    parentJobName?: string | null
    content?: string | null
    supportingDocument?: string | null
    targetDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    status?: ApiModels["Dotin.CodeGenerator.Enums.DepartmentWorkItemStatus"]
    selectedAgentTeamId?: string | null
    childJobInfoId?: string | null
    backgroundJobId?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.DevelopmentDocumentListView": 0 | 1
  "Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    name?: string | null
    content?: string | null
    attachedContent?: string | null
    formJson?: string | null
    jiraUrl?: string | null
    status?: ApiModels["Dotin.CodeGenerator.Enums.DevelopmentDocumentStatus"]
    sourceDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    targetDepartment?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    selectedAgentTeamId?: string | null
    startedJobInfoId?: string | null
    backgroundJobId?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.GitActionType": 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
  "Dotin.CodeGenerator.AppServices.Dtos.GitDto": {
    userIntegrationId?: string | null
    teamSkillId?: string | null
    workspaceId?: string
    startFresh?: boolean
    remoteUrl?: string | null
    branchName?: string | null
    sourceFolder?: string | null
    destinationPathInRepo?: string | null
    prompts?: Array<string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.GitPlanActionApprovalDto": {
    order?: number
    description?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.GitPlanActionDto": {
    order?: number
    action?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitActionType"]
    description?: string | null
    risk?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.GitPlanApprovalDto": {
    planId?: string
    summary?: string | null
    actions?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitPlanActionApprovalDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.GitPlanDto": {
    planId?: string
    summary?: string | null
    actions?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitPlanActionDto"]> | null
    expiresAtUtc?: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.JiraAddCommentRequestDto": {
    userIntegrationId: string
    issueKey: string
    comment: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.JiraIssueDto": {
    key?: string | null
    summary?: string | null
    description?: string | null
    status?: string | null
    type?: string | null
    priority?: string | null
    url?: string | null
    similarityReason?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.JiraRecommendationDto": {
    issue?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JiraIssueDto"]
    suggestedComment?: string | null
    explanation?: string | null
    similarIssues?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JiraIssueDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.JiraRecommendationRequestDto": {
    userIntegrationId: string
    issueUrlOrKey: string
    searchPrompt?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto": {
    id?: string
    name?: string | null
    tasks?: Record<string, string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.LogsDto": {
    title?: string | null
    content?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.LogsListDto": {
    list?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.LogsDto"]> | null
    title?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.MoveOrganizationUnitInput": {
    parentId?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.OrganizationMemberDto": {
    id?: string
    userName?: string | null
    name?: string | null
    surname?: string | null
    email?: string | null
    isActive?: boolean
    organizationUnitIds?: Array<string> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.OrganizationUnitDto": {
    id?: string
    parentId?: string | null
    displayName?: string | null
    code?: string | null
    memberCount?: number
    childCount?: number
  }
  "Dotin.CodeGenerator.AppServices.Dtos.ProcessStartResultDto": {
    backgroundJobId?: string | null
    jobInfoId?: string
    department?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
  }
  "Dotin.CodeGenerator.AppServices.Dtos.RenameOrganizationUnitInput": {
    displayName: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.SendDepartmentWorkItemToPromptWriterDto": {
    agentTeamId?: string
  }
  "Dotin.CodeGenerator.AppServices.Dtos.SetUserOrganizationUnitsInput": {
    organizationUnitIds: Array<string>
  }
  "Dotin.CodeGenerator.AppServices.Dtos.StructureDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    name?: string | null
    content?: string | null
    files?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureFileDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.StructureFileDto": {
    fileName?: string | null
    content?: string | null
    contentType?: string | null
    fileSize?: number
  }
  "Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    description?: string | null
    skillName?: string | null
    code?: string | null
    endpoint?: string | null
    codeType?: ApiModels["Dotin.CodeGenerator.Enums.AgentFunctionCodeType"]
  }
  "Dotin.CodeGenerator.AppServices.Dtos.UpdateDevelopmentDocumentJiraUrlDto": {
    jiraUrl?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.UploadPdfDto": {
    fileName: string
    fileContent: string
    contentType?: string | null
  }
  "Dotin.CodeGenerator.AppServices.Dtos.UserIntegrationDto": {
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    displayName?: string | null
    username?: string | null
    url?: string | null
    type?: ApiModels["Dotin.CodeGenerator.Enums.IntegrationType"]
    hasPassword?: boolean
    hasToken?: boolean
  }
  "Dotin.CodeGenerator.AppServices.JobJourneyDto": {
    jobInfoId?: string
    parentId?: string | null
    title?: string | null
    department?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    workflow?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    agentTeamName?: string | null
    creatorUserName?: string | null
    createdAt?: string
    lastModificationTime?: string | null
    dueDate?: string
    state?: string | null
    developmentDocument?: ApiModels["Dotin.CodeGenerator.AppServices.DevelopmentDocumentJourneyDto"]
    workItems?: Array<ApiModels["Dotin.CodeGenerator.AppServices.DepartmentWorkItemJourneyDto"]> | null
    children?: Array<ApiModels["Dotin.CodeGenerator.AppServices.JobJourneyDto"]> | null
  }
  "Dotin.CodeGenerator.AppServices.RunningJobDto": {
    jobInfoId?: string | null
    stopId?: string | null
    jobType?: string | null
    startedAt?: string | null
    title?: string | null
    logsPath?: string | null
    savePath?: string | null
    state?: string | null
    jiraId?: string | null
    dueDate?: string
    status?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    workflow?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    creatorUserName?: string | null
    lastModifierUserName?: string | null
    lastModificationTime?: string | null
    agentTeamName?: string | null
    parentId?: string | null
    developmentJobDocumentId?: string | null
    children?: Array<ApiModels["Dotin.CodeGenerator.AppServices.RunningJobDto"]> | null
  }
  "Dotin.CodeGenerator.Enums.AgentFunctionCodeType": 0 | 1 | 2 | 3
  "Dotin.CodeGenerator.Enums.AgentMemoryType": 0 | 1 | 2 | 3 | 4
  "Dotin.CodeGenerator.Enums.AgentType": 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
  "Dotin.CodeGenerator.Enums.DepartmentWorkItemStatus": 0 | 1 | 2
  "Dotin.CodeGenerator.Enums.DevelopmentDocumentStatus": 0 | 1 | 2 | 3
  "Dotin.CodeGenerator.Enums.FileSavingStrategy": 0 | 1 | 2
  "Dotin.CodeGenerator.Enums.IntegrationType": 0 | 1
  "Dotin.CodeGenerator.Enums.JobStatus": 0 | 1 | 2 | 3 | 4 | 5
  "Dotin.CodeGenerator.Enums.LLMProvider": 0 | 1
  "Dotin.CodeGenerator.Enums.RagType": 0 | 1
  "Dotin.CodeGenerator.Enums.WrokFlowActionType": 0 | 1 | 2 | 3 | 4
  "Dotin.CodeGenerator.Models.Response.CodeRunnerResult": {
    code?: string | null
    runsFine?: boolean
    runResult?: string | null
    errorMessage?: string | null
  }
  "Dotin.CodeGenerator.Models.Response.DebateResult": {
    referee?: string | null
    summary?: string | null
  }
  "Dotin.CodeGenerator.Models.Services.AgentConnectorTalk": {
    agentType?: ApiModels["Dotin.CodeGenerator.Enums.LLMProvider"]
    prompt?: string | null
    model?: string | null
    systemMessage?: string | null
    history?: Array<string> | null
    mcpEndpoint?: string | null
    imagePath?: Array<string> | null
  }
  "Dotin.CodeGenerator.Models.Services.AgentConnectorTalkBase": {
    agentType?: ApiModels["Dotin.CodeGenerator.Enums.LLMProvider"]
    prompt?: string | null
    model?: string | null
    systemMessage?: string | null
    history?: Array<string> | null
    mcpEndpoint?: string | null
  }
  "Dotin.CodeGenerator.Models.Services.FolderInfo": {
    fileName?: string | null
    id?: string | null
    path?: string | null
    content?: string | null
    newContent?: string | null
  }
  "Dotin.CodeGenerator.Models.Services.QuickActionModel": {
    prompt?: string | null
    learningSource?: string | null
    pdf?: string | null
  }
  "Dotin.CodeGenerator.Models.Services.RagDataDto": {
    key?: number
    sqlId?: string | null
    categoryId?: string | null
    type?: ApiModels["Dotin.CodeGenerator.Enums.RagType"]
    documentName?: string | null
    content?: string | null
    tags?: Array<string> | null
  }
  "Dotin.CodeGenerator.Models.Services.SemanticPluginInfo": {
    pluginDisplayName: string | null
    className: string | null
    namespace: string | null
    whatDoesThisCodeDo?: string | null
    code: string | null
  }
  "Dotin.CodeGenerator.Models.Services.TeamJobTask": {
    title?: string | null
    description?: string | null
    id?: number
    dependsOn?: Array<number> | null
    canRunInParallel?: boolean
    isCompleted?: boolean
  }
  "Dotin.CodeGenerator.Models.Services.TeamJobTasks": {
    tasks?: Array<ApiModels["Dotin.CodeGenerator.Models.Services.TeamJobTask"]> | null
  }
  "Dotin.CodeGenerator.Services.AiServies.Process.MonacoRequest": {
    list?: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]> | null
    prompt?: string | null
    agentType?: ApiModels["Dotin.CodeGenerator.Enums.AgentType"]
    jobInfoId?: string
    agentMemberDto?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]
  }
  "Dotin.CodeGenerator.Services.AiServies.Process.MonacoResponse": {
    codes?: Array<ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.MonacoResponseFileInfo"]> | null
  }
  "Dotin.CodeGenerator.Services.AiServies.Process.MonacoResponseFileInfo": {
    fileName?: string | null
    path?: string | null
    code?: string | null
    isEditedVersion?: boolean
    isNewFile?: boolean
    explanation?: string | null
    id?: string | null
  }
  "Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest": {
    prompt?: string | null
    document?: string | null
    teamId: string
    name?: string | null
    logsPath?: string | null
    savingPath?: string | null
    sourcePath?: string | null
    jobId?: number
    team?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]
    tasks?: ApiModels["Dotin.CodeGenerator.Models.Services.TeamJobTasks"]
    postTasks?: ApiModels["Dotin.CodeGenerator.Models.Services.TeamJobTasks"]
    postStructureId?: string | null
    structureId?: string | null
    selectedTag?: string | null
    extraInfo?: Record<string, string> | null
    enableDocumentation?: boolean | null
    rules?: string | null
    fileSavingStrategy?: ApiModels["Dotin.CodeGenerator.Enums.FileSavingStrategy"]
    scountAgentAcitvation?: boolean | null
    snapshotAgentAcitvation?: boolean | null
    enableTestGeneration?: boolean | null
    fastDevelopment?: boolean
  }
  "Dotin.CodeGenerator.Services.AiServies.Process.SimpleTextRequest": {
    request?: string | null
  }
  "Volo.Abp.Account.ChangePasswordInput": {
    currentPassword?: string | null
    newPassword: string
  }
  "Volo.Abp.Account.ProfileDto": {
    extraProperties?: Record<string, unknown> | null
    userName?: string | null
    email?: string | null
    name?: string | null
    surname?: string | null
    phoneNumber?: string | null
    isExternal?: boolean
    hasPassword?: boolean
    concurrencyStamp?: string | null
  }
  "Volo.Abp.Account.RegisterDto": {
    extraProperties?: Record<string, unknown> | null
    userName: string
    emailAddress: string
    password: string
    appName: string
  }
  "Volo.Abp.Account.ResetPasswordDto": {
    userId?: string
    resetToken: string
    password: string
  }
  "Volo.Abp.Account.SendPasswordResetCodeDto": {
    email: string
    appName: string
    returnUrl?: string | null
    returnUrlHash?: string | null
  }
  "Volo.Abp.Account.UpdateProfileDto": {
    extraProperties?: Record<string, unknown> | null
    userName?: string | null
    email?: string | null
    name?: string | null
    surname?: string | null
    phoneNumber?: string | null
    concurrencyStamp?: string | null
  }
  "Volo.Abp.Account.VerifyPasswordResetTokenInput": {
    userId?: string
    resetToken: string
  }
  "Volo.Abp.Account.Web.Areas.Account.Controllers.Models.AbpLoginResult": {
    result?: ApiModels["Volo.Abp.Account.Web.Areas.Account.Controllers.Models.LoginResultType"]
    description?: string | null
  }
  "Volo.Abp.Account.Web.Areas.Account.Controllers.Models.LoginResultType": 1 | 2 | 3 | 4 | 5
  "Volo.Abp.Account.Web.Areas.Account.Controllers.Models.UserLoginInfo": {
    userNameOrEmailAddress: string
    password: string
    rememberMe?: boolean
  }
  "Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Volo.Abp.Identity.IdentityRoleDto"]> | null
  }
  "Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Users.UserData, Volo.Abp.Users.Abstractions, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Volo.Abp.Users.UserData"]> | null
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.OrganizationMemberDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.OrganizationMemberDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.JobJourneyDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.JobJourneyDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.RunningJobDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Dotin.CodeGenerator.AppServices.RunningJobDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Volo.Abp.Identity.IdentityRoleDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.Identity.IdentityUserDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Volo.Abp.Identity.IdentityUserDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.TenantManagement.TenantDto, Volo.Abp.TenantManagement.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]": {
    items?: Array<ApiModels["Volo.Abp.TenantManagement.TenantDto"]> | null
    totalCount?: number
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationAuthConfigurationDto": {
    grantedPolicies?: Record<string, boolean> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationConfigurationDto": {
    localization?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationConfigurationDto"]
    auth?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationAuthConfigurationDto"]
    setting?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationSettingConfigurationDto"]
    currentUser?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.CurrentUserDto"]
    features?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationFeatureConfigurationDto"]
    globalFeatures?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationGlobalFeatureConfigurationDto"]
    multiTenancy?: ApiModels["Volo.Abp.AspNetCore.Mvc.MultiTenancy.MultiTenancyInfoDto"]
    currentTenant?: ApiModels["Volo.Abp.AspNetCore.Mvc.MultiTenancy.CurrentTenantDto"]
    timing?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.TimingDto"]
    clock?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ClockDto"]
    objectExtensions?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ObjectExtensionsDto"]
    extraProperties?: Record<string, unknown> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationFeatureConfigurationDto": {
    values?: Record<string, string | null> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationGlobalFeatureConfigurationDto": {
    enabledFeatures?: Array<string> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationConfigurationDto": {
    values?: Record<string, Record<string, string>> | null
    resources?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationResourceDto"]> | null
    languages?: Array<ApiModels["Volo.Abp.Localization.LanguageInfo"]> | null
    currentCulture?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.CurrentCultureDto"]
    defaultResourceName?: string | null
    languagesMap?: Record<string, Array<ApiModels["Volo.Abp.NameValue"]>> | null
    languageFilesMap?: Record<string, Array<ApiModels["Volo.Abp.NameValue"]>> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationDto": {
    resources?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationResourceDto"]> | null
    currentCulture?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.CurrentCultureDto"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationResourceDto": {
    texts?: Record<string, string> | null
    baseResources?: Array<string> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationSettingConfigurationDto": {
    values?: Record<string, string | null> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ClockDto": {
    kind?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.CurrentCultureDto": {
    displayName?: string | null
    englishName?: string | null
    threeLetterIsoLanguageName?: string | null
    twoLetterIsoLanguageName?: string | null
    isRightToLeft?: boolean
    cultureName?: string | null
    name?: string | null
    nativeName?: string | null
    dateTimeFormat?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.DateTimeFormatDto"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.CurrentUserDto": {
    isAuthenticated?: boolean
    id?: string | null
    tenantId?: string | null
    impersonatorUserId?: string | null
    impersonatorTenantId?: string | null
    impersonatorUserName?: string | null
    impersonatorTenantName?: string | null
    userName?: string | null
    name?: string | null
    surName?: string | null
    email?: string | null
    emailVerified?: boolean
    phoneNumber?: string | null
    phoneNumberVerified?: boolean
    roles?: Array<string> | null
    sessionId?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.DateTimeFormatDto": {
    calendarAlgorithmType?: string | null
    dateTimeFormatLong?: string | null
    shortDatePattern?: string | null
    fullDateTimePattern?: string | null
    dateSeparator?: string | null
    shortTimePattern?: string | null
    longTimePattern?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.IanaTimeZone": {
    timeZoneName?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.EntityExtensionDto": {
    properties?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyDto"]> | null
    configuration?: Record<string, unknown> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionEnumDto": {
    fields?: Array<ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionEnumFieldDto"]> | null
    localizationResource?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionEnumFieldDto": {
    name?: string | null
    value?: unknown | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiCreateDto": {
    isAvailable?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiDto": {
    onGet?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiGetDto"]
    onCreate?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiCreateDto"]
    onUpdate?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiUpdateDto"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiGetDto": {
    isAvailable?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiUpdateDto": {
    isAvailable?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyAttributeDto": {
    typeSimple?: string | null
    config?: Record<string, unknown> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyDto": {
    type?: string | null
    typeSimple?: string | null
    displayName?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.LocalizableStringDto"]
    api?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyApiDto"]
    ui?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiDto"]
    policy?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyPolicyDto"]
    attributes?: Array<ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyAttributeDto"]> | null
    configuration?: Record<string, unknown> | null
    defaultValue?: unknown | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyFeaturePolicyDto": {
    features?: Array<string> | null
    requiresAll?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyGlobalFeaturePolicyDto": {
    features?: Array<string> | null
    requiresAll?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyPermissionPolicyDto": {
    permissionNames?: Array<string> | null
    requiresAll?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyPolicyDto": {
    globalFeatures?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyGlobalFeaturePolicyDto"]
    features?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyFeaturePolicyDto"]
    permissions?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyPermissionPolicyDto"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiDto": {
    onTable?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiTableDto"]
    onCreateForm?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiFormDto"]
    onEditForm?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiFormDto"]
    lookup?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiLookupDto"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiFormDto": {
    isVisible?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiLookupDto": {
    url?: string | null
    resultListPropertyName?: string | null
    displayPropertyName?: string | null
    valuePropertyName?: string | null
    filterParamName?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionPropertyUiTableDto": {
    isVisible?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.LocalizableStringDto": {
    name?: string | null
    resource?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ModuleExtensionDto": {
    entities?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.EntityExtensionDto"]> | null
    configuration?: Record<string, unknown> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ObjectExtensionsDto": {
    modules?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ModuleExtensionDto"]> | null
    enums?: Record<string, ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending.ExtensionEnumDto"]> | null
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.TimeZone": {
    iana?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.IanaTimeZone"]
    windows?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.WindowsTimeZone"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.TimingDto": {
    timeZone?: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.TimeZone"]
  }
  "Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.WindowsTimeZone": {
    timeZoneId?: string | null
  }
  "Volo.Abp.AspNetCore.Mvc.MultiTenancy.CurrentTenantDto": {
    id?: string | null
    name?: string | null
    isAvailable?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.MultiTenancy.FindTenantResultDto": {
    success?: boolean
    tenantId?: string | null
    name?: string | null
    normalizedName?: string | null
    isActive?: boolean
  }
  "Volo.Abp.AspNetCore.Mvc.MultiTenancy.MultiTenancyInfoDto": {
    isEnabled?: boolean
  }
  "Volo.Abp.FeatureManagement.FeatureDto": {
    name?: string | null
    displayName?: string | null
    value?: string | null
    provider?: ApiModels["Volo.Abp.FeatureManagement.FeatureProviderDto"]
    description?: string | null
    valueType?: ApiModels["Volo.Abp.Validation.StringValues.IStringValueType"]
    depth?: number
    parentName?: string | null
  }
  "Volo.Abp.FeatureManagement.FeatureGroupDto": {
    name?: string | null
    displayName?: string | null
    features?: Array<ApiModels["Volo.Abp.FeatureManagement.FeatureDto"]> | null
  }
  "Volo.Abp.FeatureManagement.FeatureProviderDto": {
    name?: string | null
    key?: string | null
  }
  "Volo.Abp.FeatureManagement.GetFeatureListResultDto": {
    groups?: Array<ApiModels["Volo.Abp.FeatureManagement.FeatureGroupDto"]> | null
  }
  "Volo.Abp.FeatureManagement.UpdateFeatureDto": {
    name?: string | null
    value?: string | null
  }
  "Volo.Abp.FeatureManagement.UpdateFeaturesDto": {
    features?: Array<ApiModels["Volo.Abp.FeatureManagement.UpdateFeatureDto"]> | null
  }
  "Volo.Abp.Http.Modeling.ActionApiDescriptionModel": {
    uniqueName?: string | null
    name?: string | null
    httpMethod?: string | null
    url?: string | null
    supportedVersions?: Array<string> | null
    parametersOnMethod?: Array<ApiModels["Volo.Abp.Http.Modeling.MethodParameterApiDescriptionModel"]> | null
    parameters?: Array<ApiModels["Volo.Abp.Http.Modeling.ParameterApiDescriptionModel"]> | null
    returnValue?: ApiModels["Volo.Abp.Http.Modeling.ReturnValueApiDescriptionModel"]
    allowAnonymous?: boolean | null
    implementFrom?: string | null
  }
  "Volo.Abp.Http.Modeling.ApplicationApiDescriptionModel": {
    modules?: Record<string, ApiModels["Volo.Abp.Http.Modeling.ModuleApiDescriptionModel"]> | null
    types?: Record<string, ApiModels["Volo.Abp.Http.Modeling.TypeApiDescriptionModel"]> | null
  }
  "Volo.Abp.Http.Modeling.ControllerApiDescriptionModel": {
    controllerName?: string | null
    controllerGroupName?: string | null
    isRemoteService?: boolean
    isIntegrationService?: boolean
    apiVersion?: string | null
    type?: string | null
    interfaces?: Array<ApiModels["Volo.Abp.Http.Modeling.ControllerInterfaceApiDescriptionModel"]> | null
    actions?: Record<string, ApiModels["Volo.Abp.Http.Modeling.ActionApiDescriptionModel"]> | null
  }
  "Volo.Abp.Http.Modeling.ControllerInterfaceApiDescriptionModel": {
    type?: string | null
    name?: string | null
    methods?: Array<ApiModels["Volo.Abp.Http.Modeling.InterfaceMethodApiDescriptionModel"]> | null
  }
  "Volo.Abp.Http.Modeling.InterfaceMethodApiDescriptionModel": {
    name?: string | null
    parametersOnMethod?: Array<ApiModels["Volo.Abp.Http.Modeling.MethodParameterApiDescriptionModel"]> | null
    returnValue?: ApiModels["Volo.Abp.Http.Modeling.ReturnValueApiDescriptionModel"]
  }
  "Volo.Abp.Http.Modeling.MethodParameterApiDescriptionModel": {
    name?: string | null
    typeAsString?: string | null
    type?: string | null
    typeSimple?: string | null
    isOptional?: boolean
    defaultValue?: unknown | null
  }
  "Volo.Abp.Http.Modeling.ModuleApiDescriptionModel": {
    rootPath?: string | null
    remoteServiceName?: string | null
    controllers?: Record<string, ApiModels["Volo.Abp.Http.Modeling.ControllerApiDescriptionModel"]> | null
  }
  "Volo.Abp.Http.Modeling.ParameterApiDescriptionModel": {
    nameOnMethod?: string | null
    name?: string | null
    jsonName?: string | null
    type?: string | null
    typeSimple?: string | null
    isOptional?: boolean
    defaultValue?: unknown | null
    constraintTypes?: Array<string> | null
    bindingSourceId?: string | null
    descriptorName?: string | null
  }
  "Volo.Abp.Http.Modeling.PropertyApiDescriptionModel": {
    name?: string | null
    jsonName?: string | null
    type?: string | null
    typeSimple?: string | null
    isRequired?: boolean
    minLength?: number | null
    maxLength?: number | null
    minimum?: string | null
    maximum?: string | null
    regex?: string | null
  }
  "Volo.Abp.Http.Modeling.ReturnValueApiDescriptionModel": {
    type?: string | null
    typeSimple?: string | null
  }
  "Volo.Abp.Http.Modeling.TypeApiDescriptionModel": {
    baseType?: string | null
    isEnum?: boolean
    enumNames?: Array<string> | null
    enumValues?: Array<unknown> | null
    genericArguments?: Array<string> | null
    properties?: Array<ApiModels["Volo.Abp.Http.Modeling.PropertyApiDescriptionModel"]> | null
  }
  "Volo.Abp.Identity.IdentityRoleCreateDto": {
    extraProperties?: Record<string, unknown> | null
    name: string
    isDefault?: boolean
    isPublic?: boolean
  }
  "Volo.Abp.Identity.IdentityRoleDto": {
    extraProperties?: Record<string, unknown> | null
    id?: string
    name?: string | null
    isDefault?: boolean
    isStatic?: boolean
    isPublic?: boolean
    concurrencyStamp?: string | null
    creationTime?: string
  }
  "Volo.Abp.Identity.IdentityRoleUpdateDto": {
    extraProperties?: Record<string, unknown> | null
    name: string
    isDefault?: boolean
    isPublic?: boolean
    concurrencyStamp?: string | null
  }
  "Volo.Abp.Identity.IdentityUserCreateDto": {
    extraProperties?: Record<string, unknown> | null
    userName: string
    name?: string | null
    surname?: string | null
    email: string
    phoneNumber?: string | null
    isActive?: boolean
    lockoutEnabled?: boolean
    roleNames?: Array<string> | null
    password: string
  }
  "Volo.Abp.Identity.IdentityUserDto": {
    extraProperties?: Record<string, unknown> | null
    id?: string
    creationTime?: string
    creatorId?: string | null
    lastModificationTime?: string | null
    lastModifierId?: string | null
    isDeleted?: boolean
    deleterId?: string | null
    deletionTime?: string | null
    tenantId?: string | null
    userName?: string | null
    name?: string | null
    surname?: string | null
    email?: string | null
    emailConfirmed?: boolean
    phoneNumber?: string | null
    phoneNumberConfirmed?: boolean
    isActive?: boolean
    lockoutEnabled?: boolean
    accessFailedCount?: number
    lockoutEnd?: string | null
    concurrencyStamp?: string | null
    entityVersion?: number
    lastPasswordChangeTime?: string | null
  }
  "Volo.Abp.Identity.IdentityUserUpdateDto": {
    extraProperties?: Record<string, unknown> | null
    userName: string
    name?: string | null
    surname?: string | null
    email: string
    phoneNumber?: string | null
    isActive?: boolean
    lockoutEnabled?: boolean
    roleNames?: Array<string> | null
    password?: string | null
    concurrencyStamp?: string | null
  }
  "Volo.Abp.Identity.IdentityUserUpdateRolesDto": {
    roleNames: Array<string>
  }
  "Volo.Abp.Localization.LanguageInfo": {
    cultureName?: string | null
    uiCultureName?: string | null
    displayName?: string | null
    twoLetterISOLanguageName?: string | null
  }
  "Volo.Abp.NameValue": {
    name?: string | null
    value?: string | null
  }
  "Volo.Abp.PermissionManagement.GetPermissionListResultDto": {
    entityDisplayName?: string | null
    groups?: Array<ApiModels["Volo.Abp.PermissionManagement.PermissionGroupDto"]> | null
  }
  "Volo.Abp.PermissionManagement.PermissionGrantInfoDto": {
    name?: string | null
    displayName?: string | null
    parentName?: string | null
    isGranted?: boolean
    allowedProviders?: Array<string> | null
    grantedProviders?: Array<ApiModels["Volo.Abp.PermissionManagement.ProviderInfoDto"]> | null
  }
  "Volo.Abp.PermissionManagement.PermissionGroupDto": {
    name?: string | null
    displayName?: string | null
    displayNameKey?: string | null
    displayNameResource?: string | null
    permissions?: Array<ApiModels["Volo.Abp.PermissionManagement.PermissionGrantInfoDto"]> | null
  }
  "Volo.Abp.PermissionManagement.ProviderInfoDto": {
    providerName?: string | null
    providerKey?: string | null
  }
  "Volo.Abp.PermissionManagement.UpdatePermissionDto": {
    name?: string | null
    isGranted?: boolean
  }
  "Volo.Abp.PermissionManagement.UpdatePermissionsDto": {
    permissions?: Array<ApiModels["Volo.Abp.PermissionManagement.UpdatePermissionDto"]> | null
  }
  "Volo.Abp.SettingManagement.EmailSettingsDto": {
    smtpHost?: string | null
    smtpPort?: number
    smtpUserName?: string | null
    smtpPassword?: string | null
    smtpDomain?: string | null
    smtpEnableSsl?: boolean
    smtpUseDefaultCredentials?: boolean
    defaultFromAddress?: string | null
    defaultFromDisplayName?: string | null
  }
  "Volo.Abp.SettingManagement.SendTestEmailInput": {
    senderEmailAddress: string
    targetEmailAddress: string
    subject: string
    body?: string | null
  }
  "Volo.Abp.SettingManagement.UpdateEmailSettingsDto": {
    smtpHost?: string | null
    smtpPort?: number
    smtpUserName?: string | null
    smtpPassword?: string | null
    smtpDomain?: string | null
    smtpEnableSsl?: boolean
    smtpUseDefaultCredentials?: boolean
    defaultFromAddress: string
    defaultFromDisplayName: string
  }
  "Volo.Abp.TenantManagement.TenantCreateDto": {
    extraProperties?: Record<string, unknown> | null
    name: string
    adminEmailAddress: string
    adminPassword: string
  }
  "Volo.Abp.TenantManagement.TenantDto": {
    extraProperties?: Record<string, unknown> | null
    id?: string
    name?: string | null
    concurrencyStamp?: string | null
  }
  "Volo.Abp.TenantManagement.TenantUpdateDto": {
    extraProperties?: Record<string, unknown> | null
    name: string
    concurrencyStamp?: string | null
  }
  "Volo.Abp.Users.UserData": {
    id?: string
    tenantId?: string | null
    userName?: string | null
    name?: string | null
    surname?: string | null
    isActive?: boolean
    email?: string | null
    emailConfirmed?: boolean
    phoneNumber?: string | null
    phoneNumberConfirmed?: boolean
    extraProperties?: Record<string, unknown> | null
  }
  "Volo.Abp.Validation.StringValues.IStringValueType": {
    name?: string | null
    properties?: Record<string, unknown | null> | null
    validator?: ApiModels["Volo.Abp.Validation.StringValues.IValueValidator"]
  }
  "Volo.Abp.Validation.StringValues.IValueValidator": {
    name?: string | null
    properties?: Record<string, unknown | null> | null
  }
}

/** Every operation published by Swagger, keyed by a stable generated name. */
export const endpoints = {
  getAbpApiDefinition: { method: "GET", path: "/abp/api-definition", swaggerPath: "/api/abp/api-definition", tag: "AbpApiDefinition" },
  getAbpApplicationConfiguration: { method: "GET", path: "/abp/application-configuration", swaggerPath: "/api/abp/application-configuration", tag: "AbpApplicationConfiguration" },
  getAbpApplicationLocalization: { method: "GET", path: "/abp/application-localization", swaggerPath: "/api/abp/application-localization", tag: "AbpApplicationLocalization" },
  getAbpMultiTenancyTenantsByNameName: { method: "GET", path: "/abp/multi-tenancy/tenants/by-name/{name}", swaggerPath: "/api/abp/multi-tenancy/tenants/by-name/{name}", tag: "AbpTenant" },
  getAbpMultiTenancyTenantsByIdId: { method: "GET", path: "/abp/multi-tenancy/tenants/by-id/{id}", swaggerPath: "/api/abp/multi-tenancy/tenants/by-id/{id}", tag: "AbpTenant" },
  postAccountRegister: { method: "POST", path: "/account/register", swaggerPath: "/api/account/register", tag: "Account", contentType: "application/json", requestModel: "Volo.Abp.Account.RegisterDto" },
  postAccountSendPasswordResetCode: { method: "POST", path: "/account/send-password-reset-code", swaggerPath: "/api/account/send-password-reset-code", tag: "Account", contentType: "application/json", requestModel: "Volo.Abp.Account.SendPasswordResetCodeDto" },
  postAccountVerifyPasswordResetToken: { method: "POST", path: "/account/verify-password-reset-token", swaggerPath: "/api/account/verify-password-reset-token", tag: "Account", contentType: "application/json", requestModel: "Volo.Abp.Account.VerifyPasswordResetTokenInput" },
  postAccountResetPassword: { method: "POST", path: "/account/reset-password", swaggerPath: "/api/account/reset-password", tag: "Account", contentType: "application/json", requestModel: "Volo.Abp.Account.ResetPasswordDto" },
  getAppActionsAssets: { method: "GET", path: "/app/actions-assets", swaggerPath: "/api/app/actions-assets", tag: "ActionsAssets" },
  postAppActionsAssets: { method: "POST", path: "/app/actions-assets", swaggerPath: "/api/app/actions-assets", tag: "ActionsAssets", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateActionsAssetsDto" },
  postAppActionsAssetsQueryRagId: { method: "POST", path: "/app/actions-assets/query-rag/{Id}", swaggerPath: "/api/app/actions-assets/query-rag/{Id}", tag: "ActionsAssets" },
  postAppActionsAssetsQueryRagWithLLMId: { method: "POST", path: "/app/actions-assets/query-rag-with-lLM/{Id}", swaggerPath: "/api/app/actions-assets/query-rag-with-lLM/{Id}", tag: "ActionsAssets" },
  postAppActionsAssetsQueryTagsId: { method: "POST", path: "/app/actions-assets/query-tags/{Id}", swaggerPath: "/api/app/actions-assets/query-tags/{Id}", tag: "ActionsAssets" },
  putAppActionsAssetsIdByDto: { method: "PUT", path: "/app/actions-assets/{id}/by-dto", swaggerPath: "/api/app/actions-assets/{id}/by-dto", tag: "ActionsAssets", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateActionsAssetsDto" },
  getAppActionsAssetsId: { method: "GET", path: "/app/actions-assets/{id}", swaggerPath: "/api/app/actions-assets/{id}", tag: "ActionsAssets" },
  putAppActionsAssetsId: { method: "PUT", path: "/app/actions-assets/{id}", swaggerPath: "/api/app/actions-assets/{id}", tag: "ActionsAssets", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto" },
  deleteAppActionsAssetsId: { method: "DELETE", path: "/app/actions-assets/{id}", swaggerPath: "/api/app/actions-assets/{id}", tag: "ActionsAssets" },
  getAppAgentMember: { method: "GET", path: "/app/agent-member", swaggerPath: "/api/app/agent-member", tag: "AgentMember" },
  postAppAgentMember: { method: "POST", path: "/app/agent-member", swaggerPath: "/api/app/agent-member", tag: "AgentMember", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemberDto" },
  getAppAgentMemberSystemMessage: { method: "GET", path: "/app/agent-member/system-message", swaggerPath: "/api/app/agent-member/system-message", tag: "AgentMember" },
  getAppAgentMemberId: { method: "GET", path: "/app/agent-member/{id}", swaggerPath: "/api/app/agent-member/{id}", tag: "AgentMember" },
  putAppAgentMemberId: { method: "PUT", path: "/app/agent-member/{id}", swaggerPath: "/api/app/agent-member/{id}", tag: "AgentMember", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemberDto" },
  deleteAppAgentMemberId: { method: "DELETE", path: "/app/agent-member/{id}", swaggerPath: "/api/app/agent-member/{id}", tag: "AgentMember" },
  postAppAgentMemoryGetList: { method: "POST", path: "/app/agent-memory/get-list", swaggerPath: "/api/app/agent-memory/get-list", tag: "AgentMemory", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryPagedAndSortedResultRequestDto" },
  getAppAgentMemory: { method: "GET", path: "/app/agent-memory", swaggerPath: "/api/app/agent-memory", tag: "AgentMemory" },
  postAppAgentMemory: { method: "POST", path: "/app/agent-memory", swaggerPath: "/api/app/agent-memory", tag: "AgentMemory", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto" },
  deleteAppAgentMemory: { method: "DELETE", path: "/app/agent-memory", swaggerPath: "/api/app/agent-memory", tag: "AgentMemory" },
  postAppAgentMemoryMany: { method: "POST", path: "/app/agent-memory/many", swaggerPath: "/api/app/agent-memory/many", tag: "AgentMemory", contentType: "application/json" },
  putAppAgentMemoryId: { method: "PUT", path: "/app/agent-memory/{id}", swaggerPath: "/api/app/agent-memory/{id}", tag: "AgentMemory", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto" },
  getAppAgentTeam: { method: "GET", path: "/app/agent-team", swaggerPath: "/api/app/agent-team", tag: "AgentTeam" },
  postAppAgentTeam: { method: "POST", path: "/app/agent-team", swaggerPath: "/api/app/agent-team", tag: "AgentTeam", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.AgentTeamCreateDto" },
  getAppAgentTeamNoOraganization: { method: "GET", path: "/app/agent-team/no-oraganization", swaggerPath: "/api/app/agent-team/no-oraganization", tag: "AgentTeam" },
  getAppAgentTeamId: { method: "GET", path: "/app/agent-team/{id}", swaggerPath: "/api/app/agent-team/{id}", tag: "AgentTeam" },
  putAppAgentTeamId: { method: "PUT", path: "/app/agent-team/{id}", swaggerPath: "/api/app/agent-team/{id}", tag: "AgentTeam", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto" },
  deleteAppAgentTeamId: { method: "DELETE", path: "/app/agent-team/{id}", swaggerPath: "/api/app/agent-team/{id}", tag: "AgentTeam" },
  getAppAgentTeamSkill: { method: "GET", path: "/app/agent-team-skill", swaggerPath: "/api/app/agent-team-skill", tag: "AgentTeamSkill" },
  postAppAgentTeamSkill: { method: "POST", path: "/app/agent-team-skill", swaggerPath: "/api/app/agent-team-skill", tag: "AgentTeamSkill", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateTeamSkillsDto" },
  getAppAgentTeamSkillId: { method: "GET", path: "/app/agent-team-skill/{id}", swaggerPath: "/api/app/agent-team-skill/{id}", tag: "AgentTeamSkill" },
  putAppAgentTeamSkillId: { method: "PUT", path: "/app/agent-team-skill/{id}", swaggerPath: "/api/app/agent-team-skill/{id}", tag: "AgentTeamSkill", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateTeamSkillsDto" },
  deleteAppAgentTeamSkillId: { method: "DELETE", path: "/app/agent-team-skill/{id}", swaggerPath: "/api/app/agent-team-skill/{id}", tag: "AgentTeamSkill" },
  postAppAiAudioAudio: { method: "POST", path: "/app/ai-audio/audio", swaggerPath: "/api/app/ai-audio/audio", tag: "AiAudio" },
  postAppAiConnectorTalk: { method: "POST", path: "/app/ai-connector/talk", swaggerPath: "/api/app/ai-connector/talk", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Models.Services.AgentConnectorTalkBase" },
  postAppAiConnectorTalkWithToolCall: { method: "POST", path: "/app/ai-connector/talk-with-tool-call", swaggerPath: "/api/app/ai-connector/talk-with-tool-call", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Models.Services.AgentConnectorTalkBase" },
  postAppAiConnectorTalkWithImage: { method: "POST", path: "/app/ai-connector/talk-with-image", swaggerPath: "/api/app/ai-connector/talk-with-image", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Models.Services.AgentConnectorTalk" },
  postAppAiConnectorMonaco: { method: "POST", path: "/app/ai-connector/monaco", swaggerPath: "/api/app/ai-connector/monaco", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.MonacoRequest" },
  postAppAiConnectorPlanGit: { method: "POST", path: "/app/ai-connector/plan-git", swaggerPath: "/api/app/ai-connector/plan-git", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.GitDto" },
  postAppAiConnectorExecuteGitPlan: { method: "POST", path: "/app/ai-connector/execute-git-plan", swaggerPath: "/api/app/ai-connector/execute-git-plan", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.GitPlanApprovalDto" },
  postAppAiConnectorCancelGitPlan: { method: "POST", path: "/app/ai-connector/cancel-git-plan", swaggerPath: "/api/app/ai-connector/cancel-git-plan", tag: "AiConnector", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.GitPlanApprovalDto" },
  getAppAiConnectorAvailableModels: { method: "GET", path: "/app/ai-connector/available-models", swaggerPath: "/api/app/ai-connector/available-models", tag: "AiConnector" },
  getAppAiConnectorMonacoChatPrompts: { method: "GET", path: "/app/ai-connector/monaco-chat-prompts", swaggerPath: "/api/app/ai-connector/monaco-chat-prompts", tag: "AiConnector" },
  postAppCodeComposerSemanticPlugin: { method: "POST", path: "/app/code-composer/semantic-plugin", swaggerPath: "/api/app/code-composer/semantic-plugin", tag: "CodeComposer" },
  postAppCodeComposerReviewPrompt: { method: "POST", path: "/app/code-composer/review-prompt", swaggerPath: "/api/app/code-composer/review-prompt", tag: "CodeComposer" },
  postAppCodeComposerReviewPromptForCodeWriter: { method: "POST", path: "/app/code-composer/review-prompt-for-code-writer", swaggerPath: "/api/app/code-composer/review-prompt-for-code-writer", tag: "CodeComposer", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.SimpleTextRequest" },
  postAppCodeComposerGenerateTasks: { method: "POST", path: "/app/code-composer/generate-tasks", swaggerPath: "/api/app/code-composer/generate-tasks", tag: "CodeComposer", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.SimpleTextRequest" },
  postAppCodeComposerConvertTheCodeToJson: { method: "POST", path: "/app/code-composer/convert-the-code-to-json", swaggerPath: "/api/app/code-composer/convert-the-code-to-json", tag: "CodeComposer" },
  postAppCodeComposerIsPluginCompilable: { method: "POST", path: "/app/code-composer/is-plugin-compilable", swaggerPath: "/api/app/code-composer/is-plugin-compilable", tag: "CodeComposer", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Models.Services.SemanticPluginInfo" },
  postAppCodeComposerQuickActionCodeComposer: { method: "POST", path: "/app/code-composer/quick-action-code-composer", swaggerPath: "/api/app/code-composer/quick-action-code-composer", tag: "CodeComposer", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Models.Services.QuickActionModel" },
  postAppCodeComposerComposeDotnetCodeByDevelopersTeam: { method: "POST", path: "/app/code-composer/compose-dotnet-code-by-developers-team", swaggerPath: "/api/app/code-composer/compose-dotnet-code-by-developers-team", tag: "CodeComposer" },
  postAppCodeComposerDebate: { method: "POST", path: "/app/code-composer/debate", swaggerPath: "/api/app/code-composer/debate", tag: "CodeComposer" },
  postAppCodeConvertorConvert: { method: "POST", path: "/app/code-convertor/convert", swaggerPath: "/api/app/code-convertor/convert", tag: "CodeConvertor" },
  postAppCodeConvertorConvertFromUploadedFiles: { method: "POST", path: "/app/code-convertor/convert-from-uploaded-files", swaggerPath: "/api/app/code-convertor/convert-from-uploaded-files", tag: "CodeConvertor", contentType: "application/json" },
  postAppCodeStudioGenerate: { method: "POST", path: "/app/code-studio/generate", swaggerPath: "/api/app/code-studio/generate", tag: "CodeStudio", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CodeStudioGenerateDto" },
  getAppDepartmentWorkItem: { method: "GET", path: "/app/department-work-item", swaggerPath: "/api/app/department-work-item", tag: "DepartmentWorkItem" },
  postAppDepartmentWorkItem: { method: "POST", path: "/app/department-work-item", swaggerPath: "/api/app/department-work-item", tag: "DepartmentWorkItem", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateDepartmentWorkItemDto" },
  getAppDepartmentWorkItemId: { method: "GET", path: "/app/department-work-item/{id}", swaggerPath: "/api/app/department-work-item/{id}", tag: "DepartmentWorkItem" },
  postAppDepartmentWorkItemIdSendToPromptWriter: { method: "POST", path: "/app/department-work-item/{id}/send-to-prompt-writer", swaggerPath: "/api/app/department-work-item/{id}/send-to-prompt-writer", tag: "DepartmentWorkItem", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.SendDepartmentWorkItemToPromptWriterDto" },
  getAppDevelopmentJobDocument: { method: "GET", path: "/app/development-job-document", swaggerPath: "/api/app/development-job-document", tag: "DevelopmentJobDocument" },
  postAppDevelopmentJobDocument: { method: "POST", path: "/app/development-job-document", swaggerPath: "/api/app/development-job-document", tag: "DevelopmentJobDocument", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto" },
  getAppDevelopmentJobDocumentId: { method: "GET", path: "/app/development-job-document/{id}", swaggerPath: "/api/app/development-job-document/{id}", tag: "DevelopmentJobDocument" },
  putAppDevelopmentJobDocumentId: { method: "PUT", path: "/app/development-job-document/{id}", swaggerPath: "/api/app/development-job-document/{id}", tag: "DevelopmentJobDocument", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto" },
  deleteAppDevelopmentJobDocumentId: { method: "DELETE", path: "/app/development-job-document/{id}", swaggerPath: "/api/app/development-job-document/{id}", tag: "DevelopmentJobDocument" },
  putAppDevelopmentJobDocumentIdJiraUrl: { method: "PUT", path: "/app/development-job-document/{id}/jira-url", swaggerPath: "/api/app/development-job-document/{id}/jira-url", tag: "DevelopmentJobDocument", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.UpdateDevelopmentDocumentJiraUrlDto" },
  postAccountDynamicClaimsRefresh: { method: "POST", path: "/account/dynamic-claims/refresh", swaggerPath: "/api/account/dynamic-claims/refresh", tag: "DynamicClaims" },
  getSettingManagementEmailing: { method: "GET", path: "/setting-management/emailing", swaggerPath: "/api/setting-management/emailing", tag: "EmailSettings" },
  postSettingManagementEmailing: { method: "POST", path: "/setting-management/emailing", swaggerPath: "/api/setting-management/emailing", tag: "EmailSettings", contentType: "application/json", requestModel: "Volo.Abp.SettingManagement.UpdateEmailSettingsDto" },
  postSettingManagementEmailingSendTestEmail: { method: "POST", path: "/setting-management/emailing/send-test-email", swaggerPath: "/api/setting-management/emailing/send-test-email", tag: "EmailSettings", contentType: "application/json", requestModel: "Volo.Abp.SettingManagement.SendTestEmailInput" },
  getFeatureManagementFeatures: { method: "GET", path: "/feature-management/features", swaggerPath: "/api/feature-management/features", tag: "Features" },
  putFeatureManagementFeatures: { method: "PUT", path: "/feature-management/features", swaggerPath: "/api/feature-management/features", tag: "Features", contentType: "application/json", requestModel: "Volo.Abp.FeatureManagement.UpdateFeaturesDto" },
  deleteFeatureManagementFeatures: { method: "DELETE", path: "/feature-management/features", swaggerPath: "/api/feature-management/features", tag: "Features" },
  getFileManagementDownloadFolderAsZip: { method: "GET", path: "/file-management/download-folder-as-zip", swaggerPath: "/api/file-management/download-folder-as-zip", tag: "FileManagement" },
  postAppGitPushFolderToBranch: { method: "POST", path: "/app/git/push-folder-to-branch", swaggerPath: "/api/app/git/push-folder-to-branch", tag: "Git", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.GitDto" },
  postAppJiraAssistantRecommendComment: { method: "POST", path: "/app/jira-assistant/recommend-comment", swaggerPath: "/api/app/jira-assistant/recommend-comment", tag: "JiraAssistant", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.JiraRecommendationRequestDto" },
  postAppJiraAssistantComment: { method: "POST", path: "/app/jira-assistant/comment", swaggerPath: "/api/app/jira-assistant/comment", tag: "JiraAssistant", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.JiraAddCommentRequestDto" },
  getAppJobManagementJobs: { method: "GET", path: "/app/job-management/jobs", swaggerPath: "/api/app/job-management/jobs", tag: "JobManagement" },
  getAppJobManagementJobJourneys: { method: "GET", path: "/app/job-management/job-journeys", swaggerPath: "/api/app/job-management/job-journeys", tag: "JobManagement" },
  getAppJobManagementJobJourneyJobInfoId: { method: "GET", path: "/app/job-management/job-journey/{jobInfoId}", swaggerPath: "/api/app/job-management/job-journey/{jobInfoId}", tag: "JobManagement" },
  postAppJobManagementStopJobJobId: { method: "POST", path: "/app/job-management/stop-job/{jobId}", swaggerPath: "/api/app/job-management/stop-job/{jobId}", tag: "JobManagement" },
  postAppJobManagementRenameJobJobId: { method: "POST", path: "/app/job-management/rename-job/{jobId}", swaggerPath: "/api/app/job-management/rename-job/{jobId}", tag: "JobManagement" },
  getAppJobManagementJobInfoJobId: { method: "GET", path: "/app/job-management/job-info/{jobId}", swaggerPath: "/api/app/job-management/job-info/{jobId}", tag: "JobManagement" },
  postAppJobManagementChangeDueDateJobId: { method: "POST", path: "/app/job-management/change-due-date/{jobId}", swaggerPath: "/api/app/job-management/change-due-date/{jobId}", tag: "JobManagement" },
  getAppJobTaskIdTasks: { method: "GET", path: "/app/job-task/{id}/tasks", swaggerPath: "/api/app/job-task/{id}/tasks", tag: "JobTask" },
  getAppJobTask: { method: "GET", path: "/app/job-task", swaggerPath: "/api/app/job-task", tag: "JobTask" },
  postAppJobTask: { method: "POST", path: "/app/job-task", swaggerPath: "/api/app/job-task", tag: "JobTask", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto" },
  getAppJobTaskId: { method: "GET", path: "/app/job-task/{id}", swaggerPath: "/api/app/job-task/{id}", tag: "JobTask" },
  putAppJobTaskId: { method: "PUT", path: "/app/job-task/{id}", swaggerPath: "/api/app/job-task/{id}", tag: "JobTask", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto" },
  deleteAppJobTaskId: { method: "DELETE", path: "/app/job-task/{id}", swaggerPath: "/api/app/job-task/{id}", tag: "JobTask" },
  postAccountLogin: { method: "POST", path: "/account/login", swaggerPath: "/api/account/login", tag: "Login", contentType: "application/json", requestModel: "Volo.Abp.Account.Web.Areas.Account.Controllers.Models.UserLoginInfo" },
  getAccountLogout: { method: "GET", path: "/account/logout", swaggerPath: "/api/account/logout", tag: "Login" },
  postAccountCheckPassword: { method: "POST", path: "/account/check-password", swaggerPath: "/api/account/check-password", tag: "Login", contentType: "application/json", requestModel: "Volo.Abp.Account.Web.Areas.Account.Controllers.Models.UserLoginInfo" },
  getAppOrganizationUnitOrganizationUnits: { method: "GET", path: "/app/organization-unit/organization-units", swaggerPath: "/api/app/organization-unit/organization-units", tag: "OrganizationUnit" },
  postAppOrganizationUnitOrganizationUnit: { method: "POST", path: "/app/organization-unit/organization-unit", swaggerPath: "/api/app/organization-unit/organization-unit", tag: "OrganizationUnit", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateOrganizationUnitInput" },
  postAppOrganizationUnitIdRenameOrganizationUnit: { method: "POST", path: "/app/organization-unit/{id}/rename-organization-unit", swaggerPath: "/api/app/organization-unit/{id}/rename-organization-unit", tag: "OrganizationUnit", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.RenameOrganizationUnitInput" },
  postAppOrganizationUnitIdMoveOrganizationUnit: { method: "POST", path: "/app/organization-unit/{id}/move-organization-unit", swaggerPath: "/api/app/organization-unit/{id}/move-organization-unit", tag: "OrganizationUnit", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.MoveOrganizationUnitInput" },
  deleteAppOrganizationUnitIdOrganizationUnit: { method: "DELETE", path: "/app/organization-unit/{id}/organization-unit", swaggerPath: "/api/app/organization-unit/{id}/organization-unit", tag: "OrganizationUnit" },
  getAppOrganizationUnitMembers: { method: "GET", path: "/app/organization-unit/members", swaggerPath: "/api/app/organization-unit/members", tag: "OrganizationUnit" },
  postAppOrganizationUnitSetUserOrganizationUnitsUserId: { method: "POST", path: "/app/organization-unit/set-user-organization-units/{userId}", swaggerPath: "/api/app/organization-unit/set-user-organization-units/{userId}", tag: "OrganizationUnit", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.SetUserOrganizationUnitsInput" },
  postAppPdfAssitantAppserviceUploadPdf: { method: "POST", path: "/app/pdf-assitant-appservice/upload-pdf", swaggerPath: "/api/app/pdf-assitant-appservice/upload-pdf", tag: "PdfAssitantAppservice", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.UploadPdfDto" },
  getAppPdfAssitantAppservicePdf: { method: "GET", path: "/app/pdf-assitant-appservice/pdf", swaggerPath: "/api/app/pdf-assitant-appservice/pdf", tag: "PdfAssitantAppservice" },
  postAppPdfAssitantAppserviceToText: { method: "POST", path: "/app/pdf-assitant-appservice/to-text", swaggerPath: "/api/app/pdf-assitant-appservice/to-text", tag: "PdfAssitantAppservice" },
  postAppPdfAssitantAppserviceToImage: { method: "POST", path: "/app/pdf-assitant-appservice/to-image", swaggerPath: "/api/app/pdf-assitant-appservice/to-image", tag: "PdfAssitantAppservice" },
  getPermissionManagementPermissions: { method: "GET", path: "/permission-management/permissions", swaggerPath: "/api/permission-management/permissions", tag: "Permissions" },
  putPermissionManagementPermissions: { method: "PUT", path: "/permission-management/permissions", swaggerPath: "/api/permission-management/permissions", tag: "Permissions", contentType: "application/json", requestModel: "Volo.Abp.PermissionManagement.UpdatePermissionsDto" },
  postAppProcessStartProcess: { method: "POST", path: "/app/process/start-process", swaggerPath: "/api/app/process/start-process", tag: "Process", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest" },
  postAppProcessStartDevelopmentDocumentDocumentId: { method: "POST", path: "/app/process/start-development-document/{documentId}", swaggerPath: "/api/app/process/start-development-document/{documentId}", tag: "Process", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest" },
  postAppProcessStartDepartmentWorkItemWorkItemId: { method: "POST", path: "/app/process/start-department-work-item/{workItemId}", swaggerPath: "/api/app/process/start-department-work-item/{workItemId}", tag: "Process", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest" },
  postAppProcessStartPostJobsProcessJobinfoId: { method: "POST", path: "/app/process/start-post-jobs-process/{jobinfoId}", swaggerPath: "/api/app/process/start-post-jobs-process/{jobinfoId}", tag: "Process" },
  postAppProcessRedoWorkflowProcessJobinfoId: { method: "POST", path: "/app/process/redo-workflow-process/{jobinfoId}", swaggerPath: "/api/app/process/redo-workflow-process/{jobinfoId}", tag: "Process" },
  postAppProcessStartSubJobProcess: { method: "POST", path: "/app/process/start-sub-job-process", swaggerPath: "/api/app/process/start-sub-job-process", tag: "Process" },
  getAppProcessTasksJobinfoId: { method: "GET", path: "/app/process/tasks/{jobinfoId}", swaggerPath: "/api/app/process/tasks/{jobinfoId}", tag: "Process" },
  postAppProcessSaveFilesJobinfoId: { method: "POST", path: "/app/process/save-files/{jobinfoId}", swaggerPath: "/api/app/process/save-files/{jobinfoId}", tag: "Process", contentType: "application/json" },
  postAppProcessSetTeamJobInfo: { method: "POST", path: "/app/process/set-team-job-info", swaggerPath: "/api/app/process/set-team-job-info", tag: "Process", contentType: "application/json", requestModel: "Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest" },
  postAppProcessWorkflowToMermaid: { method: "POST", path: "/app/process/workflow-to-mermaid", swaggerPath: "/api/app/process/workflow-to-mermaid", tag: "Process" },
  getAppProcessIdLogs: { method: "GET", path: "/app/process/{id}/logs", swaggerPath: "/api/app/process/{id}/logs", tag: "Process" },
  getAppProcessFilesJobInfoId: { method: "GET", path: "/app/process/files/{jobInfoId}", swaggerPath: "/api/app/process/files/{jobInfoId}", tag: "Process" },
  getAppProcessSavedPathJobId: { method: "GET", path: "/app/process/saved-path/{jobId}", swaggerPath: "/api/app/process/saved-path/{jobId}", tag: "Process" },
  getAppProcessProcessRequestJobinfoId: { method: "GET", path: "/app/process/process-request/{jobinfoId}", swaggerPath: "/api/app/process/process-request/{jobinfoId}", tag: "Process" },
  getAccountMyProfile: { method: "GET", path: "/account/my-profile", swaggerPath: "/api/account/my-profile", tag: "Profile" },
  putAccountMyProfile: { method: "PUT", path: "/account/my-profile", swaggerPath: "/api/account/my-profile", tag: "Profile", contentType: "application/json", requestModel: "Volo.Abp.Account.UpdateProfileDto" },
  postAccountMyProfileChangePassword: { method: "POST", path: "/account/my-profile/change-password", swaggerPath: "/api/account/my-profile/change-password", tag: "Profile", contentType: "application/json", requestModel: "Volo.Abp.Account.ChangePasswordInput" },
  getIdentityRolesAll: { method: "GET", path: "/identity/roles/all", swaggerPath: "/api/identity/roles/all", tag: "Role" },
  getIdentityRoles: { method: "GET", path: "/identity/roles", swaggerPath: "/api/identity/roles", tag: "Role" },
  postIdentityRoles: { method: "POST", path: "/identity/roles", swaggerPath: "/api/identity/roles", tag: "Role", contentType: "application/json", requestModel: "Volo.Abp.Identity.IdentityRoleCreateDto" },
  getIdentityRolesId: { method: "GET", path: "/identity/roles/{id}", swaggerPath: "/api/identity/roles/{id}", tag: "Role" },
  putIdentityRolesId: { method: "PUT", path: "/identity/roles/{id}", swaggerPath: "/api/identity/roles/{id}", tag: "Role", contentType: "application/json", requestModel: "Volo.Abp.Identity.IdentityRoleUpdateDto" },
  deleteIdentityRolesId: { method: "DELETE", path: "/identity/roles/{id}", swaggerPath: "/api/identity/roles/{id}", tag: "Role" },
  getAppStructureId: { method: "GET", path: "/app/structure/{id}", swaggerPath: "/api/app/structure/{id}", tag: "Structure" },
  putAppStructureId: { method: "PUT", path: "/app/structure/{id}", swaggerPath: "/api/app/structure/{id}", tag: "Structure", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.StructureDto" },
  deleteAppStructureId: { method: "DELETE", path: "/app/structure/{id}", swaggerPath: "/api/app/structure/{id}", tag: "Structure" },
  getAppStructure: { method: "GET", path: "/app/structure", swaggerPath: "/api/app/structure", tag: "Structure" },
  postAppStructure: { method: "POST", path: "/app/structure", swaggerPath: "/api/app/structure", tag: "Structure", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.StructureDto" },
  getAppStructureFileStructureId: { method: "GET", path: "/app/structure/file/{structureId}", swaggerPath: "/api/app/structure/file/{structureId}", tag: "Structure" },
  getMultiTenancyTenantsId: { method: "GET", path: "/multi-tenancy/tenants/{id}", swaggerPath: "/api/multi-tenancy/tenants/{id}", tag: "Tenant" },
  putMultiTenancyTenantsId: { method: "PUT", path: "/multi-tenancy/tenants/{id}", swaggerPath: "/api/multi-tenancy/tenants/{id}", tag: "Tenant", contentType: "application/json", requestModel: "Volo.Abp.TenantManagement.TenantUpdateDto" },
  deleteMultiTenancyTenantsId: { method: "DELETE", path: "/multi-tenancy/tenants/{id}", swaggerPath: "/api/multi-tenancy/tenants/{id}", tag: "Tenant" },
  getMultiTenancyTenants: { method: "GET", path: "/multi-tenancy/tenants", swaggerPath: "/api/multi-tenancy/tenants", tag: "Tenant" },
  postMultiTenancyTenants: { method: "POST", path: "/multi-tenancy/tenants", swaggerPath: "/api/multi-tenancy/tenants", tag: "Tenant", contentType: "application/json", requestModel: "Volo.Abp.TenantManagement.TenantCreateDto" },
  getMultiTenancyTenantsIdDefaultConnectionString: { method: "GET", path: "/multi-tenancy/tenants/{id}/default-connection-string", swaggerPath: "/api/multi-tenancy/tenants/{id}/default-connection-string", tag: "Tenant" },
  putMultiTenancyTenantsIdDefaultConnectionString: { method: "PUT", path: "/multi-tenancy/tenants/{id}/default-connection-string", swaggerPath: "/api/multi-tenancy/tenants/{id}/default-connection-string", tag: "Tenant" },
  deleteMultiTenancyTenantsIdDefaultConnectionString: { method: "DELETE", path: "/multi-tenancy/tenants/{id}/default-connection-string", swaggerPath: "/api/multi-tenancy/tenants/{id}/default-connection-string", tag: "Tenant" },
  postAppTextHelperToJsonText: { method: "POST", path: "/app/text-helper/to-json-text", swaggerPath: "/api/app/text-helper/to-json-text", tag: "TextHelper" },
  postAppTextHelperEncodeToBase64: { method: "POST", path: "/app/text-helper/encode-to-base64", swaggerPath: "/api/app/text-helper/encode-to-base64", tag: "TextHelper" },
  postAppTextHelperDecodeFromBase64: { method: "POST", path: "/app/text-helper/decode-from-base64", swaggerPath: "/api/app/text-helper/decode-from-base64", tag: "TextHelper" },
  getSettingManagementTimezone: { method: "GET", path: "/setting-management/timezone", swaggerPath: "/api/setting-management/timezone", tag: "TimeZoneSettings" },
  postSettingManagementTimezone: { method: "POST", path: "/setting-management/timezone", swaggerPath: "/api/setting-management/timezone", tag: "TimeZoneSettings" },
  getSettingManagementTimezoneTimezones: { method: "GET", path: "/setting-management/timezone/timezones", swaggerPath: "/api/setting-management/timezone/timezones", tag: "TimeZoneSettings" },
  getIdentityUsersId: { method: "GET", path: "/identity/users/{id}", swaggerPath: "/api/identity/users/{id}", tag: "User" },
  putIdentityUsersId: { method: "PUT", path: "/identity/users/{id}", swaggerPath: "/api/identity/users/{id}", tag: "User", contentType: "application/json", requestModel: "Volo.Abp.Identity.IdentityUserUpdateDto" },
  deleteIdentityUsersId: { method: "DELETE", path: "/identity/users/{id}", swaggerPath: "/api/identity/users/{id}", tag: "User" },
  getIdentityUsers: { method: "GET", path: "/identity/users", swaggerPath: "/api/identity/users", tag: "User" },
  postIdentityUsers: { method: "POST", path: "/identity/users", swaggerPath: "/api/identity/users", tag: "User", contentType: "application/json", requestModel: "Volo.Abp.Identity.IdentityUserCreateDto" },
  getIdentityUsersIdRoles: { method: "GET", path: "/identity/users/{id}/roles", swaggerPath: "/api/identity/users/{id}/roles", tag: "User" },
  putIdentityUsersIdRoles: { method: "PUT", path: "/identity/users/{id}/roles", swaggerPath: "/api/identity/users/{id}/roles", tag: "User", contentType: "application/json", requestModel: "Volo.Abp.Identity.IdentityUserUpdateRolesDto" },
  getIdentityUsersAssignableRoles: { method: "GET", path: "/identity/users/assignable-roles", swaggerPath: "/api/identity/users/assignable-roles", tag: "User" },
  getIdentityUsersByUsernameUserName: { method: "GET", path: "/identity/users/by-username/{userName}", swaggerPath: "/api/identity/users/by-username/{userName}", tag: "User" },
  getIdentityUsersByEmailEmail: { method: "GET", path: "/identity/users/by-email/{email}", swaggerPath: "/api/identity/users/by-email/{email}", tag: "User" },
  getAppUser: { method: "GET", path: "/app/user", swaggerPath: "/api/app/user", tag: "UserIntegration" },
  postAppUser: { method: "POST", path: "/app/user", swaggerPath: "/api/app/user", tag: "UserIntegration", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateUserIntegrationDto" },
  getAppUserId: { method: "GET", path: "/app/user/{id}", swaggerPath: "/api/app/user/{id}", tag: "UserIntegration" },
  putAppUserId: { method: "PUT", path: "/app/user/{id}", swaggerPath: "/api/app/user/{id}", tag: "UserIntegration", contentType: "application/json", requestModel: "Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateUserIntegrationDto" },
  deleteAppUserId: { method: "DELETE", path: "/app/user/{id}", swaggerPath: "/api/app/user/{id}", tag: "UserIntegration" },
  getIdentityUsersLookupId: { method: "GET", path: "/identity/users/lookup/{id}", swaggerPath: "/api/identity/users/lookup/{id}", tag: "UserLookup" },
  getIdentityUsersLookupByUsernameUserName: { method: "GET", path: "/identity/users/lookup/by-username/{userName}", swaggerPath: "/api/identity/users/lookup/by-username/{userName}", tag: "UserLookup" },
  getIdentityUsersLookupSearch: { method: "GET", path: "/identity/users/lookup/search", swaggerPath: "/api/identity/users/lookup/search", tag: "UserLookup" },
  getIdentityUsersLookupCount: { method: "GET", path: "/identity/users/lookup/count", swaggerPath: "/api/identity/users/lookup/count", tag: "UserLookup" },
} as const satisfies Record<string, ApiEndpoint>

/** Exact request shape for each endpoint (path/query/header/body). */
export interface ApiRequests {
  getAbpApiDefinition: {
  query: {
    IncludeTypes?: boolean
  }
}
  getAbpApplicationConfiguration: {
  query: {
    IncludeLocalizationResources?: boolean
  }
}
  getAbpApplicationLocalization: {
  query: {
    CultureName: string
    OnlyDynamics?: boolean
  }
}
  getAbpMultiTenancyTenantsByNameName: {
  path: {
    name: string
  }
}
  getAbpMultiTenancyTenantsByIdId: {
  path: {
    id: string
  }
}
  postAccountRegister: {
  body?: ApiModels["Volo.Abp.Account.RegisterDto"]
}
  postAccountSendPasswordResetCode: {
  body?: ApiModels["Volo.Abp.Account.SendPasswordResetCodeDto"]
}
  postAccountVerifyPasswordResetToken: {
  body?: ApiModels["Volo.Abp.Account.VerifyPasswordResetTokenInput"]
}
  postAccountResetPassword: {
  body?: ApiModels["Volo.Abp.Account.ResetPasswordDto"]
}
  getAppActionsAssets: {
  query: {
    Filter?: string
    ActionType?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppActionsAssets: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateActionsAssetsDto"]
}
  postAppActionsAssetsQueryRagId: {
  path: {
    Id: string
  }
  query: {
    query?: string
  }
}
  postAppActionsAssetsQueryRagWithLLMId: {
  path: {
    Id: string
  }
  query: {
    query?: string
  }
}
  postAppActionsAssetsQueryTagsId: {
  path: {
    Id: string
  }
  query: {
    query?: string
  }
}
  putAppActionsAssetsIdByDto: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateActionsAssetsDto"]
}
  getAppActionsAssetsId: {
  path: {
    id: string
  }
}
  putAppActionsAssetsId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
}
  deleteAppActionsAssetsId: {
  path: {
    id: string
  }
}
  getAppAgentMember: {
  query: {
    Filter?: string
    Type?: ApiModels["Dotin.CodeGenerator.Enums.AgentType"]
    Model?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppAgentMember: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemberDto"]
}
  getAppAgentMemberSystemMessage: {
  query: {
    agentType?: ApiModels["Dotin.CodeGenerator.Enums.AgentType"]
  }
}
  getAppAgentMemberId: {
  path: {
    id: string
  }
}
  putAppAgentMemberId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemberDto"]
}
  deleteAppAgentMemberId: {
  path: {
    id: string
  }
}
  postAppAgentMemoryGetList: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryPagedAndSortedResultRequestDto"]
}
  getAppAgentMemory: {
  query: {
    Id?: string
  }
}
  postAppAgentMemory: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto"]
}
  deleteAppAgentMemory: {
  query: {
    agentId?: string
  }
}
  postAppAgentMemoryMany: {
  body?: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto"]>
}
  putAppAgentMemoryId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateAgentMemoryDto"]
}
  getAppAgentTeam: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppAgentTeam: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamCreateDto"]
}
  getAppAgentTeamNoOraganization: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  getAppAgentTeamId: {
  path: {
    id: string
  }
}
  putAppAgentTeamId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]
}
  deleteAppAgentTeamId: {
  path: {
    id: string
  }
}
  getAppAgentTeamSkill: {
  query: {
    Filter?: string
    CodeType?: ApiModels["Dotin.CodeGenerator.Enums.AgentFunctionCodeType"]
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppAgentTeamSkill: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateTeamSkillsDto"]
}
  getAppAgentTeamSkillId: {
  path: {
    id: string
  }
}
  putAppAgentTeamSkillId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateTeamSkillsDto"]
}
  deleteAppAgentTeamSkillId: {
  path: {
    id: string
  }
}
  postAppAiAudioAudio: {
  query: {
    type?: string
  }
}
  postAppAiConnectorTalk: {
  body?: ApiModels["Dotin.CodeGenerator.Models.Services.AgentConnectorTalkBase"]
}
  postAppAiConnectorTalkWithToolCall: {
  body?: ApiModels["Dotin.CodeGenerator.Models.Services.AgentConnectorTalkBase"]
}
  postAppAiConnectorTalkWithImage: {
  body?: ApiModels["Dotin.CodeGenerator.Models.Services.AgentConnectorTalk"]
}
  postAppAiConnectorMonaco: {
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.MonacoRequest"]
}
  postAppAiConnectorPlanGit: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitDto"]
}
  postAppAiConnectorExecuteGitPlan: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitPlanApprovalDto"]
}
  postAppAiConnectorCancelGitPlan: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitPlanApprovalDto"]
}
  getAppAiConnectorAvailableModels: Record<string, never>
  getAppAiConnectorMonacoChatPrompts: Record<string, never>
  postAppCodeComposerSemanticPlugin: {
  query: {
    prompt?: string
  }
}
  postAppCodeComposerReviewPrompt: {
  query: {
    prompt?: string
  }
}
  postAppCodeComposerReviewPromptForCodeWriter: {
  query: {
    teamId?: string
    structureId?: string
  }
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.SimpleTextRequest"]
}
  postAppCodeComposerGenerateTasks: {
  query: {
    teamId?: string
    structureId?: string
  }
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.SimpleTextRequest"]
}
  postAppCodeComposerConvertTheCodeToJson: {
  query: {
    prompt?: string
    jsonFomat?: string
  }
}
  postAppCodeComposerIsPluginCompilable: {
  body?: ApiModels["Dotin.CodeGenerator.Models.Services.SemanticPluginInfo"]
}
  postAppCodeComposerQuickActionCodeComposer: {
  body?: ApiModels["Dotin.CodeGenerator.Models.Services.QuickActionModel"]
}
  postAppCodeComposerComposeDotnetCodeByDevelopersTeam: {
  query: {
    prompt?: string
  }
}
  postAppCodeComposerDebate: {
  query: {
    prompt?: string
    debateMaxRounds?: number
  }
}
  postAppCodeConvertorConvert: {
  query: {
    directoryOrPath?: string
    fileExtension?: string
    isTextFormat?: boolean
  }
}
  postAppCodeConvertorConvertFromUploadedFiles: {
  body?: Record<string, string>
}
  postAppCodeStudioGenerate: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CodeStudioGenerateDto"]
}
  getAppDepartmentWorkItem: {
  query: {
    Department?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppDepartmentWorkItem: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateDepartmentWorkItemDto"]
}
  getAppDepartmentWorkItemId: {
  path: {
    id: string
  }
}
  postAppDepartmentWorkItemIdSendToPromptWriter: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.SendDepartmentWorkItemToPromptWriterDto"]
}
  getAppDevelopmentJobDocument: {
  query: {
    View?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentDocumentListView"]
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppDevelopmentJobDocument: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
}
  getAppDevelopmentJobDocumentId: {
  path: {
    id: string
  }
}
  putAppDevelopmentJobDocumentId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
}
  deleteAppDevelopmentJobDocumentId: {
  path: {
    id: string
  }
}
  putAppDevelopmentJobDocumentIdJiraUrl: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UpdateDevelopmentDocumentJiraUrlDto"]
}
  postAccountDynamicClaimsRefresh: Record<string, never>
  getSettingManagementEmailing: Record<string, never>
  postSettingManagementEmailing: {
  body?: ApiModels["Volo.Abp.SettingManagement.UpdateEmailSettingsDto"]
}
  postSettingManagementEmailingSendTestEmail: {
  body?: ApiModels["Volo.Abp.SettingManagement.SendTestEmailInput"]
}
  getFeatureManagementFeatures: {
  query: {
    providerName?: string
    providerKey?: string
  }
}
  putFeatureManagementFeatures: {
  query: {
    providerName?: string
    providerKey?: string
  }
  body?: ApiModels["Volo.Abp.FeatureManagement.UpdateFeaturesDto"]
}
  deleteFeatureManagementFeatures: {
  query: {
    providerName?: string
    providerKey?: string
  }
}
  getFileManagementDownloadFolderAsZip: {
  query: {
    jobId?: string
  }
}
  postAppGitPushFolderToBranch: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitDto"]
}
  postAppJiraAssistantRecommendComment: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JiraRecommendationRequestDto"]
}
  postAppJiraAssistantComment: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JiraAddCommentRequestDto"]
}
  getAppJobManagementJobs: {
  query: {
    Title?: string
    Workflow?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
    CreatorUserName?: string
    LastModifierUserName?: string
    LastModificationTimeFrom?: string
    LastModificationTimeTo?: string
    State?: string
    StartedAtFrom?: string
    StartedAtTo?: string
    Status?: ApiModels["Dotin.CodeGenerator.Enums.JobStatus"]
    DueDateFrom?: string
    DueDateTo?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  getAppJobManagementJobJourneys: {
  query: {
    SkipCount?: number
    MaxResultCount?: number
  }
}
  getAppJobManagementJobJourneyJobInfoId: {
  path: {
    jobInfoId: string
  }
}
  postAppJobManagementStopJobJobId: {
  path: {
    jobId: string
  }
}
  postAppJobManagementRenameJobJobId: {
  path: {
    jobId: string
  }
  query: {
    name?: string
  }
}
  getAppJobManagementJobInfoJobId: {
  path: {
    jobId: string
  }
}
  postAppJobManagementChangeDueDateJobId: {
  path: {
    jobId: string
  }
  query: {
    selectedDueDate?: string
  }
}
  getAppJobTaskIdTasks: {
  path: {
    id: string
  }
}
  getAppJobTask: {
  query: {
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppJobTask: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]
}
  getAppJobTaskId: {
  path: {
    id: string
  }
}
  putAppJobTaskId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]
}
  deleteAppJobTaskId: {
  path: {
    id: string
  }
}
  postAccountLogin: {
  body?: ApiModels["Volo.Abp.Account.Web.Areas.Account.Controllers.Models.UserLoginInfo"]
}
  getAccountLogout: Record<string, never>
  postAccountCheckPassword: {
  body?: ApiModels["Volo.Abp.Account.Web.Areas.Account.Controllers.Models.UserLoginInfo"]
}
  getAppOrganizationUnitOrganizationUnits: Record<string, never>
  postAppOrganizationUnitOrganizationUnit: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateOrganizationUnitInput"]
}
  postAppOrganizationUnitIdRenameOrganizationUnit: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.RenameOrganizationUnitInput"]
}
  postAppOrganizationUnitIdMoveOrganizationUnit: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.MoveOrganizationUnitInput"]
}
  deleteAppOrganizationUnitIdOrganizationUnit: {
  path: {
    id: string
  }
}
  getAppOrganizationUnitMembers: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postAppOrganizationUnitSetUserOrganizationUnitsUserId: {
  path: {
    userId: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.SetUserOrganizationUnitsInput"]
}
  postAppPdfAssitantAppserviceUploadPdf: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UploadPdfDto"]
}
  getAppPdfAssitantAppservicePdf: {
  query: {
    blobName?: string
  }
}
  postAppPdfAssitantAppserviceToText: {
  query: {
    blobName?: string
    reverse?: boolean
    fromPage?: number
    toPage?: number
    mergeIntoOne?: boolean
  }
}
  postAppPdfAssitantAppserviceToImage: {
  query: {
    blobName?: string
    fromPage?: number
    toPage?: number
  }
}
  getPermissionManagementPermissions: {
  query: {
    providerName?: string
    providerKey?: string
  }
}
  putPermissionManagementPermissions: {
  query: {
    providerName?: string
    providerKey?: string
  }
  body?: ApiModels["Volo.Abp.PermissionManagement.UpdatePermissionsDto"]
}
  postAppProcessStartProcess: {
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest"]
}
  postAppProcessStartDevelopmentDocumentDocumentId: {
  path: {
    documentId: string
  }
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest"]
}
  postAppProcessStartDepartmentWorkItemWorkItemId: {
  path: {
    workItemId: string
  }
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest"]
}
  postAppProcessStartPostJobsProcessJobinfoId: {
  path: {
    jobinfoId: string
  }
}
  postAppProcessRedoWorkflowProcessJobinfoId: {
  path: {
    jobinfoId: string
  }
}
  postAppProcessStartSubJobProcess: {
  query: {
    parentJobInfoId?: string
    teamId?: string
    actionType?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
  }
}
  getAppProcessTasksJobinfoId: {
  path: {
    jobinfoId: string
  }
}
  postAppProcessSaveFilesJobinfoId: {
  path: {
    jobinfoId: string
  }
  body?: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]>
}
  postAppProcessSetTeamJobInfo: {
  body?: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest"]
}
  postAppProcessWorkflowToMermaid: {
  query: {
    actionType?: ApiModels["Dotin.CodeGenerator.Enums.WrokFlowActionType"]
  }
}
  getAppProcessIdLogs: {
  path: {
    id: string
  }
}
  getAppProcessFilesJobInfoId: {
  path: {
    jobInfoId: string
  }
}
  getAppProcessSavedPathJobId: {
  path: {
    jobId: string
  }
}
  getAppProcessProcessRequestJobinfoId: {
  path: {
    jobinfoId: string
  }
}
  getAccountMyProfile: Record<string, never>
  putAccountMyProfile: {
  body?: ApiModels["Volo.Abp.Account.UpdateProfileDto"]
}
  postAccountMyProfileChangePassword: {
  body?: ApiModels["Volo.Abp.Account.ChangePasswordInput"]
}
  getIdentityRolesAll: Record<string, never>
  getIdentityRoles: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
    ExtraProperties?: Record<string, unknown>
  }
}
  postIdentityRoles: {
  body?: ApiModels["Volo.Abp.Identity.IdentityRoleCreateDto"]
}
  getIdentityRolesId: {
  path: {
    id: string
  }
}
  putIdentityRolesId: {
  path: {
    id: string
  }
  body?: ApiModels["Volo.Abp.Identity.IdentityRoleUpdateDto"]
}
  deleteIdentityRolesId: {
  path: {
    id: string
  }
}
  getAppStructureId: {
  path: {
    id: string
  }
}
  putAppStructureId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]
}
  deleteAppStructureId: {
  path: {
    id: string
  }
}
  getAppStructure: Record<string, never>
  postAppStructure: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]
}
  getAppStructureFileStructureId: {
  path: {
    structureId: string
  }
  query: {
    fileName?: string
  }
}
  getMultiTenancyTenantsId: {
  path: {
    id: string
  }
}
  putMultiTenancyTenantsId: {
  path: {
    id: string
  }
  body?: ApiModels["Volo.Abp.TenantManagement.TenantUpdateDto"]
}
  deleteMultiTenancyTenantsId: {
  path: {
    id: string
  }
}
  getMultiTenancyTenants: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
  }
}
  postMultiTenancyTenants: {
  body?: ApiModels["Volo.Abp.TenantManagement.TenantCreateDto"]
}
  getMultiTenancyTenantsIdDefaultConnectionString: {
  path: {
    id: string
  }
}
  putMultiTenancyTenantsIdDefaultConnectionString: {
  path: {
    id: string
  }
  query: {
    defaultConnectionString?: string
  }
}
  deleteMultiTenancyTenantsIdDefaultConnectionString: {
  path: {
    id: string
  }
}
  postAppTextHelperToJsonText: {
  query: {
    text?: string
  }
}
  postAppTextHelperEncodeToBase64: {
  query: {
    text?: string
  }
}
  postAppTextHelperDecodeFromBase64: {
  query: {
    base64Text?: string
  }
}
  getSettingManagementTimezone: Record<string, never>
  postSettingManagementTimezone: {
  query: {
    timezone?: string
  }
}
  getSettingManagementTimezoneTimezones: Record<string, never>
  getIdentityUsersId: {
  path: {
    id: string
  }
}
  putIdentityUsersId: {
  path: {
    id: string
  }
  body?: ApiModels["Volo.Abp.Identity.IdentityUserUpdateDto"]
}
  deleteIdentityUsersId: {
  path: {
    id: string
  }
}
  getIdentityUsers: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
    ExtraProperties?: Record<string, unknown>
  }
}
  postIdentityUsers: {
  body?: ApiModels["Volo.Abp.Identity.IdentityUserCreateDto"]
}
  getIdentityUsersIdRoles: {
  path: {
    id: string
  }
}
  putIdentityUsersIdRoles: {
  path: {
    id: string
  }
  body?: ApiModels["Volo.Abp.Identity.IdentityUserUpdateRolesDto"]
}
  getIdentityUsersAssignableRoles: Record<string, never>
  getIdentityUsersByUsernameUserName: {
  path: {
    userName: string
  }
}
  getIdentityUsersByEmailEmail: {
  path: {
    email: string
  }
}
  getAppUser: {
  query: {
    type?: ApiModels["Dotin.CodeGenerator.Enums.IntegrationType"]
  }
}
  postAppUser: {
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateUserIntegrationDto"]
}
  getAppUserId: {
  path: {
    id: string
  }
}
  putAppUserId: {
  path: {
    id: string
  }
  body?: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CreateUpdateUserIntegrationDto"]
}
  deleteAppUserId: {
  path: {
    id: string
  }
}
  getIdentityUsersLookupId: {
  path: {
    id: string
  }
}
  getIdentityUsersLookupByUsernameUserName: {
  path: {
    userName: string
  }
}
  getIdentityUsersLookupSearch: {
  query: {
    Filter?: string
    Sorting?: string
    SkipCount?: number
    MaxResultCount?: number
    ExtraProperties?: Record<string, unknown>
  }
}
  getIdentityUsersLookupCount: {
  query: {
    Filter?: string
  }
}
}

/** Successful response body for each endpoint. */
export interface ApiResponses {
  getAbpApiDefinition: ApiModels["Volo.Abp.Http.Modeling.ApplicationApiDescriptionModel"]
  getAbpApplicationConfiguration: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationConfigurationDto"]
  getAbpApplicationLocalization: ApiModels["Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ApplicationLocalizationDto"]
  getAbpMultiTenancyTenantsByNameName: ApiModels["Volo.Abp.AspNetCore.Mvc.MultiTenancy.FindTenantResultDto"]
  getAbpMultiTenancyTenantsByIdId: ApiModels["Volo.Abp.AspNetCore.Mvc.MultiTenancy.FindTenantResultDto"]
  postAccountRegister: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  postAccountSendPasswordResetCode: void
  postAccountVerifyPasswordResetToken: boolean
  postAccountResetPassword: void
  getAppActionsAssets: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppActionsAssets: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
  postAppActionsAssetsQueryRagId: Array<ApiModels["Dotin.CodeGenerator.Models.Services.RagDataDto"]>
  postAppActionsAssetsQueryRagWithLLMId: string
  postAppActionsAssetsQueryTagsId: Array<string>
  putAppActionsAssetsIdByDto: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
  getAppActionsAssetsId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
  putAppActionsAssetsId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ActionsAssetsDto"]
  deleteAppActionsAssetsId: void
  getAppAgentMember: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppAgentMember: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]
  getAppAgentMemberSystemMessage: string
  getAppAgentMemberId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]
  putAppAgentMemberId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemberDto"]
  deleteAppAgentMemberId: void
  postAppAgentMemoryGetList: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  getAppAgentMemory: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto"]
  postAppAgentMemory: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto"]
  deleteAppAgentMemory: void
  postAppAgentMemoryMany: void
  putAppAgentMemoryId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentMemoryDto"]
  getAppAgentTeam: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppAgentTeam: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]
  getAppAgentTeamNoOraganization: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  getAppAgentTeamId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]
  putAppAgentTeamId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.AgentTeamDto"]
  deleteAppAgentTeamId: void
  getAppAgentTeamSkill: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppAgentTeamSkill: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto"]
  getAppAgentTeamSkillId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto"]
  putAppAgentTeamSkillId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.TeamSkillsDto"]
  deleteAppAgentTeamSkillId: void
  postAppAiAudioAudio: string
  postAppAiConnectorTalk: string
  postAppAiConnectorTalkWithToolCall: Array<string>
  postAppAiConnectorTalkWithImage: string
  postAppAiConnectorMonaco: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.MonacoResponse"]
  postAppAiConnectorPlanGit: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.GitPlanDto"]
  postAppAiConnectorExecuteGitPlan: string
  postAppAiConnectorCancelGitPlan: void
  getAppAiConnectorAvailableModels: Array<string>
  getAppAiConnectorMonacoChatPrompts: Array<string>
  postAppCodeComposerSemanticPlugin: string
  postAppCodeComposerReviewPrompt: string
  postAppCodeComposerReviewPromptForCodeWriter: string
  postAppCodeComposerGenerateTasks: ApiModels["Dotin.CodeGenerator.Models.Services.TeamJobTasks"]
  postAppCodeComposerConvertTheCodeToJson: string
  postAppCodeComposerIsPluginCompilable: string
  postAppCodeComposerQuickActionCodeComposer: string
  postAppCodeComposerComposeDotnetCodeByDevelopersTeam: ApiModels["Dotin.CodeGenerator.Models.Response.CodeRunnerResult"]
  postAppCodeComposerDebate: ApiModels["Dotin.CodeGenerator.Models.Response.DebateResult"]
  postAppCodeConvertorConvert: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]>
  postAppCodeConvertorConvertFromUploadedFiles: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]>
  postAppCodeStudioGenerate: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.CodeStudioWorkspaceDto"]
  getAppDepartmentWorkItem: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppDepartmentWorkItem: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto"]
  getAppDepartmentWorkItemId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto"]
  postAppDepartmentWorkItemIdSendToPromptWriter: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DepartmentWorkItemDto"]
  getAppDevelopmentJobDocument: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppDevelopmentJobDocument: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
  getAppDevelopmentJobDocumentId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
  putAppDevelopmentJobDocumentId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
  deleteAppDevelopmentJobDocumentId: void
  putAppDevelopmentJobDocumentIdJiraUrl: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.DevelopmentJobDocumentCreateReadUpdateDto"]
  postAccountDynamicClaimsRefresh: void
  getSettingManagementEmailing: ApiModels["Volo.Abp.SettingManagement.EmailSettingsDto"]
  postSettingManagementEmailing: void
  postSettingManagementEmailingSendTestEmail: void
  getFeatureManagementFeatures: ApiModels["Volo.Abp.FeatureManagement.GetFeatureListResultDto"]
  putFeatureManagementFeatures: void
  deleteFeatureManagementFeatures: void
  getFileManagementDownloadFolderAsZip: void
  postAppGitPushFolderToBranch: void
  postAppJiraAssistantRecommendComment: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JiraRecommendationDto"]
  postAppJiraAssistantComment: void
  getAppJobManagementJobs: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.RunningJobDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  getAppJobManagementJobJourneys: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.JobJourneyDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  getAppJobManagementJobJourneyJobInfoId: ApiModels["Dotin.CodeGenerator.AppServices.JobJourneyDto"]
  postAppJobManagementStopJobJobId: boolean
  postAppJobManagementRenameJobJobId: void
  getAppJobManagementJobInfoJobId: string
  postAppJobManagementChangeDueDateJobId: void
  getAppJobTaskIdTasks: Record<string, string>
  getAppJobTask: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppJobTask: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]
  getAppJobTaskId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]
  putAppJobTaskId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.JobTasksDto"]
  deleteAppJobTaskId: void
  postAccountLogin: ApiModels["Volo.Abp.Account.Web.Areas.Account.Controllers.Models.AbpLoginResult"]
  getAccountLogout: void
  postAccountCheckPassword: ApiModels["Volo.Abp.Account.Web.Areas.Account.Controllers.Models.AbpLoginResult"]
  getAppOrganizationUnitOrganizationUnits: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.OrganizationUnitDto"]>
  postAppOrganizationUnitOrganizationUnit: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.OrganizationUnitDto"]
  postAppOrganizationUnitIdRenameOrganizationUnit: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.OrganizationUnitDto"]
  postAppOrganizationUnitIdMoveOrganizationUnit: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.OrganizationUnitDto"]
  deleteAppOrganizationUnitIdOrganizationUnit: void
  getAppOrganizationUnitMembers: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Dotin.CodeGenerator.AppServices.Dtos.OrganizationMemberDto, Dotin.CodeGenerator.Contracts, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"]
  postAppOrganizationUnitSetUserOrganizationUnitsUserId: void
  postAppPdfAssitantAppserviceUploadPdf: string
  getAppPdfAssitantAppservicePdf: Blob
  postAppPdfAssitantAppserviceToText: Array<string>
  postAppPdfAssitantAppserviceToImage: Array<string>
  getPermissionManagementPermissions: ApiModels["Volo.Abp.PermissionManagement.GetPermissionListResultDto"]
  putPermissionManagementPermissions: void
  postAppProcessStartProcess: string
  postAppProcessStartDevelopmentDocumentDocumentId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ProcessStartResultDto"]
  postAppProcessStartDepartmentWorkItemWorkItemId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.ProcessStartResultDto"]
  postAppProcessStartPostJobsProcessJobinfoId: string
  postAppProcessRedoWorkflowProcessJobinfoId: string
  postAppProcessStartSubJobProcess: string
  getAppProcessTasksJobinfoId: Record<string, string>
  postAppProcessSaveFilesJobinfoId: boolean
  postAppProcessSetTeamJobInfo: void
  postAppProcessWorkflowToMermaid: string
  getAppProcessIdLogs: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.LogsListDto"]
  getAppProcessFilesJobInfoId: Array<ApiModels["Dotin.CodeGenerator.Models.Services.FolderInfo"]>
  getAppProcessSavedPathJobId: string
  getAppProcessProcessRequestJobinfoId: ApiModels["Dotin.CodeGenerator.Services.AiServies.Process.ProcessRequest"]
  getAccountMyProfile: ApiModels["Volo.Abp.Account.ProfileDto"]
  putAccountMyProfile: ApiModels["Volo.Abp.Account.ProfileDto"]
  postAccountMyProfileChangePassword: void
  getIdentityRolesAll: ApiModels["Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  getIdentityRoles: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  postIdentityRoles: ApiModels["Volo.Abp.Identity.IdentityRoleDto"]
  getIdentityRolesId: ApiModels["Volo.Abp.Identity.IdentityRoleDto"]
  putIdentityRolesId: ApiModels["Volo.Abp.Identity.IdentityRoleDto"]
  deleteIdentityRolesId: void
  getAppStructureId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]
  putAppStructureId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]
  deleteAppStructureId: void
  getAppStructure: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]>
  postAppStructure: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureDto"]
  getAppStructureFileStructureId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.StructureFileDto"]
  getMultiTenancyTenantsId: ApiModels["Volo.Abp.TenantManagement.TenantDto"]
  putMultiTenancyTenantsId: ApiModels["Volo.Abp.TenantManagement.TenantDto"]
  deleteMultiTenancyTenantsId: void
  getMultiTenancyTenants: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.TenantManagement.TenantDto, Volo.Abp.TenantManagement.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  postMultiTenancyTenants: ApiModels["Volo.Abp.TenantManagement.TenantDto"]
  getMultiTenancyTenantsIdDefaultConnectionString: string
  putMultiTenancyTenantsIdDefaultConnectionString: void
  deleteMultiTenancyTenantsIdDefaultConnectionString: void
  postAppTextHelperToJsonText: string
  postAppTextHelperEncodeToBase64: string
  postAppTextHelperDecodeFromBase64: string
  getSettingManagementTimezone: string
  postSettingManagementTimezone: void
  getSettingManagementTimezoneTimezones: Array<ApiModels["Volo.Abp.NameValue"]>
  getIdentityUsersId: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  putIdentityUsersId: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  deleteIdentityUsersId: void
  getIdentityUsers: ApiModels["Volo.Abp.Application.Dtos.PagedResultDto`1[[Volo.Abp.Identity.IdentityUserDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  postIdentityUsers: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  getIdentityUsersIdRoles: ApiModels["Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  putIdentityUsersIdRoles: void
  getIdentityUsersAssignableRoles: ApiModels["Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Identity.IdentityRoleDto, Volo.Abp.Identity.Application.Contracts, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  getIdentityUsersByUsernameUserName: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  getIdentityUsersByEmailEmail: ApiModels["Volo.Abp.Identity.IdentityUserDto"]
  getAppUser: Array<ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UserIntegrationDto"]>
  postAppUser: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UserIntegrationDto"]
  getAppUserId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UserIntegrationDto"]
  putAppUserId: ApiModels["Dotin.CodeGenerator.AppServices.Dtos.UserIntegrationDto"]
  deleteAppUserId: void
  getIdentityUsersLookupId: ApiModels["Volo.Abp.Users.UserData"]
  getIdentityUsersLookupByUsernameUserName: ApiModels["Volo.Abp.Users.UserData"]
  getIdentityUsersLookupSearch: ApiModels["Volo.Abp.Application.Dtos.ListResultDto`1[[Volo.Abp.Users.UserData, Volo.Abp.Users.Abstractions, Version=9.2.2.0, Culture=neutral, PublicKeyToken=null]]"]
  getIdentityUsersLookupCount: number
}

export type ApiEndpointName = keyof typeof endpoints
export type ApiRequest<TEndpoint extends ApiEndpointName> = ApiRequests[TEndpoint]
export type ApiResponse<TEndpoint extends ApiEndpointName> = ApiResponses[TEndpoint]
