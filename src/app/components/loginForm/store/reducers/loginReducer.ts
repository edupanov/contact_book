import {LoginActionType, LoginActionTypes, LoginFormStateInterface} from "../ActionTypes/logintypes";

const initialState: LoginFormStateInterface = {
    isLoading: false,
    data: null,
    errors: {}
}

export const loginReducer = (state: LoginFormStateInterface = initialState, action: LoginActionType) => {
    switch (action.type) {
        case LoginActionTypes.SET_LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case LoginActionTypes.SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case LoginActionTypes.SET_LOGIN_ERROR:
            return {
                ...state,
                errors: {}
            }
        default:
            return state

    }
}