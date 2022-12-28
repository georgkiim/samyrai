import {
    ActionType,

    DialogPageType,
    MainContentPageType,
    MessageType,

    PostType
} from "../store";
import {v1} from "uuid";

export type AddMessageAction =  ReturnType<typeof addMessageAction>
export type NewMessageType = ReturnType<typeof newMessageAction>


export const addMessageAction = () => ({type: 'ADD-MESSAGE'}as const)
export const newMessageAction = (message: string) => ({type: 'NEW-MESSAGE', message}as const)

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