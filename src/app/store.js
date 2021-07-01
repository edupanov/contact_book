import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "../components/mainForm/user/user-reducer";

const {combineReducers} = require("redux");

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware =
    ext && process.env.NODE_ENV === 'development' ? ext() : f => f;


const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devtoolMiddleware
    )
);