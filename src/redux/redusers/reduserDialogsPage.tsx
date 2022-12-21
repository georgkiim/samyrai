import {
    ActionType,
    AddMessageAction,
    DialogPageType,
    MainContentPageType,
    MessageType,
    NewMessageType,
    PostType
} from "../state";
import {v1} from "uuid";
export const addMessageAction = (): AddMessageAction => ({type: 'ADD-MESSAGE'})
export const newMessageAction = (message: string): NewMessageType => ({type: 'NEW-MESSAGE', message})

export const reducerDialogsPage = (state: DialogPageType, action: ActionType) => {
    switch (action.type){
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: v1(), message: state.newMessage
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case "NEW-MESSAGE":
            state.newMessage = action.message
            return state
        default:return state
    }
}