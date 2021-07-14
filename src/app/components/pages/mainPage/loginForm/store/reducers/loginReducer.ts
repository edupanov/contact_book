import {LoginActionType, LoginActionTypes, LoginStateInterface} from "../ActionTypes/loginActionTypes";
import {LoginInterface} from "../../types/login.interface";

const initialState: LoginStateInterface = {
    isLoading: false,
    data: {} as LoginInterface,
    errors: {}
}

export const LoginReducer = (state = initialState, action: LoginActionType): LoginStateInterface => {
    switch (action.type) {
        case LoginActionTypes.GET_LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case LoginActionTypes.GET_LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LoginActionTypes.GET_LOGIN_FAILURE:
            return {
                ...state,
                errors: action.errors
            }
        default:
            return state
    }
}