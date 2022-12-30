import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    let postItems = props.posts.map(elem => <Post id={elem.id} message={elem.message} likes={elem.likes} />)
    let newLink = React.createRef();

    return (
        <div>
            <span>ava + description</span>
            <div>
                <span>My posts</span>
                <div>
                    <textarea 
                        
                        onChange={
                            () => {
                                let newText = newLink.current.value;
                                props.dispatch(updatePostTextActionCreator(newText));
                            }
                        }
                        ref={newLink} name="" id="" cols="15" rows="2" value={props.ProfilePage.newPostText}
                    />
                    <button
                        onClick={
                            () => {
                                props.dispatch(addPostActionCreator());
                                
                            }
                        }
                    >
                        
                        add Post
                    </button>
                </div>

                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;
