import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/ProfileReduser';
import MyPosts from './MyPosts';


// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store)=>{
//                     let ProfilePage = store.getState().ProfilePage;
//                     const updatePostText = (newText) => {
//                         store.dispatch(updatePostTextActionCreator(newText));
//                     }
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
                        
//                     }
//                     return ( <MyPosts addPost ={addPost} updatePostText={updatePostText} posts={ProfilePage.posts} newPostText={ProfilePage.newPostText}/>)
//                 }
//             }
           
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) =>{
    return{
        posts:state.ProfilePage.posts,
        newPostText:state.ProfilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updatePostText:(newText) => {
            dispatch(updatePostTextActionCreator(newText));
        },
        addPost:() => {
            dispatch(addPostActionCreator());
            
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
