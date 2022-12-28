
import s from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/store";



const Message = (props: MessageType) => {
    return (<div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message