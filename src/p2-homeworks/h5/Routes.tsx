import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import PlusJunior from './pages/PlusJunior';
import Junior from './pages/Junior';


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PLUS_JUNIOR: '/plus-junior',
}


function RoutesRoot() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.PLUS_JUNIOR} element={<PlusJunior/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesRoot
