import { DialogsReduser } from "./DialogsReduser";
import {ProfileReduser} from "./ProfileReduser"

let store = {
    state:{
        ProfilePage:{
            posts:[
                {id: 1, message: 'I love bebra', likes: 4 },
                {id: 2, message: 'fuck the police!', likes: 100 },
                {id: 3, message: 'oh shit, here we go again', likes: 0 },
                {id: 4, message: 'Grove Street - Home', likes: 99999 }
            ],
        newPostText:''
        },
        DialogsPage:{
            users:[
                {id: 1, name:'Big smoke'},
                {id: 2, name:'Rider'},
                {id: 3, name:'Sweet'}
            ],
            messages:[
                {id: 1, message:'I`ll take two number NIIIne, number NiiIIIineee LAAAAAARGE'},
                {id: 2, message:'i`m fucking genius'},
                {id: 3, message:'oh no, ambulance'},
            ],
            messageText:''
        }
    },
    reRender() {

    },
    dispatch(action){
        this.state.profilePage = ProfileReduser(this.state.ProfilePage, action);
        this.state.DialogsPage = DialogsReduser(this.state.DialogsPage, action);
        this.reRender(this.state);
    
    },
    subscribe(observer) {
        this.reRender = observer;
    }
}


window.store = store;

export default store;

