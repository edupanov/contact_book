import {
    SearchPageActionType,
    SearchUserActionTypes,
    SearchUserStateInterface
} from "../actionTypes/searchUserActionTypes";
import {SearchParamsInterface} from "../../types/searcParams.interface";

const initialState: SearchUserStateInterface = {
    searchParams: {} as SearchParamsInterface
}

export const searchUserReducer = (state: SearchUserStateInterface = initialState, action: SearchPageActionType): SearchUserStateInterface => {
    switch (action.type) {
        case SearchUserActionTypes.SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: action.payload
            }

        default:
            return state
    }
}