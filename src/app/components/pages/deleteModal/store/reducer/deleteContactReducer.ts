import {
    DeleteContactActionType,
    DeleteContactActionTypes,
    DeleteContactStateInterface
} from "../actionType/deleteContactActionTypes";


const initialState: DeleteContactStateInterface = {
    isLoading: false,
    errors: {}

}

export const deleteContactReducer = (state: DeleteContactStateInterface = initialState, action: DeleteContactActionType): DeleteContactStateInterface => {
    switch (action.type) {
        case DeleteContactActionTypes.DELETE_CONTACT:
            return {
                ...state,
                isLoading: true
            }
        case DeleteContactActionTypes.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case DeleteContactActionTypes.DELETE_CONTACT_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}