
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
        if(action.type === ADD_POST){
            let newPost = {
            id: 5,
            message: this.state.ProfilePage.newPostText,
            likes: 0
        }
        this.state.ProfilePage.posts.push(newPost)
        this.state.ProfilePage.newPostText = "";
        this.reRender(this.state);
        }
        else if(action.type === UPDATE_POST_TEXT){
            this.state.ProfilePage.newPostText = action.newText;
            this.reRender(this.state);
        }
        else if(action.type === MESSAGE_ADD){
            let message = {
                id: 3,
                message:this.state.DialogsPage.messageText
            }
            this.state.DialogsPage.messages.push(message);
            this.state.DialogsPage.messageText = '';
            this.reRender(this.state)
        }
        else if(action.type === NEW_MESSAGE_TEXT){
            this.state.DialogsPage.messageText = action.messageText;
            this.reRender(this.state);
        }
    },
    subscribe(observer) {
        this.reRender = observer;
    }
}
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const MESSAGE_ADD = 'MESSAGE-ADD';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT'
export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText})
export const messageAddCreator = () => ({type: MESSAGE_ADD});
export const newMessageTextCreator = (messageText) => ({type: NEW_MESSAGE_TEXT, messageText: messageText});


window.store = store;

export default store;

