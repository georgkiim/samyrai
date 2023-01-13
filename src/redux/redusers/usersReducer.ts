import {v1} from "uuid";

export type followAcType = ReturnType<typeof followAc>
export type unFollowAcType = ReturnType<typeof unFollowAc>
export type ActionType = followAcType | unFollowAcType


export const followAc = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unFollowAc = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
type UserType = {
    id: string
    followed: boolean
    fulName: string
    status: string
    location: {
        city: string
        country: string
    }
}
type UsersType = {
    users: Array<UserType>
}

const initialState: UsersType = {
    users: [
        {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fulName: 'George', status: 'I am', location: {city: 'Minsk', country: 'Belarus'}},

    ]
}

export const userReducer = (state: UsersType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW": {
            const newState = {
                ...state, users:
                    [state.users.map(t => t.id === action.userId ? t.followed = true : t)]
            }
            return newState
        }
        case "UNFOLLOW": {
            const newState = {
                ...state, users:
                    [state.users.map(t => t.id === action.userId ? t.followed = false : t)]
            }
            return newState
        }
        default:
            return state
    }
}