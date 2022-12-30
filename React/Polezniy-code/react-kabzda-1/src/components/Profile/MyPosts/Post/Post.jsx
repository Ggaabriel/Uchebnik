import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={classes.post}>
            <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/ru/a/a7/Head.cj.jpg" alt="" />
            </a>
            {props.message}
            <div>
                <span>likes {props.likes}</span>
            </div>
            
        </div>
    );
}

export default Post;