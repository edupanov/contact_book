export interface CreatePhoneStateInterface {
    isLoading: boolean
    errors: object
}

export enum CreatePhoneActionTypes {
    CREATE_PHONE = '[Create Phone] Create Phone',
    CREATE_PHONE_SUCCESS = '[Create Phone] Create Phone Success',
    CREATE_PHONE_FAILURE = '[Create Phone] Create Phone Failure',
}

interface createPhone {
    type: CreatePhoneActionTypes.CREATE_PHONE,
}

interface createPhoneSuccess {
    type: CreatePhoneActionTypes.CREATE_PHONE_SUCCESS,
}

interface createPhoneFailure {
    type: CreatePhoneActionTypes.CREATE_PHONE_FAILURE,
    errors: {}
}


export type CreatePhoneActionType = createPhone | createPhoneSuccess | createPhoneFailure