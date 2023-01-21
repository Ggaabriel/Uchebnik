import {combineReducers, legacy_createStore as createStore} from "redux";
import { DialogsReduser } from "./DialogsReduser";
import { ProfileReduser } from "./ProfileReduser";
import { UserReduser } from "./UserReduser";

let reducers = combineReducers({
    ProfilePage: ProfileReduser,
    DialogsPage: DialogsReduser,
    UsersPage: UserReduser
})

let store = createStore(reducers);
window.store = store;

export default store;