import {ContactInterface} from "../../types/contact.interface";

export interface ContactListStateInterface {
    isLoading: boolean
    errors: object
    maxUsers: number
    page: number
    take: number
    data: Array<ContactInterface> | null
}

export enum ContactActionTypes {
    GET_CONTACTS = '[Contact List] Get Contacts',
    GET_CONTACTS_SUCCESS = '[Contact List] Get Contacts Success',
    GET_CONTACTS_FAILURE = '[Contact List] Get Contacts Failure',
    SET_CONTACTS_PAGE = '[Contact List] Set Contacts Page',
    SET_CONTACTS_TAKE = '[Contact List] Set Contacts Take'
}

interface getContacts {
    type: ContactActionTypes.GET_CONTACTS
}

interface getContactsSuccess {
    type: ContactActionTypes.GET_CONTACTS_SUCCESS,
    payload: {
        users: Array<ContactInterface>,
        maxUsers: number
    }
}

interface getContactsFailure {
    type: ContactActionTypes.GET_CONTACTS_FAILURE,
    errors: {}
}

interface setContactPage {
    type: ContactActionTypes.SET_CONTACTS_PAGE,
    page: number
}

interface setContactTake {
    type: ContactActionTypes.SET_CONTACTS_TAKE,
    take: number
}

export type ContactsActionType = getContacts | getContactsSuccess | getContactsFailure | setContactPage | setContactTake