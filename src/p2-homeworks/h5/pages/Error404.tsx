import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            {<h1><b>ERROR 404</b></h1>}
        </div>
    )
}

export default Error404
