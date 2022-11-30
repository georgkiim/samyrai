import {UsersType} from "../../../index";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";



const DialogItems = (props: UsersType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItems