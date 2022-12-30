import {v1} from "uuid";
import {ActionType, MainContentPageType, PostType} from "../store";


export type AddPostAction = ReturnType<typeof addPostAction>
export type NewTextAction = ReturnType<typeof newPostAction>


export const addPostAction = () => ({type: 'ADD-POST'} as const)
export const newPostAction = (title: string) => ({type: 'NEW-TEXT', title} as const)
const initialState = {
    dataPosts: [
        {id: v1(), messages: 'Hello My', likesCount: 4},
        {id: v1(), messages: 'Hello My', likesCount: 4},
        {id: v1(), messages: 'Hello My', likesCount: 4},
    ],
    newPost: 'Hellp'
}

export const reducerMainContentPage = (state: MainContentPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(), messages: state.newPost, likesCount: 1
            }
            state.dataPosts.push(newPost)
            state.newPost = "";
            return state
        case "NEW-TEXT":
            state.newPost = action.title;
            return state
        default:
            return state
    }

}