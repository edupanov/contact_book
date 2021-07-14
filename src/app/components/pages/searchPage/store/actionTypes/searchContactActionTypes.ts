import {SearchParamsInterface} from "../../types/searcParams.interface";

export interface SearchUserStateInterface {
    searchParams: SearchParamsInterface
}

export enum SearchContactActionTypes {
    SET_SEARCH_PARAMS = '[Search panel] Set Search Params',
}

interface setSearchParams {
    type: SearchContactActionTypes.SET_SEARCH_PARAMS,
    payload: SearchParamsInterface
}

export type SearchPageActionType = setSearchParams