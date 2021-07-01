import {ContactActionTypes, ContactListStateInterface, ContactsActionType} from "../actionTypes/actiontypes";

const initialState: ContactListStateInterface = {
    isLoading: false,
    data: null,
    errors: {}
}

export const contactsReducer = (state: ContactListStateInterface = initialState, action: ContactsActionType): ContactListStateInterface => {
    switch (action.type) {
        case ContactActionTypes.GET_CONTACTS:
            return {
                ...state,
                isLoading: true
            }

        case ContactActionTypes.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }

        case ContactActionTypes.GET_CONTACTS_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}