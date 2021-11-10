import React from 'react'
import sty from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

 function Message(props: MessagePropsType) {
    return (
        <div className={sty.message} >
            <img src={props.avatar} alt={""} className={sty.imag}/>
            <div className={sty.text}>
                <div className={sty.name}>{props.name}</div>
                <div className={sty.mess}>{props.message}</div>
                <div className={sty.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message