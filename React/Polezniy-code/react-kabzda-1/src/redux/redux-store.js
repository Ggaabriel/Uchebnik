import {combineReducers, legacy_createStore as createStore} from "redux";
import { DialogsReduser } from "./DialogsReduser";
import { LoginReducer } from "./Login-reducer";
import { ProfileReduser } from "./ProfileReduser";
import { UserReduser } from "./UserReduser";

let reducers = combineReducers({
    ProfilePage: ProfileReduser,
    DialogsPage: DialogsReduser,
    UsersPage: UserReduser,
    Login:LoginReducer
})

let store = createStore(reducers);
window.store = store;

export default store;