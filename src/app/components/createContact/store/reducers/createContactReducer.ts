import {CreateUserActionType, CreateUserStateInterface, CreateUserActionTypes} from "../actionType/createContactActionTypes";

const initialState: CreateUserStateInterface = {
   isLoading: false,
    data: {},
    errors: {}

}

export const createUserReducer = (state: CreateUserStateInterface = initialState, action: CreateUserActionType ) => {
switch (action.type) {
    case CreateUserActionTypes.SET_USER:
        return {
            ...state,
            isLoading: true
        }
    case CreateUserActionTypes.SET_USER_SUCCESS:
        return {
            ...state,
            data: action.payload
        }
    case CreateUserActionTypes.SET_USER_FAILURE:
        return {
            ...state,
            errors: {}
        }

    default:
        return state
}
}