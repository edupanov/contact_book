import {HttpClient} from "../../types/requestSender";

export const RequestSender: HttpClient = {
    async get(url, headers): Promise<Request> {
        const options: RequestInit = {
            method: 'GET',
            headers: {...defaultHeaders, ...headers}
        }
        return await fetch(url, options)
            .then(response => {
                console.log(response)
                return errorHandler(response)
            }).catch(err => {
                console.log(err)
                return err
            })
    },

    async post(url, body, headers): Promise<Request> {
        const options: RequestInit = {
            method: 'POST',
            headers: {...defaultHeaders, ...headers},
            body: JSON.stringify(body)
        }

        return await fetch(url, options)
            .then(response => errorHandler(response))//можно передать метод для обработки ошибок
    },

    async put(url, body, headers): Promise<Request> {
        const options: RequestInit = {
            method: 'PUT',
            headers: {...defaultHeaders, ...headers},
            body: JSON.stringify(body)
        }

        return await fetch(url, options)
            .then(response => errorHandler(response))
    },

    async delete(url, body, header): Promise<Request> {
        const options: RequestInit = {
            method: 'DELETE',
            headers: {...defaultHeaders, ...header},
            body: JSON.stringify(body)
        }

        return await fetch(url, options)
            .then(response => errorHandler(response))
    },

    async postFormData(url, body, headers): Promise<Request> {
        const options: RequestInit = {
            method: 'POSTREQUESTDATA',
            headers: {...defaultHeaders, ...headers},
            body
        }

        return await fetch(url, options)
            .then(response => errorHandler(response))
    },


}

const errorHandler = (res: any): Promise<Request> => {
    return res
}

const defaultHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}