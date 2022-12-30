import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";
import {ContentType} from "../Content";
import {addPostAction, newPostAction} from "../../../redux/redusers/reduserMainContentPage";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: ContentType) => {
    const state = props.store.getState()
    const dataPosts = state.mainContentPage.dataPosts
    const newPost = state.mainContentPage.newPost
    const addNewPost = () => {
        props.store.dispatch(addPostAction())
        props.store.dispatch(newPostAction(''))
    }
    const onClickHandler = (title:string) => {
        props.store.dispatch(newPostAction(title))
    }
    return (
        <MyPosts addNewPost={addNewPost} onClickHandler={onClickHandler} dataPosts={dataPosts} newPost={newPost}/>
    )
}
export default MyPostsContainer