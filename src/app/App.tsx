import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import React from "react";
import Routes from "./routes/Routes";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {

    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <Routes/>
            </div>
        </ConnectedRouter>
    );
}

export default App;
