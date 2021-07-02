import './App.css';
import {History} from 'history'
import HeaderContactList from "./components/mainForm/HeaderContactList";
import {ConnectedRouter} from "connected-react-router";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {

    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <HeaderContactList/>
            </div>
        </ConnectedRouter>
    );
}

export default App;
