export interface HttpClient {
   get<T>(url: string, headers?: {}): Promise<Request>

    post<T>(url: string, body: {}, headers?: {}): Promise<Request>

    put<T>(url: string, body: {}, headers?: {}): Promise<Request>

    delete<T>(url: string, body: {}, headers?: {}): Promise<Request>

    postFormData<T>(url: string, body: FormData, headers?: {},): Promise<Request>
}

