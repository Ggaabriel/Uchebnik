const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    posts:[
        {id: 1, message: 'I love bebra', likes: 4 },
        {id: 2, message: 'fuck the police!', likes: 100 },
        {id: 3, message: 'oh shit, here we go again', likes: 0 },
        {id: 4, message: 'Grove Street - Home', likes: 99999 }
    ],
    newPostText:'',
    profile:null
}

export const ProfileReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText : ""
            }
            // let temporaryState = {...state}
            // temporaryState.posts = [...state.posts];
            // temporaryState.posts.push(newPost)
            // temporaryState.newPostText = "";
            // return temporaryState;
        }
        case UPDATE_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText,
            }
            // let temporaryState = {...state}
            // temporaryState.newPostText = action.newText;
            // return temporaryState;
        }
        case SET_PROFILE:{
            return{
                ...state,
                profile:action.newProfile
            }
        }
        default:
            return state;
    }

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likes: 0
    //     }
        
    //     temporaryState.posts = [...state.posts];
    //     temporaryState.posts.push(newPost)
    //     temporaryState.newPostText = "";
       
    // }
    // else if (action.type === UPDATE_POST_TEXT) {
  
    //     temporaryState.newPostText = action.newText;
        
    // }
    // return temporaryState;
}

export const addPost = () => ({ type: ADD_POST });
export const updatePostText = (newText) => ({ type: UPDATE_POST_TEXT, newText: newText })
export const setProfile = (newProfile) => ({type:SET_PROFILE, newProfile})