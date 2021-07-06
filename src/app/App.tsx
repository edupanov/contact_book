import './App.css';
import {History} from 'history'
import MainForm from "./components/mainForm/MainForm";
import {ConnectedRouter} from "connected-react-router";
import LoginForm from "./components/loginForm/LoginForm";
import {Container} from "@material-ui/core";
import { Route } from 'react-router-dom';

interface AppHistory {
    history: History
}

function App({history}: AppHistory) {

    return (
        <ConnectedRouter history={history}>
            <div className="App">
                <Container fixed>
                    <Route path={"/contacts/:page?/:take?"} component={MainForm}/>
                    {/*<Route path={"/login"} render={() => <LoginForm/>}/>*/}
                </Container>
            </div>
        </ConnectedRouter>
    );
}

export default App;
