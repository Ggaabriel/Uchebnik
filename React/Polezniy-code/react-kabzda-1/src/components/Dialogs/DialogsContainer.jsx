import React from 'react';
import { connect } from 'react-redux';
import { messageAddCreator, newMessageTextCreator } from '../../redux/DialogsReduser';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
    
//     return (
//         <StoreContext.Consumer>{
//                 (store)=>{
//                     let DialogsPage = store.getState().DialogsPage;
//                     const sendMessage = () => {
//                         store.dispatch(messageAddCreator())  
//                     }
//                     const changeText = (newMessage) => {
//                         store.dispatch(newMessageTextCreator(newMessage));
//                     }
//                     return  <Dialogs sendMessage = {sendMessage} changeText = {changeText} users={DialogsPage.users}  messages = {DialogsPage.messages} messageText = {DialogsPage.messageText}/>
//                 }
//             }
            
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) =>{
    return{
        users:state.DialogsPage.users,
        messages:state.DialogsPage.messages,
        messageText:state.DialogsPage.messageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage:() => {
            dispatch(messageAddCreator())  
        },
        changeText:(newMessage) => {
            dispatch(newMessageTextCreator(newMessage));
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;