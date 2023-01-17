import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from "./Profile.module.css";

const Profile = (props) => {
    return(
        <main className={classes.main}>
            <div>
                <img className={classes.image} src="https://asset.vg247.com/gta_san_andreas_X7ZIrfk.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/gta_san_andreas_X7ZIrfk.jpg" alt="" />
            </div>
           
             <MyPostsContainer store ={props.store}/>
        </main>
        
    );
}

export default Profile;