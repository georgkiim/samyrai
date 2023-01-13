import React from "react";
import {UsersType, UserType} from "../../redux/redusers/usersReducer";
import axios from "axios";

type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    setUsers:(users:UserType[])=>void
}


class UsersC extends React.Component<UsersPropsType> {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>GET USERS</button>
                {this.props.users.map(t => <div>
                <span>
                    <div><img/></div>
                    {t.followed ?
                        <button onClick={() => this.props.unFollow(t.id)}>FOLLOW</button>
                        : <button onClick={() => this.props.follow(t.id)}>UNFOLLOW</button>
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

}

export default UsersC
