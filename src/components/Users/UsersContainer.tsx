import React from "react";
import {connect} from "react-redux";
import {AppRooType} from "../../redux/redax-store";
import {Dispatch} from "redux";
import {followAc, setUserAc, unFollowAc, UsersType, UserType} from "../../redux/redusers/usersReducer";
import Users from "./Users";


const f1 = (state: AppRooType):UsersType => {
    return {
        users: state.usersPage.users
    }
}
const f2 = (dispatch:Dispatch) => {
    return {
        follow:(userId:number)=>{
            dispatch(followAc(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAc(userId))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUserAc(users))
        }

    }
}


const UsersContainer = connect(f1,f2)(Users);

export default UsersContainer
