import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/Login-reducer';
import Header from './Header';

class HeaderApi extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
        .then((answer)=>{
            if (answer.data.resultCode === 0){
                let {id, login, email} = answer.data.data;
                this.props.setData(id, email, login)
            }
        })
    }
    render(){
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    data:state.Login.data,
    auth:state.Login.auth
})


const HeaderContainer = connect(mapStateToProps,{setData})(HeaderApi)
        




export default HeaderContainer;