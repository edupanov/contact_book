import {ContactInterface} from "../../types/contact.interface";

export interface ContactListStateInterface {
    isLoading: boolean,
    errors: object,
    data: Array<ContactInterface> | null
}

export enum ContactActionTypes {
    GET_CONTACTS = '[Contact List] Get Contacts',
    GET_CONTACTS_SUCCESS = '[Contact List] Get Contacts Success',
    GET_CONTACTS_FAILURE = '[Contact List] Get Contacts Failure'
}

interface getContacts {
    type: ContactActionTypes.GET_CONTACTS
}

interface getContactsSuccess {
    type: ContactActionTypes.GET_CONTACTS_SUCCESS,
    payload: Array<ContactInterface>
}

interface getContactsFailure {
    type: ContactActionTypes.GET_CONTACTS_FAILURE,
    errors: {}
}

export type ContactsActionType = getContacts | getContactsSuccess | getContactsFailure