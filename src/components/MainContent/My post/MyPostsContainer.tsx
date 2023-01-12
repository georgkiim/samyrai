import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";
import {ContentType} from "../Content";
import {addPostAction, newPostAction} from "../../../redux/redusers/reduserMainContentPage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRooType} from "../../../redux/redax-store";
import {Dispatch} from "redux";

// const MyPostsContainer = (props: ContentType) => {
//     const state = props.store.getState()
//     const dataPosts = state.mainContentPage.dataPosts
//     const newPost = state.mainContentPage.newPost
//     const addNewPost = () => {
//         props.store.dispatch(addPostAction())
//         props.store.dispatch(newPostAction(''))
//     }
//     const onClickHandler = (title: string) => {
//         props.store.dispatch(newPostAction(title))
//     }
//     return (
//         <MyPosts addNewPost={addNewPost} onClickHandler={onClickHandler} dataPosts={dataPosts} newPost={newPost}/>
//     )
// }
const f1 = (state: AppRooType) => {
    return {
        dataPosts: state.mainContentPage.dataPosts,
        newPost: state.mainContentPage.newPost
    }
}

const f2 = (dispatch: Dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostAction())
            dispatch(newPostAction(''))
        },
        onClickHandler: (title: string) => {
            dispatch(newPostAction(title))
        }
    }

}


const MyPostsContainer = connect(f1, f2)(MyPosts)

export default MyPostsContainer




