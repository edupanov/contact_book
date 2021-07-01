export interface HttpClient {
    get(url: string, headers?: {}): Promise<Request>

    post(url: string, body: {}, headers?: {}): Promise<Request>

    put(url: string, body: {}, headers?: {}): Promise<Request>

    delete(url: string, body: {}, headers?: {}): Promise<Request>

    postFormData(url: string, body: FormData, headers?: {},): Promise<Request>
}

