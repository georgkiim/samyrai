import React from "react";

import MyPosts from "./My post/MyPosts";

import ProfileDescription from "./ProfileDescription/ProfileDescription";
import { PostType} from "../../index";

 export type ContentType = {
    dataPosts: Array<PostType>
}

const Content = (props:ContentType) => {
    return (
        <div >
            <ProfileDescription />
            <MyPosts dataPosts={props.dataPosts} />
        </div>
    )
}
export default Content