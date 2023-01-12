import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/MainContent/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/music/Music";

import {ActionType, RootStateType} from "./redux/store";
import {AppRooType, StoreType} from "./redux/redax-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// type AppProps = {
//     // appState: AppRooType
//     // dispatch: (action: ActionType) => void
//     store:StoreType
// }

const App = () => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                {/*<NewPost />*/}
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Content
                    />}/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer
                            // store={props.store}

                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                </div>

            </div>

    )
}

export default App;
