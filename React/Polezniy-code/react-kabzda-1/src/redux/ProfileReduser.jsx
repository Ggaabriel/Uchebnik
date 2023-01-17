const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts:[
        {id: 1, message: 'I love bebra', likes: 4 },
        {id: 2, message: 'fuck the police!', likes: 100 },
        {id: 3, message: 'oh shit, here we go again', likes: 0 },
        {id: 4, message: 'Grove Street - Home', likes: 99999 }
    ],
    newPostText:''
}

export const ProfileReduser = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0
        }
        state.posts.push(newPost)
        state.newPostText = "";
    }
    else if (action.type === UPDATE_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (newText) => ({ type: UPDATE_POST_TEXT, newText: newText })