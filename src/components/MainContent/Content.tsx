import React from "react";
import MyPosts from "./My post/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {ActionType, PostType} from "../../redux/state";

export type ContentType = {
    dataPosts: Array<PostType>
    newPost: string
    dispatch: (action: ActionType) => void
}
const Content = (props: ContentType) => {
    return (
        <div>
            <ProfileDescription/>
            <MyPosts dataPosts={props.dataPosts}  newPost={props.newPost}
                      dispatch={props.dispatch}  />
        </div>
    )
}
export default Content