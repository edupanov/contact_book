export interface CreateContactInterface {
    name?: string
    surname?: string
    patronymic?: string
    birthDate?: string
    gender?: string
    maritalStatus?: string
    nationality?: string
    // webSite?: string,
    // email?: string
    address?: {
        fullAddress?: string
        city?: string
        country?: string
        street?: string
        building?: string
        flat?: string
        zipCode?: string
    }
}