import {
    ActionType,
    DialogPageType,
    MessageType,

    PostType
} from "../store";
import {v1} from "uuid";

export type AddMessageAction = ReturnType<typeof addMessageAction>
export type NewMessageType = ReturnType<typeof newMessageAction>


export const addMessageAction = () => ({type: 'ADD-MESSAGE'} as const)
export const newMessageAction = (message: string) => ({type: 'NEW-MESSAGE', message} as const)
const initialState = {
    users: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Mnicle'},
        {id: v1(), name: 'Sandu'},
        {id: v1(), name: 'Alex'},
    ],
    messages: [
        {id: v1(), message: "HI!"},
        {id: v1(), message: "Hello!"},
        {id: v1(), message: "MPTHER!"},
    ],
    newMessage: 'Haha'
}

export const reducerDialogsPage = (state: DialogPageType = initialState, action: ActionType):DialogPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {
                id: v1(), message: state.newMessage
            }
            const newState = {
                ...state, messages: [...state.messages, newMessage],
                newMessage: ''
            }
            return newState
        }

        case "NEW-MESSAGE": {
            const newState = {
                ...state, newMessage: action.message
            }

            return newState
        }

        default:
            return state
    }
}