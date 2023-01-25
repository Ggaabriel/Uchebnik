import React from 'react';
import { connect } from 'react-redux';
import { addPost, setProfile, updatePostText } from '../../redux/ProfileReduser';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyProfile from './MyProfile/MyProfile';
import Profile from './Profile';
import classes from "./Profile.module.css";
import { tglreCup } from "../../redux/UserReduser";
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import { request } from '../../app/dal';


// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileApi extends React.Component{
    componentDidMount(){
        tglreCup()
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 2
        }
        request.GetProfile(userId)
        .then(answer => {
            tglreCup()
            this.props.setProfile(answer.data)
        })
    }
    render(){
        return <Profile {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    posts:state.ProfilePage.posts,
    newPostText:state.ProfilePage.newPostText,
    profile:state.ProfilePage.profile
})

let ProfileUrlPageContainer = withRouter(ProfileApi)


const ProfileContainer = connect(mapStateToProps,{addPost,updatePostText,setProfile,tglreCup})(ProfileUrlPageContainer)
        




export default ProfileContainer;