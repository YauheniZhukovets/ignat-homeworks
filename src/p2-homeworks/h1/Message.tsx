import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <img className={s.images} src={props.avatar} alt={''}/>

            <div className={s.edge}> </div>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}


