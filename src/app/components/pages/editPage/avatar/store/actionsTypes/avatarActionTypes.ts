export interface AvatarStateInterface {
    isLoading: boolean
    errors: object
}

export enum AvatarActionTypes {
    GET_AVATAR = '[Avatar] Get Avatar',
    GET_AVATAR_SUCCESS = '[Avatar] Get Avatar Success',
    GET_AVATAR_FAILURE = '[Avatar] Get Avatar Failure',
}

interface getAvatar {
    type: AvatarActionTypes.GET_AVATAR
}

interface getAvatarSuccess {
    type: AvatarActionTypes.GET_AVATAR_SUCCESS,
}

interface getAvatarFailure {
    type: AvatarActionTypes.GET_AVATAR_FAILURE,
    errors: {}
}

export type AvatarActionType = getAvatar | getAvatarSuccess | getAvatarFailure