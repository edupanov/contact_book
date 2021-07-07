import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import MainPage from "./components/mainPage/MainPage";
import React from "react";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {

    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <MainPage/>
            </div>
        </ConnectedRouter>
    );
}

export default App;
