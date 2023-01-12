import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'


import Message from "./Message/Message";
import DialogItems from "./DialogsItem/DialogItem";
import {addMessageAction, newMessageAction} from "../../redux/redusers/reduserDialogsPage";
import {ActionType, DialogPageType} from "../../redux/store";
import {AppRooType, StoreType} from "../../redux/redax-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
// type DialogsPropsType = DialogPageType & {
//     dispatch: (action: ActionType) => void
// }

// type PropsType = {
//     store: StoreType
// }
// const DialogsContainer = (props: PropsType) => {
//     const state = props.store.getState()
//     const dialogsPage = state.dialogsPage
//
//     // const textReff = React.createRef<HTMLTextAreaElement>()
//     const addNewMessage = () => {
//         props.store.dispatch(addMessageAction())
//         props.store.dispatch(newMessageAction(''))
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.store.dispatch(newMessageAction(e.currentTarget ? e.currentTarget.value : ''))
//     }
//     return (
//         <Dialogs dialogsPage={dialogsPage} addNewMessage={addNewMessage} onChangeHandler={onChangeHandler}/>
//     )
// }



const f1 = (state: AppRooType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const f2 = (dispatch:Dispatch) => {


    return {
        addNewMessage: () => {
            dispatch(addMessageAction())
            dispatch(newMessageAction(''))
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newMessageAction(e.currentTarget ? e.currentTarget.value : ''))
        }

    }
}

const DialogsContainer = connect(f1,f2)(Dialogs);
export default DialogsContainer