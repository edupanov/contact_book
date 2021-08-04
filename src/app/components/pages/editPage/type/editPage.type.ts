import {ContactInterface} from "../../../contactList/types/contact.interface";
import {Dispatch, SetStateAction} from "react";

export type LocationType = {
    path: string
    contact: ContactInterface
}

export interface PhoneFormProps {
    setContact: (data: any, tableName: string) => void
    contact: ContactInterface
    setCurrentContact: Dispatch<SetStateAction<ContactInterface>>
}
