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
import { MessageType, PostType, UsersType} from "./index";

type PropsType = {
    dataPosts: Array<PostType>
    users: UsersType[]
    messages:MessageType[]
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                {/*<NewPost />*/}
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Content dataPosts={props.dataPosts} />}/>
                    <Route path='/dialogs' render={() => <Dialogs users={props.users} messages={props.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/music' render={() => <Music/>}/>

                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
