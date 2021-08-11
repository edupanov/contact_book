import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import React, {useEffect} from "react";
import Routes from "./routes/Routes";
import {useTypeSelector} from "./store/hooks/useTypeSelector";
import {useActions} from "./store/hooks/useActions";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {
    const {getContactsBirthday} = useActions()
    const isSuccess = useTypeSelector(state => state.login.isSuccess)

    useEffect(() => {
        if(isSuccess){
            getContactsBirthday()
        }
    }, [isSuccess])


    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <Routes/>
            </div>
        </ConnectedRouter>
    );
}

export default App;
