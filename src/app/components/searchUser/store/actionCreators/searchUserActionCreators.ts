import {Dispatch} from "redux";
import {SearchPageActionType, SearchUserActionTypes} from "../actionTypes/searchUserActionTypes";
import {SearchParamsInterface} from "../../types/searcParams.interface";


export const setSearchParams = (searchParams: SearchParamsInterface) => (dispatch: Dispatch<SearchPageActionType>) => {
    dispatch({type: SearchUserActionTypes.SET_SEARCH_PARAMS, payload: searchParams})
}