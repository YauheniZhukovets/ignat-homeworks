import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Rout';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive})=> isActive ? s.activeLink : s.defLink}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive})=> isActive ? s.activeLink : s.defLink}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=> isActive ? s.activeLink : s.defLink}>JuniorPlus</NavLink>
            <img className={s.picBlock}
                src={'https://static-sl.insales.ru/images/products/1/86/125575254/medium_znak-e-02-01-napravlyayuschaya-strelka.png'}
                alt={'picBlock'}/>

        </div>
    )
}

export default Header
