import React from 'react';
import { messageAddCreator, newMessageTextCreator } from '../../redux/DialogsReduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let DialogsPage = props.store.getState().DialogsPage;
    const sendMessage = () => {
        props.store.dispatch(messageAddCreator())  
    }
    const changeText = (newMessage) => {
        props.store.dispatch(newMessageTextCreator(newMessage));
    }
    return (<Dialogs sendMessage = {sendMessage} changeText = {changeText} users={DialogsPage.users}  messages = {DialogsPage.messages} messageText = {DialogsPage.messageText}/>)
}

export default DialogsContainer;