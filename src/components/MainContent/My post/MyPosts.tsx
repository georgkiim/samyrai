import React from "react";
import classes from "./MainContent.module.css";
import Posts from "./posts/Posts";

export type PostType = {
    messages: string,
    likesCount: number
}

const MyPosts = () => {
    return (
        <div>

            <div>
                My posts
            </div>
            <Posts messages='Hello' likesCount={0}/>
            <Posts messages='Hi' likesCount={15}/>
        </div>

    )
}
export default MyPosts