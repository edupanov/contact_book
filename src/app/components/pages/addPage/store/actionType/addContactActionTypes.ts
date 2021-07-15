export interface CreateUserStateInterface {
    isLoading: boolean
    errors: object
}

export enum CreateContactActionTypes {
    CREATE_CONTACT = '[Create User] Create User',
    CREATE_CONTACT_SUCCESS = '[Create User] Create User Success',
    CREATE_CONTACT_FAILURE = '[Create User] Create User Failure',
}

interface createContact {
    type: CreateContactActionTypes.CREATE_CONTACT,
}

interface createContactSuccess {
    type: CreateContactActionTypes.CREATE_CONTACT_SUCCESS,
}

interface createContactFailure {
    type: CreateContactActionTypes.CREATE_CONTACT_FAILURE,
    errors: {}
}


export type CreateContactActionType = createContact | createContactSuccess | createContactFailure