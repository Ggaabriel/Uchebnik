const SET_DATA = 'SET_DATA';

let initialState = {
    data:{
        id:null,
        email:null,
        login:null,
        auth:false
    }
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA:{
            return {...state, data:{...state.data , ...action.data}, auth:true }
        }
       default:
        return state
    } 
}

export const setData = (id,email,login) => ({type:SET_DATA, data:{id,email,login}})