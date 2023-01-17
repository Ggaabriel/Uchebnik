import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/ProfileReduser';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let ProfilePage = props.store.getState().ProfilePage;
    const updatePostText = (newText) => {
        props.store.dispatch(updatePostTextActionCreator(newText));
    }
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
        
    }
    return (<MyPosts addPost ={addPost} updatePostText={updatePostText} posts={ProfilePage.posts} newPostText={ProfilePage.newPostText}/>);
}

export default MyPostsContainer;
