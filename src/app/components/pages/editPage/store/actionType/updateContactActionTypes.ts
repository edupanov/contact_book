export interface UpdateContactStateInterface {
    isLoading: boolean
    errors: object
}

export enum UpdateContactActionTypes {
    UPDATE_CONTACT = '[Update User] Update User',
    UPDATE_CONTACT_SUCCESS = '[Update User] Update User Success',
    UPDATE_CONTACT_FAILURE = '[Update User] Update User Failure',
}

interface updateContact {
    type: UpdateContactActionTypes.UPDATE_CONTACT,
}

interface updateContactSuccess {
    type: UpdateContactActionTypes.UPDATE_CONTACT_SUCCESS,
}

interface updateContactFailure {
    type: UpdateContactActionTypes.UPDATE_CONTACT_FAILURE,
    errors: {}
}


export type UpdateContactActionType = updateContact | updateContactSuccess | updateContactFailure