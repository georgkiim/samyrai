import React from "react";
import { v1 } from "uuid";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";
import {ContentType} from "../Content";
import {addPost} from "../../../redux/state";

const MyPosts = (props:ContentType) => {
    const postsCreate = props.dataPosts.map(t=> <Posts messages={t.messages} likesCount={t.likesCount} id={t.id} />)
    const textRef  = React.createRef<HTMLTextAreaElement>()
    const addNewPost =() =>{
        props.addPost(textRef.current? textRef.current.value:'')
    }


    return (
        <div className={s.myPost} >
            <div>
                <h3>My post</h3>
                <textarea ref={textRef} ></textarea>
                <button onClick={addNewPost}>Add</button>
            </div>
            {postsCreate}
        </div>
    )
}
export default MyPosts