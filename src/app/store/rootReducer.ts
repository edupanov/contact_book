import { connectRouter } from "connected-react-router";
import {History} from "history";
import {CombinedState, combineReducers} from "redux";
import {contactsReducer} from "../components/contactList/store/reducers/contactsReducer";
import {LoginReducer} from "../components/pages/mainPage/loginForm/store/reducers/loginReducer";
import {searchContactReducer} from "../components/pages/searchPage/store/reducers/searchContactReducer";
import {createUserReducer} from "../components/pages/editPage/store/reducers/editContactReducer";

let rootState = {} as CombinedState<any>

export type RootState = ReturnType<typeof rootState>

export const createRootReducer = (history: History) => {
    rootState = combineReducers({
        router: connectRouter(history),
        contacts: contactsReducer,
        login: LoginReducer,
        search: searchContactReducer,
        createUser: createUserReducer
    })

    return rootState
}