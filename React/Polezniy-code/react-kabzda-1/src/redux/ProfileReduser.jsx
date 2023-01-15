const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


export const ProfileReduser = (state, action) => {
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