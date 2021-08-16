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
    uploadDate: string
    fileName: string
    base64File:  string
    comment: string
    filePath?: string
    ext: string
}

export interface AvatarInterface {
    file: string
    name: string
}

export interface ContactInterface {
    reminder?: string
    id: string
    name: string
    surname: string
    patronymic: string
    birthDate: string
    gender: string
    maritalStatus: string
    nationality: string
    imagePath: string
    email: string
    currentJob: string
    logo: AvatarInterface
    attachments: Array<AttachmentInterface>
    address: AddressInterface
    phones: Array<PhoneInterface>
}

export type EditionTableType = PhoneInterface | AttachmentInterface
