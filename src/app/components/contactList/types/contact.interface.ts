export interface AddressInterface {
    id: string
    fullAddress: string
    city: string
    country: string
    street: string
    building: string
    flat: string
    zipCode: string
}

export interface PhoneInterface {
    id: string
    countryCode: string
    operatorID: string
    phoneNumber: string
    phoneType: string
    comment: string
}

export interface AttachmentInterface {
    id: string
    file: File,
    comment: string
}

export interface ContactInterface {
    id: string
    name: string
    surname: string
    patronymic: string
    birthDate: string
    gender: string
    maritalStatus: string
    nationality: string
    email: string
    currentJob: string
    address: AddressInterface
    phones: Array<PhoneInterface>
}

export type EditionTableType = PhoneInterface | AttachmentInterface
