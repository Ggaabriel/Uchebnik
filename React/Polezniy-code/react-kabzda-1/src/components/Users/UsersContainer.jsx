import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followToggle, setCount, setPage, setUsers, tglreCup } from "../../redux/UserReduser";
import { request } from "../../app/dal";



class UsersApi extends React.Component{
    componentDidMount(){
        if(this.props.users.length === 0){
            this.props.tglreCup()
            request.GetUsers(this.props.page,this.props.count)
            .then((answer)=>{
                this.props.tglreCup()
                this.props.setUsers(answer.data.items);
                this.props.setCount(answer.data.totalCount)
            })

        }
    }
    updatePage = (newPage) => {
        this.props.setPage(newPage);
        this.props.tglreCup()
        request.GetUsers(this.props.page,this.props.count)
        .then((answer)=>{
            this.props.tglreCup()
            this.props.setUsers(answer.data.items);
        });
    }
    render(){
        return <Users users = {this.props.users} 
        page={this.props.page} 
        count={this.props.count}
        totalCount={this.props.totalCount} 
        followToggle={this.props.followToggle} 
        updatePage = {this.updatePage}
        reCupFlag = {this.props.reCupFlag}
        />
    }
}
let mapStateToProps = (state) =>{
    return{
        users:state.UsersPage.users,
        page:state.UsersPage.page,
        count:state.UsersPage.count,
        totalCount:state.UsersPage.totalCount,
        reCupFlag:state.UsersPage.reCupFlag
    }
}
// let mapDispatchToProps = (dispatch) =>{
//     return{
//         followToggle:(userId)=>{
//             dispatch(followToggleAC(userId))
//         },
//         setUsers:(newUsers) =>{
//             dispatch(setUsersAC(newUsers))
//         },
//         setCount:(totalCount) =>{
//             dispatch(setCountAC(totalCount))
//         },
//         setPage:(page)=> {
//             dispatch(setPageAC(page))
//         },
//         tglreCup:() => {
//             dispatch(tglreCupAC())
//         }
//     }
// }
const UsersContainer = connect(mapStateToProps,{followToggle,setUsers,setCount,setPage,tglreCup})(UsersApi)

export default UsersContainer;