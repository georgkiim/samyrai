import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'


import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";
import {addMessageAction, newMessageAction} from "../../redux/redusers/reduserDialogsPage";
import {DialogPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    addNewMessage: () => void
    onChangeHandler:(e: ChangeEvent<HTMLTextAreaElement>) => void
}
const Dialogs = (props: DialogsPropsType) => {
    const dialogItems = props.dialogsPage.users.map(t => <DialogItems id={t.id} name={t.name}/>)
    const setMessage = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)
    const textReff = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        props.addNewMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {setMessage}
                <textarea ref={textReff}
                          onChange={onChangeHandler}
                          value={props.dialogsPage.newMessage}
                ></textarea>
                <button onClick={addNewMessage}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs