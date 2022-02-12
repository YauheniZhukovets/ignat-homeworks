import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './pages/Header.module.css'

const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

function Header() {

    return (
        <div className={s.containerBlockHeader}>
            <div>
                <NavLink className={setActive} to={PATH.PRE_JUNIOR}> Pre-junior </NavLink>
                <NavLink className={setActive} to={PATH.JUNIOR}> Junior </NavLink>
                <NavLink className={setActive} to={PATH.PLUS_JUNIOR}> Junior-Plus </NavLink>
            </div>
            <div className={s.triangle}> </div>
        </div>


    )
}

export default Header
