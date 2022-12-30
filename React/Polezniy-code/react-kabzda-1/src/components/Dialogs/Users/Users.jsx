import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Users.module.css";

const Users = (props) => {
    return(
       <div>
            <NavLink to={`/dialogs/` + props.id}>{props.name}</NavLink>
       </div>
    );
}

export default Users;