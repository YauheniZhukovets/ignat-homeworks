import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

 function Message(props: MessagePropsType) {
    return (
        <div className={s.message} >
            <img src={props.avatar} alt={""} className={s.imag}/>
            <div className={s.nook}> </div>

            <div className={s.text}>
                <div className={s.name}>{props.name}</div>
                <div className={s.mess}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message