import {
    UpdateContactActionType,
    UpdateContactActionTypes,
    UpdateContactStateInterface
} from "../actionType/updateContactActionTypes";

const initialState: UpdateContactStateInterface = {
    isLoading: false,
    errors: {}

}

export const updateContactReducer = (state: UpdateContactStateInterface = initialState, action: UpdateContactActionType): UpdateContactStateInterface => {
    switch (action.type) {
        case UpdateContactActionTypes.UPDATE_CONTACT:
            return {
                ...state,
                isLoading: true
            }
        case UpdateContactActionTypes.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case UpdateContactActionTypes.UPDATE_CONTACT_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}