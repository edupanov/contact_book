import {
    AttachmentActionTypes,
    AttachmentsActionType,
    AttachmentsStateInterface
} from "../actionTypes/attachmentsActionTypes";

const initialState: AttachmentsStateInterface = {
    isLoading: false,
    data: null,
    errors: {}
}

export const attachmentsReducer = (state: AttachmentsStateInterface = initialState, action: AttachmentsActionType): AttachmentsStateInterface => {
    switch (action.type) {
        case AttachmentActionTypes.GET_ATTACHMENTS:
            return {
                ...state,
                isLoading: true
            }

        case AttachmentActionTypes.GET_ATTACHMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.attachments,
            }

        case AttachmentActionTypes.GET_ATTACHMENTS_FAILURE:
            return {
                ...state,
                errors: {}
            }

        default:
            return state
    }
}