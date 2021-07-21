export interface DeleteContactStateInterface {
    isDeleteLoading: boolean
    errors: object
}

export enum DeleteContactActionTypes {
    DELETE_CONTACT = '[Delete User] Delete User',
    DELETE_CONTACT_SUCCESS = '[Delete User] Delete User Success',
    DELETE_CONTACT_FAILURE = '[Delete User] Delete User Failure',
}

interface updateContact {
    type: DeleteContactActionTypes.DELETE_CONTACT,
}

interface updateContactSuccess {
    type: DeleteContactActionTypes.DELETE_CONTACT_SUCCESS,
}

interface updateContactFailure {
    type: DeleteContactActionTypes.DELETE_CONTACT_FAILURE,
    errors: {}
}


export type DeleteContactActionType = updateContact | updateContactSuccess | updateContactFailure