import React from 'react';
import classes from './Dialogs.module.css'
import Message from './messages/Message';
import Users from './Users/Users';

const Dialogs = (props) => {

    const sendMessage = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log('Отправить сообщение')
        }
        var event = event;
        var getElement = event.target;
        getElement.style.height = "auto";
        getElement.style.height = Math.max(getElement.scrollHeight, getElement.offsetHeight) + "px"
    }

    let usersItems = props.state.users.map(elem => <Users id={elem.id} name={elem.name} />);
    let messagesItems = props.state.messages.map(elem => <Message id={elem.id} message={elem.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {usersItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
                <div className={classes.messageArea}>
                    <textarea onKeyDown={sendMessage} placeholder='Напишите сообщение...' name="" id={classes.textArea} cols="30" rows="1" />
                </div>
            </div>

        </div>
    )
}

export default Dialogs;