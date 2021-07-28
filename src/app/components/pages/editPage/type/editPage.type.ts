import {ContactInterface} from "../../../contactList/types/contact.interface";

export type LocationType = {
    path: string
    contact: ContactInterface
}

export interface PhoneFormProps {
    setContact: (data: any, tableName: string) => void
    contact: ContactInterface
}
