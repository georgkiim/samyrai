import {v1} from "uuid";
import {ActionType, AddPostAction, MainContentPageType, NewTextAction, PostType} from "../state";

export const addPostAction = (): AddPostAction => ({type: 'ADD-POST'})
export const newPostAction = (title: string): NewTextAction => ({type: 'NEW-TEXT', title})

export const reducerMainContentPage = (state: MainContentPageType, action: ActionType) => {
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
        default: return state
    }

}