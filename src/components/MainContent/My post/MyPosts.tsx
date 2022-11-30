import React from "react";
import { v1 } from "uuid";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";
import {ContentType} from "../Content";

const MyPosts = (props:ContentType) => {
    const postsCreate = props.dataPosts.map(t=> <Posts messages={t.messages} likesCount={t.likesCount} id={t.id} />)
    return (
        <div className={s.myPost} >
            <div>
                <h3>My post</h3>
                <textarea/>
                <button>Add</button>
            </div>
            {postsCreate}
        </div>
    )
}
export default MyPosts