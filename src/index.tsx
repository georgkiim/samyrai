import './index.css';
import {store} from "./redux/redax-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    // store={store}
                    // appState={store.getState()}
                    // dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}
render()
store.subscribe(() => render())
