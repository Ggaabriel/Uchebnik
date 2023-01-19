import {combineReducers, legacy_createStore as createStore} from "redux";
import { DialogsReduser } from "./DialogsReduser";
import { ProfileReduser } from "./ProfileReduser";

let reducers = combineReducers({
    ProfilePage: ProfileReduser,
    DialogsPage: DialogsReduser
})

let store = createStore(reducers);
window.store = store;

export default store;