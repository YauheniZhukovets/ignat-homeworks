import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './pages/Header.module.css'

const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

function Header() {

    return (
        <div className={s.containerBlockHeader}>
            <div>
                <NavLink className={setActive} to={PATH.PRE_JUNIOR}> <b> Pre-junior </b> </NavLink>
                <NavLink className={setActive} to={PATH.JUNIOR}> <b>Junior</b></NavLink>
                <NavLink className={setActive} to={PATH.PLUS_JUNIOR}> <b>Junior-Plus</b> </NavLink>
            </div>
            <div className={s.triangle}> </div>
        </div>


    )
}

export default Header
