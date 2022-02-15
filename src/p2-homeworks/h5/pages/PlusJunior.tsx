import React from 'react'
import HW12 from '../../h12/HW12';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import HW13 from '../../h13/HW13';




function PlusJunior() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme)
    return (
        <div className={theme}>
            <HW12/>
            <HW13/>
        </div>
    )
}

export default PlusJunior

