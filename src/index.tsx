import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const render = () => {
    ReactDOM.render(
        <App appState={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}
render()
store.observer(render)
