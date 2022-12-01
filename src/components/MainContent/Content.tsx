import React from "react";

import MyPosts from "./My post/MyPosts";

import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {MainContentPageType, PostType} from "../../redux/state";


 export type ContentType = {
    dataPosts: Array<PostType>
}

const Content = (props:MainContentPageType) => {
    return (
        <div >
            <ProfileDescription />
            <MyPosts dataPosts={props.dataPosts} />
        </div>
    )
}
export default Content