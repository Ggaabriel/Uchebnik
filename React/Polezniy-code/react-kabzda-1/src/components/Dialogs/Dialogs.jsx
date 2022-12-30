import React from 'react';
import classes from './Dialogs.module.css'
import Message from './messages/Message';
import Users from './Users/Users';

const Dialogs = (props) =>{
    console.log(props.state.users)

    let usersItems = props.state.users.map(elem => <Users id={elem.id} name={elem.name} />);
    let messagesItems = props.state.messages.map(elem => <Message id={elem.id} message={elem.message} />);
    return(
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {usersItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;