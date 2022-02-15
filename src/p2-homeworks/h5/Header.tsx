import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './pages/Header.module.css'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from '../h12/bll/themeReducer';


const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

function Header() {

    const themes = ['White', 'Dark', 'Red', 'Green'];
    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (targetValue: string) => {
        dispatch(changeThemeAC(targetValue))
    }

    return (
        <div className={theme}>
            <div className={s.containerBlockHeader}>
                <div>
                    <NavLink className={setActive} to={PATH.PRE_JUNIOR}> <b> Pre-junior </b> </NavLink>
                    <NavLink className={setActive} to={PATH.JUNIOR}> <b>Junior</b></NavLink>
                    <NavLink className={setActive} to={PATH.PLUS_JUNIOR}> <b>Junior-Plus</b> </NavLink>
                </div>
                <div className={s.triangle}> </div>

            </div>
            <div>
                <SuperRadio
                    name={'RadioBoxTheme'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
        </div>


    )
}

export default Header
