import './App.css';
import {History} from 'history'
import MainForm from "./components/mainForm/MainForm";
import {ConnectedRouter} from "connected-react-router";
import {Container} from "@material-ui/core";
import {Route} from 'react-router-dom';
import MainPage from "./components/mainPage/MainPage";

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {

    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <MainPage/>
                <Container fixed>
                    <Route path={"/contacts/:page?/:take?"} component={MainForm}/>
                </Container>
            </div>
        </ConnectedRouter>
    );
}

export default App;
