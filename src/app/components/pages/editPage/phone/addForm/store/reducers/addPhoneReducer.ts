
import {
    CreatePhoneActionType,
    CreatePhoneActionTypes,
    CreatePhoneStateInterface
} from "../actionType/addPhoneActionTypes";

const initialState: CreatePhoneStateInterface = {
    isLoading: false,
    errors: {}

}

export const createPhoneReducer = (state: CreatePhoneStateInterface = initialState, action: CreatePhoneActionType): CreatePhoneStateInterface => {
    switch (action.type) {
        case CreatePhoneActionTypes.CREATE_PHONE:
            return {
                ...state,
                isLoading: true
            }
        case CreatePhoneActionTypes.CREATE_PHONE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case CreatePhoneActionTypes.CREATE_PHONE_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}