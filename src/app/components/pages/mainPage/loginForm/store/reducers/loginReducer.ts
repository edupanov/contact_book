import {LoginActionType, LoginActionTypes, LoginStateInterface} from "../ActionTypes/loginActionTypes";

const initialState: LoginStateInterface = {
    isLogged: false,
    errors: {}
}

export const LoginReducer = (state = initialState, action: LoginActionType): LoginStateInterface => {
    switch (action.type) {
        case LoginActionTypes.GET_LOGIN:
            return {
                ...state,
                isLogged: false
            }
        case LoginActionTypes.GET_LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
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