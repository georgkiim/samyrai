import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import Nav from "../Nav/Nav";
import {MessageType, UsersType} from "../../index";
import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";

type DialogsPropsType = {
    users: UsersType[]
    messages: MessageType[]
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogItems = props.users.map(t => (<DialogItems id={t.id} name={t.name}/>))
    const setMessage = props.messages.map(m => (<Message id={m.id} message={m.message}/>))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {setMessage}
            </div>
        </div>
    )
}

export default Dialogs