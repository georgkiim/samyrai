import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'


import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";
import { addMessageAction,  newMessageAction} from "../../redux/redusers/reduserDialogsPage";
import {ActionType, DialogPageType} from "../../redux/state";
type DialogsPropsType = DialogPageType & {
    dispatch: (action: ActionType) => void
}
const Dialogs = (props: DialogsPropsType) => {
    const dialogItems = props.users.map(t => <DialogItems id={t.id} name={t.name}/>)
    const setMessage = props.messages.map(m => <Message id={m.id} message={m.message}/>)
    const textReff = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        props.dispatch(addMessageAction())
        props.dispatch(newMessageAction(''))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageAction(e.currentTarget ? e.currentTarget.value : ''))
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
                          value={props.newMessage}
                ></textarea>
                <button onClick={addNewMessage}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs