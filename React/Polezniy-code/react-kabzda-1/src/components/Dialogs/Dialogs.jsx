import React from 'react';
import classes from './Dialogs.module.css'
import Message from './messages/Message';
import Users from './Users/Users';

const Dialogs = (props) => {

    const addSendMessage = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            props.sendMessage()
        }
        
    }
    const addChangeText = (event) => {
        event.target.style.height = "auto";
        event.target.style.height = Math.max(event.target.scrollHeight, event.target.offsetHeight) + "px"
        props.changeText(event.target.value);
    }

    let usersItems = props.users.map(elem => <Users id={elem.id} name={elem.name} />);
    let messagesItems = props.messages.map(elem => <Message id={elem.id} message={elem.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {usersItems}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesItems}
                </div>
                <div className={classes.messageArea}>
                    <textarea value={props.messageText} onChange={addChangeText} onKeyDown={addSendMessage} placeholder='Напишите сообщение...'id={classes.textArea} cols="30" rows="1" />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;