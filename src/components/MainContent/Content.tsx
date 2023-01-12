import React from "react";
import MyPosts from "./My post/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {ActionType, PostType} from "../../redux/store";
import {StoreType} from "../../redux/redax-store";
import MyPostsContainer from "./My post/MyPostsContainer";

export type ContentType = {
    store:StoreType
}
const Content = () => {
    return (
        <div>
            <ProfileDescription/>
            <MyPostsContainer />
        </div>
    )
}
export default Content