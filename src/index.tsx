import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import {configureStore} from "./app/store/configureStore";

const baseUrl = 'localhost:8080'
const history = createBrowserHistory({basename: baseUrl})

const store = configureStore(history)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App history={history}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();