export interface DeletePhoneStateInterface {
    isDeleteLoading: boolean
    errors: object
}

export enum DeletePhoneActionTypes {
    DELETE_PHONE = '[Delete Phone] Delete Phone',
    DELETE_PHONE_SUCCESS = '[Delete Phone] Delete Phone Success',
    DELETE_PHONE_FAILURE = '[Delete Phone] Delete Phone Failure',
}

interface deletePhone {
    type: DeletePhoneActionTypes.DELETE_PHONE,
}

interface deletePhoneSuccess {
    type: DeletePhoneActionTypes.DELETE_PHONE_SUCCESS,
}

interface deletePhoneFailure {
    type: DeletePhoneActionTypes.DELETE_PHONE_FAILURE,
    errors: {}
}

export type DeletePhoneActionType = deletePhone | deletePhoneSuccess | deletePhoneFailure