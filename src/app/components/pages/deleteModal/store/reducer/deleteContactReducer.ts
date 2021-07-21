import {
    DeleteContactActionType,
    DeleteContactActionTypes,
    DeleteContactStateInterface
} from "../actionType/deleteContactActionTypes";


const initialState: DeleteContactStateInterface = {
    isDeleteLoading: false,
    errors: {}

}

export const deleteContactReducer = (state: DeleteContactStateInterface = initialState, action: DeleteContactActionType): DeleteContactStateInterface => {
    switch (action.type) {
        case DeleteContactActionTypes.DELETE_CONTACT:
            return {
                ...state,
                isDeleteLoading: true
            }
        case DeleteContactActionTypes.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                isDeleteLoading: false
            }
        case DeleteContactActionTypes.DELETE_CONTACT_FAILURE:
            return {
                ...state,
                isDeleteLoading: false,
                errors: {}
            }

        default:
            return state
    }
}