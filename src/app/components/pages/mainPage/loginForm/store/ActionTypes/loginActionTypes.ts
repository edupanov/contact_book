import {LoginInterface} from "../../types/login.interface";

export interface LoginStateInterface {
    isLoading: boolean
    data: LoginInterface
    errors: {}
}

export enum LoginActionTypes  {
    GET_LOGIN = '[Login Action] Get Login',
    GET_LOGIN_SUCCESS = '[Login Action] Get Login Success',
    GET_LOGIN_FAILURE = '[Login Action] GetLogin Failure'
}

interface GetLogin {
    type: LoginActionTypes.GET_LOGIN
}

interface GetLoginSuccess {
    type: LoginActionTypes.GET_LOGIN_SUCCESS,
    payload: LoginInterface
}

interface GetLoginFailure {
    type: LoginActionTypes.GET_LOGIN_FAILURE,
    errors: {}
}

export type LoginActionType = GetLogin | GetLoginSuccess | GetLoginFailure



