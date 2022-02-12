import React, {useState} from 'react'
import {GreetingContainer} from './GreetingContainer';
import {v1} from 'uuid';


// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
export const  HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        let newUser:UserType = {_id: v1(), name}
        setUsers([newUser,...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

