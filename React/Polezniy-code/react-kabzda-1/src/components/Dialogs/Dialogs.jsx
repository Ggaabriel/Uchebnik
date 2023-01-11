import React from 'react';
import { messageAddCreator, newMessageTextCreator } from '../../redux/state';
import classes from './Dialogs.module.css'
import Message from './messages/Message';
import Users from './Users/Users';

const Dialogs = (props) => {

    const sendMessage = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            props.dispatch(messageAddCreator())
        }
        
    }
    const changeText = (event) => {
        event.target.style.height = "auto";
        event.target.style.height = Math.max(event.target.scrollHeight, event.target.offsetHeight) + "px"
        props.dispatch(newMessageTextCreator(event.target.value));
    }

    let usersItems = props.DialogsPage.users.map(elem => <Users id={elem.id} name={elem.name} />);
    let messagesItems = props.DialogsPage.messages.map(elem => <Message id={elem.id} message={elem.message} />);
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
                    <textarea value={props.DialogsPage.messageText} onChange={changeText} onKeyDown={sendMessage} placeholder='Напишите сообщение...'id={classes.textArea} cols="30" rows="1" />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;