import {v1} from "uuid";

let render = (state:RootStateType) =>{
    console.log('ha')
}

export type PostType = {
    id: string
    messages: string,
    likesCount: number
}
export type UsersType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type MainContentPageType = {
    dataPosts: PostType[]
    newPost:string
}

export type DialogPageType = {
    users: UsersType[]
    messages: MessageType[]
}

export type RootStateType = {
    mainContentPage: MainContentPageType
    dialogsPage: DialogPageType
}

const state: RootStateType = {
    mainContentPage: {
        dataPosts: [
            {id: v1(), messages: 'Hello My', likesCount: 4},
            {id: v1(), messages: 'Hello My', likesCount: 4},
            {id: v1(), messages: 'Hello My', likesCount: 4},
        ],
        newPost:'Hellp'
    },
    dialogsPage: {
        users: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Mnicle'},
            {id: v1(), name: 'Sandu'},
            {id: v1(), name: 'Alex'},
        ],
        messages: [
            {id: v1(), message: "HI!"},
            {id: v1(), message: "Hello!"},
            {id: v1(), message: "MPTHER!"},
        ]
    }
}

 export const addPost = () => {
    const newPost:PostType = {
        id: v1(), messages: state.mainContentPage.newPost, likesCount:1
    }
   state.mainContentPage.dataPosts.push(newPost)
     render(state)

}
export const newPostText = (title:string) => {
    state.mainContentPage.newPost = title
    render(state)
}

export const observer =(observer:(state:RootStateType)=>void)=>{
    render=observer
}


export default state