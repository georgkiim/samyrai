import React from "react";
import {UsersType, UserType} from "../../redux/redusers/usersReducer";
import  axios from "axios";

type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    setUsers:(users:UserType[])=>void
}

const Users = (props: UsersPropsType) => {

    if(props.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            props.setUsers(response.data.items)
        })

    }

    return (
        <div>
            {props.users.map(t => <div>
                <span>
                    <div><img/></div>
                    {t.followed?
                        <button onClick={()=>props.unFollow(t.id)}>FOLLOW</button>
                        :<button onClick={()=>props.follow(t.id)}>UNFOLLOW</button>
                    }
                </span>
                <span>
                    <span>{t.name}</span>
                    <span>{t.status}</span>
                </span>
            </div>)}
        </div>
    )
}

export default Users
