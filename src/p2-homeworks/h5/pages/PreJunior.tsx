import React from 'react'
import {HW2} from '../../h2/HW2';
import {HW1} from '../../h1/HW1';
import {HW4} from '../../h4/HW4';
import {HW3} from '../../h3/HW3';
import HW6 from '../../h6/HW6';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';




function PreJunior() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme)
    //className={theme + '-text'}
    return (
        <div className={theme}>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз