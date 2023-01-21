import React from "react";
import style from './Users.module.css'
import axios from 'axios';
import userPhoto from "../../assets/images/user.jpg"

// const Users = (props) => {
//     if(props.users.length === 0){
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((elem)=>{
//             props.setUsers(elem.data.items)
//         })
//         // props.setUsers([
//         //     {id:1,imgUrl:'https://man-chel.ru/upload/resize_cache/webp/bitrix/templates/man-chel.ru/components/luxar/super/index_page/images/about.webp', follow:true ,name:'Dmitry', descrip:'i like bebra', location:{country:'Russia',city:'Putingrad'}},
//         //     {id:2,imgUrl:'https://www.vadoetornoweb.com/wp-content/uploads/2020/06/MAN-TGX-480x480.jpg', follow:true ,name:'Viktor', descrip:'wow bebra looks like a shit', location:{country:'Russia',city:'Putingrad'}},
//         //     {id:3,imgUrl:'https://man-chel.ru/upload/resize_cache/webp/bitrix/templates/man-chel.ru/components/luxar/super/index_page/images/about.webp', follow:false ,name:'Fedor', descrip:'what is bebra?', location:{country:'Belarus',city:'Lukashenkograd'}}
//         // ])
//     }
//     return <div>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                         <img src={u.photos.small != null?u.photos.small: userPhoto } alt="" className={style.userPhoto} />
//                     </div>
//                     <div>
//                         <button onClick={()=> props.followToggle(u.id)}>{u.follow?'unfollow':'follow'}</button>
                        
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.country"}</div>
//                         <div>{"u.location.city"}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>


// }

class Users extends React.Component{
    componentDidMount(){
        if(this.props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((elem)=>{
                this.props.setUsers(elem.data.items)
            })
            // props.setUsers([
            //     {id:1,imgUrl:'https://man-chel.ru/upload/resize_cache/webp/bitrix/templates/man-chel.ru/components/luxar/super/index_page/images/about.webp', follow:true ,name:'Dmitry', descrip:'i like bebra', location:{country:'Russia',city:'Putingrad'}},
            //     {id:2,imgUrl:'https://www.vadoetornoweb.com/wp-content/uploads/2020/06/MAN-TGX-480x480.jpg', follow:true ,name:'Viktor', descrip:'wow bebra looks like a shit', location:{country:'Russia',city:'Putingrad'}},
            //     {id:3,imgUrl:'https://man-chel.ru/upload/resize_cache/webp/bitrix/templates/man-chel.ru/components/luxar/super/index_page/images/about.webp', follow:false ,name:'Fedor', descrip:'what is bebra?', location:{country:'Belarus',city:'Lukashenkograd'}}
            // ])
        }
    }

    render(){
        return <div>
        {
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null?u.photos.small: userPhoto } alt="" className={style.userPhoto} />
                    </div>
                    <div>
                        <button onClick={()=> this.props.followToggle(u.id)}>{u.follow?'unfollow':'follow'}</button>
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    }
}
export default Users;