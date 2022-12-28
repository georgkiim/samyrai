import {v1} from "uuid";
import {AddPostAction, NewTextAction, reducerMainContentPage} from "./redusers/reduserMainContentPage";
import {AddMessageAction, NewMessageType, reducerDialogsPage} from "./redusers/reduserDialogsPage";

export type PostType = {
    id: string
    messages: string,
    likesCount: number
}
export type UsersType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type MainContentPageType = {
    dataPosts: PostType[]
    newPost: string
}
export type DialogPageType = {
    users: UsersType[]
    messages: MessageType[]
    newMessage: string
}
export type RootStateType = {
    mainContentPage: MainContentPageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    render: () => void
    observer: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostAction | AddMessageAction | NewMessageType | NewTextAction

export const store: StoreType = {
    _state: {
        mainContentPage: {
            dataPosts: [
                {id: v1(), messages: 'Hello My', likesCount: 4},
                {id: v1(), messages: 'Hello My', likesCount: 4},
                {id: v1(), messages: 'Hello My', likesCount: 4},
            ],
            newPost: 'Hellp'
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    render() {
        console.log('ha')
    },
    observer(callback: () => void) {
        this.render = callback
    },
    dispatch(action) {
        this._state.mainContentPage = reducerMainContentPage(this._state.mainContentPage, action)
        this._state.dialogsPage = reducerDialogsPage(this._state.dialogsPage, action)
        this.render()
    }
}





