import {
    CreateContactActionType,
    CreateUserStateInterface,
    CreateContactActionTypes
} from "../actionType/addContactActionTypes";
import {CreateContactInterface} from "../../types/createContactInterface";

const initialState: CreateUserStateInterface = {
    isLoading: false,
    errors: {}

}

export const createContactReducer = (state: CreateUserStateInterface = initialState, action: CreateContactActionType): CreateUserStateInterface => {
    switch (action.type) {
        case CreateContactActionTypes.CREATE_CONTACT:
            return {
                ...state,
                isLoading: true
            }
        case CreateContactActionTypes.CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case CreateContactActionTypes.CREATE_CONTACT_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}