import React from "react";
import { v1 } from "uuid";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";

export type PostType = {
    messages: string,
    likesCount: number
}

const dataPosts = [
    {id:v1(), messages:'Hello My', likesCount: 4},
    {id:v1(), messages:'Hello My', likesCount: 4},
    {id:v1(), messages:'Hello My', likesCount: 4},
]

const postsCreate = dataPosts.map(t=> <Posts messages={t.messages} likesCount={t.likesCount} />)



const MyPosts = () => {
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