import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import Nav from "../Nav/Nav";


type UsersType={
    id: string
    name: string
}

type DialogItemProps = {
    name:Array<UsersType>
}
type MessageProps = {
    title: string
}

const users = [
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Mnicle'},
    {id: v1(), name: 'Sandu'},
    {id: v1(), name: 'Alex'},
]

const messages = [
    {id:v1(), message:"HI!"},
    {id:v1(), message:"Hello!"},
    {id:v1(), message:"MPTHER!"},
]


const DialogItem = (props: DialogItemProps) => {
 return(
     <div>
         {props.name.map(t=>{
             return (
                 <div className={s.dialog}>
                   <NavLink to={'/dialogs/'+t.id} activeClassName={s.active}>{t.name}</NavLink>
                 </div>
             )
         })}
     </div>
 )
}
// const dialogItems = users.map(t => (<DialogItem id={t.id} name={t.name}/>))


const Message = (props: any) => {
    return (<div>
        <div className={s.message}>{props.title}</div>
        </div>
    )
}

const setMessage = messages.map(m=>{
    return(
        <Message title={m.message}/>
    )
})



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {/*{dialogItems}*/}
            <DialogItem name={users} />
            </div>
            <div className={s.messages}>
                {setMessage}
            </div>
        </div>
    )
}

export default Dialogs