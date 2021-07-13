export interface DefaultPagedResponse<T> {
    code: number
    message?: string
    isSuccess: boolean
    totalPages: number
    currentPage: number
    maxUsers: number
    data: T
}