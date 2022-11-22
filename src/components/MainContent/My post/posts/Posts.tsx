import React from "react";
import classes from "./Posts.module.css";
import {PostType} from "../MyPosts";

type PostsPropsType = {
    messages: string,
    likesCount: number
}
const Posts = (props: PostsPropsType) => {
    return (

        <div className={classes.item}>
            <img
                src="data:image/jpeg;base64,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"/>
            {props.messages}
            <div>
                <span>Likes</span> {props.likesCount}
            </div>
        </div>


    )
}
export default Posts