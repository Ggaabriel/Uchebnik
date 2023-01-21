const FOLLOWING_TOGGLE = 'FOLLOWING-TOGGLE';
const SET_USERS = 'SET-USERS'
let initialState = {
    users:[
    ]
}

export const UserReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOWING_TOGGLE:{
            return {
                ...state,
                users:state.users.map(elem =>{

                    if(elem.id === action.userId){

                        return{...elem,follow:!elem.follow}
                    }
                    return elem;
                })
            }

        }
        case SET_USERS:{
            return {...state, users:[...state.users, ...action.newUsers]}
        }
        default:
            return state;
    }

}

export const followngToggleAC = (userId) => ({ type: FOLLOWING_TOGGLE, userId})
export const setUsersAC = (newUsers) => ({type:SET_USERS, newUsers})