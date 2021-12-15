import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://w0.peakpx.com/wallpaper/544/324/HD-wallpaper-sexy-lady-mena-suvari-posing-blonde-beautiful-face-sexy.jpg',
    name: 'Vika',
    message: 'Hello! How are you?',
    time: '22:00',
}



function HW1() {
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

export default HW1
