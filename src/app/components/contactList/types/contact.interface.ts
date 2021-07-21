export interface ContactInterface {
    id: string
    name: string
    surname: string
    patronymic: string
    birthDate: string
    gender: string
    maritalStatus: string
    nationality: string
    address: {
        id: string
        fullAddress: string
        city: string
        country: string
        street: string
        building: string
        flat: string
        zipCode: string
    }
}
