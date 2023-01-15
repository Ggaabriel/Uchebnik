const MESSAGE_ADD = 'MESSAGE-ADD';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const DialogsReduser = (state, action) => {

    if (action.type === MESSAGE_ADD) {
        let message = {
            id: 3,
            message: state.messageText
        }
        state.messages.push(message);
        state.messageText = '';
    }
    else if (action.type === NEW_MESSAGE_TEXT) {
        state.messageText = action.messageText;
    }
    return state
}



export const messageAddCreator = () => ({ type: MESSAGE_ADD });
export const newMessageTextCreator = (messageText) => ({ type: NEW_MESSAGE_TEXT, messageText: messageText });