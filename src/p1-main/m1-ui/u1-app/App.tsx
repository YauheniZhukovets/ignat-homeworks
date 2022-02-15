import React from 'react'
import HW5 from '../../../p2-homeworks/h5/HW5';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';
import s from './App.module.css'

export const App = () => {
    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme)
    return (
        <div className={`${theme} ${s.App}`}>
            <div>react homeworks:</div>
            {/* <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}
            <HW5/>
        </div>
    );
}


