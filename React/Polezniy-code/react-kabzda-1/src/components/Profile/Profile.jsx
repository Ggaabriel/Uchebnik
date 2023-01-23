import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfile from './MyProfile/MyProfile';
import classes from "./Profile.module.css";

const Profile = (props) => {
    return(
        <main className={classes.main}>
            <MyProfile profile = {props.profile}/>
            <MyPostsContainer />
        </main>
        
    );
}

export default Profile;