import React from "react";

import MyPosts from "./My post/MyPosts";

import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {addPost, MainContentPageType, PostType} from "../../redux/state";


 export type ContentType = {
    dataPosts: Array<PostType>
    addPost:(messages:string)=>void
}

const Content = (props:ContentType) => {
    return (
        <div >
            <ProfileDescription />
            <MyPosts dataPosts={props.dataPosts} addPost={props.addPost}/>
        </div>
    )
}
export default Content