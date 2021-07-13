import {CreateContactInterface} from "../../types/createContact.interface";

export interface CreateUserStateInterface {
    isLoading: boolean
    errors: object
    data: CreateContactInterface
}

export enum CreateUserActionTypes {
    SET_USER = '[Create User] Set User',
    SET_USER_SUCCESS = '[Create User] Set User Success',
    SET_USER_FAILURE = '[Create User] Set User Failure',
}

interface setUser {
    type: CreateUserActionTypes.SET_USER
}

interface setUserSuccess {
    type: CreateUserActionTypes.SET_USER_SUCCESS
    payload: CreateContactInterface
}
interface setUSerFailure {
    type: CreateUserActionTypes.SET_USER_FAILURE
    errors: {}
}

export type CreateUserActionType = setUser | setUserSuccess | setUSerFailure