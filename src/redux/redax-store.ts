import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {reducerMainContentPage} from "./redusers/reduserMainContentPage";
import {reducerDialogsPage} from "./redusers/reduserDialogsPage";
import {ActionType, DialogPageType, MainContentPageType} from "./store";

const reducers = combineReducers({
    mainContentPage: reducerMainContentPage,
    dialogsPage: reducerDialogsPage
} as const)

export const store = createStore(reducers);
export type AppRooType = ReturnType<typeof reducers>
export type StoreType = Store<EmptyObject & {
    readonly mainContentPage: MainContentPageType,
    readonly dialogsPage: DialogPageType
}, ActionType>

