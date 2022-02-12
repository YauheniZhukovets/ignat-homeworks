import React from 'react'
import {Message} from './Message';


const messageData = {
    avatar: 'https://mtdata.ru/u7/photo8A7D/20488237865-0/original.png',
    name: 'Elena',
    message: 'Hi, Ignat. How are you?',
    time: '23:59',
}

export const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}
