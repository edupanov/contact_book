import {
    DeletePhoneActionType,
    DeletePhoneActionTypes,
    DeletePhoneStateInterface
} from "../actionTypes/deletePhoneActionTypes";

const initialState: DeletePhoneStateInterface = {
    isDeleteLoading: false,
    errors: {}
}

export const deletePhoneReducer = (state: DeletePhoneStateInterface = initialState, action: DeletePhoneActionType): DeletePhoneStateInterface => {
    switch (action.type) {
        case DeletePhoneActionTypes.DELETE_PHONE:
            return {
                ...state,
                isDeleteLoading: true
            }
        case DeletePhoneActionTypes.DELETE_PHONE_SUCCESS:
            return {
                ...state,
                isDeleteLoading: false
            }
        case DeletePhoneActionTypes.DELETE_PHONE_FAILURE:
            return {
                ...state,
                isDeleteLoading: false,
                errors: {}
            }

        default:
            return state
    }
}