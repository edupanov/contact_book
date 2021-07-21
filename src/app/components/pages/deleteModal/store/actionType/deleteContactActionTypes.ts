export interface DeleteContactStateInterface {
    isDeleteLoading: boolean
    errors: object
}

export enum DeleteContactActionTypes {
    DELETE_CONTACT = '[Delete User] Delete User',
    DELETE_CONTACT_SUCCESS = '[Delete User] Delete User Success',
    DELETE_CONTACT_FAILURE = '[Delete User] Delete User Failure',
    DELETE_ALL = '[Delete all] Delete all contacts'
}

interface deleteContact {
    type: DeleteContactActionTypes.DELETE_CONTACT,
}

interface deleteContactSuccess {
    type: DeleteContactActionTypes.DELETE_CONTACT_SUCCESS,
}

interface deleteContactFailure {
    type: DeleteContactActionTypes.DELETE_CONTACT_FAILURE,
    errors: {}
}

interface deleteAll {
    type: DeleteContactActionTypes.DELETE_ALL,

}


export type DeleteContactActionType = deleteContact | deleteContactSuccess | deleteContactFailure | deleteAll