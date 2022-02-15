import React from 'react';
import style from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';


function HW12() {
    const themes = ['Dark', 'Red', 'Green'];
    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (targetValue: string) => {
        dispatch(changeThemeAC(targetValue))
    }

    return (
        <div className={style[theme]}>
            <hr/>

            <span className={style[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperSelect
                    value={theme}
                    options={themes}
                    onChangeOption={onChangeCallback}
                />
            </div>


            <hr/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
