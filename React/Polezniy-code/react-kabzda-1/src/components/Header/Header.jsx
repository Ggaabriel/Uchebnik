import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
            <div>
                {props.auth?props.data.login:<NavLink to={'/login/'}> 
                    login
                </NavLink>}
                
            </div>
        </header>
    );
}

export default Header;