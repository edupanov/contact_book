import {LoginActionType, LoginActionTypes, LoginStateInterface} from "../ActionTypes/loginActionTypes";

const initialState: LoginStateInterface = {
    isSuccess: false,
    errors: {},
}

export const LoginReducer = (state = initialState, action: LoginActionType): LoginStateInterface => {
    switch (action.type) {
        case LoginActionTypes.GET_LOGIN:
            return {
                ...state,
                isSuccess: false
            }
        case LoginActionTypes.GET_LOGIN_SUCCESS:
            return {
                ...state,
                isSuccess: true,
            }
        case LoginActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isSuccess: false,
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