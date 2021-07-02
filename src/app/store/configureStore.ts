import {History} from "history";
import thunk from "redux-thunk";
import {routerMiddleware} from "connected-react-router";
import {createRootReducer, RootState} from "./rootReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


export const configureStore = (history: History, initialState?: RootState) => {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ]

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (windowIfDefined && windowIfDefined.REDUX_DEVTOOLS_EXTENSION) {
        enhancers.push(windowIfDefined.REDUX_DEVTOOLS_EXTENSION());
    }

    const rootReducer = createRootReducer(history)

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    )
}