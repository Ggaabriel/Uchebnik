const MESSAGE_ADD = 'MESSAGE-ADD';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let initialState = {
    users:[
        {id: 1, name:'Big smoke'},
        {id: 2, name:'Rider'},
        {id: 3, name:'Sweet'}
    ],
    messages:[
        {id: 1, message:'I`ll take two number NIIIne, number NiiIIIineee LAAAAAARGE'},
        {id: 2, message:'i`m fucking genius'},
        {id: 3, message:'oh no, ambulance'},
    ],
    messageText:''
}

export const DialogsReduser = (state = initialState, action) => {

    switch(action.type){
        case MESSAGE_ADD:{
            let message = {
                id: 3,
                message: state.messageText
            }
            return {
                ...state,
                messages: [...state.messages, message ],
                messageText:''
            };
            //сверху более современный синтаксис
            // temporaryState.messages = [...state.messages];
            // temporaryState.messages.push(message);
            // temporaryState.messageText = '';
            // return temporaryState;
            
        }
        case NEW_MESSAGE_TEXT:{
            return{
                ...state,
                messageText:action.messageText
            };
            // temporaryState.messageText = action.messageText;
            // return temporaryState
        }
        default:
            return state;
    }

    // if (action.type === MESSAGE_ADD) {
    //     let message = {
    //         id: 3,
    //         message: state.messageText
    //     }
    //     state.messages.push(message);
    //     state.messageText = '';
    // }
    // else if (action.type === NEW_MESSAGE_TEXT) {
    //     state.messageText = action.messageText;
    // }
    // return state
}



export const messageAddCreator = () => ({ type: MESSAGE_ADD });
export const newMessageTextCreator = (messageText) => ({ type: NEW_MESSAGE_TEXT, messageText: messageText });