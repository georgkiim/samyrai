
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {UsersType} from "../../../redux/state";



const DialogItems = (props: UsersType) => {
    return (
        <div className={s.dialog}>
            <img src='https://tengrinews.kz/userdata/news/2019/news_363885/thumb_m/photo_273454.jpeg'/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItems