import './App.css';
import {History} from 'history'
import {ConnectedRouter} from "connected-react-router";
import React, {useEffect} from "react";
import Routes from "./routes/Routes";
import {useTypeSelector} from "./store/hooks/useTypeSelector";
import {useActions} from "./store/hooks/useActions";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import {ru} from "date-fns/locale";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {
    const {getContactsBirthday} = useActions()
    const isSuccess = useTypeSelector(state => state.login.isSuccess)
    const user = useTypeSelector(state => state.login.data)

    useEffect(() => {
        if(isSuccess){
           getContactsBirthday(user[0].email)
        }
    }, [isSuccess])


    return (
        <ConnectedRouter history={history}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
            <div className="App">
                <Routes/>
            </div>
            </MuiPickersUtilsProvider>

        </ConnectedRouter>
    );
}

export default App;
