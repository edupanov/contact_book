import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import {configureStore} from "./app/store/configureStore";
import {BrowserRouter} from "react-router-dom";

const baseUrl = '/'
const history = createBrowserHistory({basename: baseUrl})

const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App history={history}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
