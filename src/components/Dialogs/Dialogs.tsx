import React from "react";
import s from './Dialogs.module.css'


import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";
import {DialogPageType} from "../../redux/state";


const Dialogs = (props: DialogPageType) => {
    const dialogItems = props.users.map(t => (<DialogItems id={t.id} name={t.name}/>))
    const setMessage = props.messages.map(m => (<Message id={m.id} message={m.message}/>))
    const textReff = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        alert(textReff.current?.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {setMessage}
                <textarea ref={textReff}></textarea>
                <button onClick={addNewMessage}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs