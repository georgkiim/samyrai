import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Posts from "./posts/Posts";
import {ContentType} from "../Content";
import {addPostAction, newPostAction} from "../../../redux/redusers/reduserMainContentPage";

const MyPosts = (props: ContentType) => {
    const postsCreate = props.dataPosts.map(t => <Posts messages={t.messages} likesCount={t.likesCount} id={t.id}/>)
    const textRef = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        props.dispatch(addPostAction())
        props.dispatch(newPostAction(''))
    }
    const onClickHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newPostAction(textRef.current ? textRef.current.value : ""))
    }
    return (
        <div className={s.myPost}>
            <div>
                <h3>My post</h3>
                <textarea  onChange={onClickHandler} value={props.newPost} ref={textRef}/>
                <button onClick={addNewPost}>Add</button>
            </div>
            {postsCreate}
        </div>
    )
}
export default MyPosts