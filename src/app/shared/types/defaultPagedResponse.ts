export interface DefaultPagedResponse<T> {
    code: number
    message?: string
    isSuccess: boolean
    totalPages: number
    currentPage: number
    totalItems: number
    data: T
}