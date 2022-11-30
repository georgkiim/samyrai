import {MessageType} from "../../../index";
import s from "../Dialogs.module.css";
import React from "react";



const Message = (props: MessageType) => {
    return (<div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message