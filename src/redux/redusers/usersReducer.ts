import {v1} from "uuid";

export type followAcType = ReturnType<typeof followAc>
export type unFollowAcType = ReturnType<typeof unFollowAc>
export type setUserAcType = ReturnType<typeof setUserAc>
export type ActionType = followAcType | unFollowAcType | setUserAcType


export const followAc = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAc = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUserAc = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export type UserType = {
    name: string
    "id": number
    "uniqueUrlName": null
    "photos": {
        "small": null
        "large": null
    },
    "status": null
    "followed": boolean
}
export type UsersType = {
    users: Array<UserType>
}

const initialState: UsersType = {
    users: [
        // {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: v1(), followed: false, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
    ]
}

export const userReducer = (state: UsersType = initialState, action: ActionType):UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            const newState:UsersType = {
                ...state, users:state.users.map(t => t.id === action.userId ? {...t, followed:true} : t)
            }
            return newState
        }
        case "UNFOLLOW": {
            const newState:UsersType = {
                ...state, users: state.users.map(t => t.id === action.userId ? {...t, followed:false} : t)
            }
            return newState
        }
        case 'SET_USERS': {
            const newState = {
                ...state, users:action.users
            }
            return newState
        }
        default:
            return state
    }
}