import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";

export type PostType = {
    id:string
    messages: string,
    likesCount: number
}
export type UsersType={
    id: string
    name: string
}
export type MessageType = {
    id: string
    message:string
}

const dataPosts = [
    {id:v1(), messages:'Hello My', likesCount: 4},
    {id:v1(), messages:'Hello My', likesCount: 4},
    {id:v1(), messages:'Hello My', likesCount: 4},
]
const users = [
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Mnicle'},
    {id: v1(), name: 'Sandu'},
    {id: v1(), name: 'Alex'},
]
const messages = [
    {id:v1(), message:"HI!"},
    {id:v1(), message:"Hello!"},
    {id:v1(), message:"MPTHER!"},
]


ReactDOM.render(
    <App dataPosts={dataPosts}
         users={users}
         messages={messages}/>,
  document.getElementById('root')
);