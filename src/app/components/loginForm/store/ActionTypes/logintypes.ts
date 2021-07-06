import {LoginInterface} from "../../types/login.interface";


export interface LoginFormStateInterface {
    isLoading: boolean
    errors: object
    data: Array<LoginInterface> | null
}

export enum LoginActionTypes {
    SET_LOGIN= 'SET_LOGIN',
    SET_LOGIN_SUCCESS= 'SET_LOGIN_SUCCESS',
    SET_LOGIN_ERROR= 'SET_LOGIN_ERROR'

}

interface setLogin {
    type: LoginActionTypes.SET_LOGIN
}

interface setLoginSuccess {
    type: LoginActionTypes.SET_LOGIN_SUCCESS
    payload: Array<LoginInterface>
}

interface setLoginError {
    type: LoginActionTypes.SET_LOGIN_ERROR
    payload: {}
}

export type LoginActionType = setLogin | setLoginSuccess | setLoginError