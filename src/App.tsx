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


const App = () => {
    return (
        <BrowserRouter >
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            {/*<Content />*/}
            <div className='app-wrapper-content'>
                <Route path='/profile' component={Content} />
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/settings' component={Settings} />
                <Route path='/music' component={Music} />

            </div>

        </div>
      </BrowserRouter>
    )
}

export default App;
