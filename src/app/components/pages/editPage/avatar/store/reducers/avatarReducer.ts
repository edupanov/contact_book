import {AvatarActionType, AvatarActionTypes, AvatarStateInterface} from "../actionsTypes/avatarActionTypes";


const initialState: AvatarStateInterface = {
    isLoading: false,
    errors: {},
}

export const avatarReducer = (state: AvatarStateInterface = initialState, action: AvatarActionType): AvatarStateInterface => {
    switch (action.type) {
        case AvatarActionTypes.GET_AVATAR:
            return {
                ...state,
                isLoading: true
            }
        case AvatarActionTypes.GET_AVATAR_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case AvatarActionTypes.GET_AVATAR_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}