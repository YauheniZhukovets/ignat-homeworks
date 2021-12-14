import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Rout';

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>per-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
        </div>
    )
}

export default Header
