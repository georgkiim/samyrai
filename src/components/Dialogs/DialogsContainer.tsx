import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'


import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";
import { addMessageAction,  newMessageAction} from "../../redux/redusers/reduserDialogsPage";
import {ActionType, DialogPageType} from "../../redux/store";
import {StoreType} from "../../redux/redax-store";
import Dialogs from "./Dialogs";
// type DialogsPropsType = DialogPageType & {
//     dispatch: (action: ActionType) => void
// }

type PropsType = {
    store:StoreType
}
const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState()
    const dialogsPage = state.dialogsPage

    const textReff = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        props.store.dispatch(addMessageAction())
        props.store.dispatch(newMessageAction(''))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(newMessageAction(e.currentTarget ? e.currentTarget.value : ''))
    }
    return (
        <Dialogs dialogsPage={dialogsPage} addNewMessage={addNewMessage} onChangeHandler={onChangeHandler} />
    )
}

export default DialogsContainer