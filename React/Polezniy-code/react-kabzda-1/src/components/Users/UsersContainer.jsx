import React from "react";
import { connect } from "react-redux";
import { followngToggleAC, setUsersAC } from "../../redux/UserReduser";
import Users from "./Users";


let mapStateToProps = (state) =>{
    return{
        users:state.UsersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        followToggle:(userId)=>{
            dispatch(followngToggleAC(userId))
        },
        setUsers:(newUsers) =>{
            dispatch(setUsersAC(newUsers))
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;