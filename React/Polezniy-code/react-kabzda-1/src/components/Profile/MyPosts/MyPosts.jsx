import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postItems = props.posts.map(elem => <Post id={elem.id} message={elem.message} likes={elem.likes} />)
    let newLink = React.createRef();
    
    const addPost = () => {
        props.addPost()
    }
    const updatePostText = () => {
        let newText = newLink.current.value;
        props.updatePostText(newText);
    }
    return (
        <div>
            <span>ava + description</span>
            <div>
                <span>My posts</span>
                <div>
                    <textarea 
                        onChange={updatePostText}
                        ref={newLink} name="" id="" cols="15" rows="2" value={props.newPostText}
                    />
                    <button onClick={addPost}>
                        add Post
                    </button>
                </div>

                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;
