import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../Users/loader";
import classes from "../Profile.module.css";
const MyProfile = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    else {
        // const contacts = () => {
        //     for(let elem in props.profile.contacts){
        //         return <a href={`https://www.${props.profile.contacts[elem]}`}>{elem}</a>
        //     }
        // }   

        return <div>
            <div>
                <img className={classes.image} src="https://asset.vg247.com/gta_san_andreas_X7ZIrfk.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/gta_san_andreas_X7ZIrfk.jpg" alt="" />
            </div>

            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <div >
                    <img src={props.profile.photos.large} alt="" />

                </div>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <h4>{props.profile.aboutMe}</h4>
                    <p>Статус: {props.profile.lookingForAJob ? 'ищу работу' : 'не ищу работу'}</p>
                    <p>Описание: {props.profile.lookingForAJobDescription}</p>
                    {Object.keys(props.profile.contacts).map(key => {
                       return props.profile.contacts[key]!= null? <a href={`https://www.${props.profile.contacts[key]}`}>{key} </a> : null
                    })}
                </div>

            </div>
            <span>ava + description</span>
        </div>
    }


}

export default MyProfile;
