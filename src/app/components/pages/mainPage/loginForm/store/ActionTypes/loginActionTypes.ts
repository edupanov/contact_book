export interface LoginStateInterface {
    isSuccess: boolean
    errors: {}
    data: string
}

export enum LoginActionTypes  {
    GET_LOGIN = '[Login Action] Get Login',
    GET_LOGIN_SUCCESS = '[Login Action] Get Login Success',
    GET_LOGIN_FAILURE = '[Login Action] GetLogin Failure',
    LOGOUT_SUCCESS = '[Login Action] Logout Success'
}

interface GetLogin {
    type: LoginActionTypes.GET_LOGIN
}

interface GetLoginSuccess {
    type: LoginActionTypes.GET_LOGIN_SUCCESS,
    payload: ''
}

interface GetLoginFailure {
    type: LoginActionTypes.GET_LOGIN_FAILURE,
    errors: {}
}
interface LogOutSuccess {
    type: LoginActionTypes.LOGOUT_SUCCESS,
}


export type LoginActionType = GetLogin | GetLoginSuccess | GetLoginFailure | LogOutSuccess



