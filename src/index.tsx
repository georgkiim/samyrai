import './index.css';
import state, {addPost, RootStateType, newPostText, observer} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

 const render =(state:RootStateType)=>{
    ReactDOM.render(
        <App appState={state}
             addPost={addPost}
             newPostText={newPostText}   />,
        document.getElementById('root')
    )}
render(state)
observer(render)