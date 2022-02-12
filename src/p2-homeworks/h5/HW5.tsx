import React from 'react'
import Header from './Header';
import RoutesRoot from './Routes';
import {HashRouter} from 'react-router-dom';


function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesRoot/>
            </HashRouter>

        </div>
    )
}

export default HW5
