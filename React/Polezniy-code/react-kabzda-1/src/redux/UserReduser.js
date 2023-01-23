const FOLLOWING_TOGGLE = 'FOLLOWING-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_TOTAl_COUNT = 'SET-TOTAl-COUNT';
const SET_PAGE = 'SET_PAGE';
const TGL_RE_CUP = 'SET_RE_CUP';
let initialState = {
    users:[
    ],
    page:1,
    count:5,
    totalCount:20,
    reCupFlag:false
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
            return {...state, users:action.newUsers}
        }
        case SET_TOTAl_COUNT:{
            return {...state, totalCount:action.totalCount}
        }
        case SET_PAGE:{
            return {...state, page:action.page}
        }
        case TGL_RE_CUP:{
            return {...state, reCupFlag:!state.reCupFlag}
        }
        default:
            return state;
    }

}

export const followToggle = (userId) => ({ type: FOLLOWING_TOGGLE, userId})
export const setUsers = (newUsers) => ({type:SET_USERS, newUsers})
export const setCount = (totalCount) => ({type:SET_TOTAl_COUNT, totalCount})
export const setPage = (page) => ({type:SET_PAGE, page})
export const tglreCup = () => ({type:TGL_RE_CUP})