import React from 'react'
import s from './Header.module.css'

function Error404() {
    return (
        <div className={s.errorBlock}>
            <img src={'https://railsware.com/images/shared/not-found-e12fa988.png'}/>
            <div>Страница не найдена!</div>
        </div>
    )
}

export default Error404
