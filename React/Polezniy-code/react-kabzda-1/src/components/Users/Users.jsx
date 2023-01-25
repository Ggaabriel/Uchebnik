import React from "react";
import style from './Users.module.css'
import userPhoto from "../../assets/images/user.jpg"
import Loader from "./loader";
import { NavLink } from "react-router-dom";
import { request } from "../../app/dal";


const Users = (props) => {
    //let pages = Math.ceil(props.totalCount / props.count );
    let mass = [];
    for (let i = 1; i <= 10; i++) {
        mass.push(i);
    }
    return <div>
        {props.reCupFlag === true ? <Loader /> : null}
        <div className={style.pages}>
            {mass.map((elem) => {
                return <span onClick={() => {
                    props.updatePage(elem)
                }} className={props.page === elem && style.active}>{elem} </span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={style.userPhoto} />
                        </NavLink>
                    </div>
                    <div>

                        <button onClick={() => {
                            u.followed ?
                                request.DeleteUnfollow(u.id).then((answer) => {
                                        if (answer.data.resultCode === 0) {
                                            props.followToggle(u.id)
                                        }
                                    })

                                :

                                 request.PostFollow(u.id).then((answer) => {
                                        if (answer.data.resultCode === 0) {
                                            props.followToggle(u.id)

                                        }
                                    })

                        }}>{u.followed ? "unfollow" : "follow"}</button>

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

export default Users;