import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Rout';

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
        </div>
    )
}

export default Header
