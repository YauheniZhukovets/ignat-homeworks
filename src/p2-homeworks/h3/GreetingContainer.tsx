import React, {useState} from 'react'
import {Greeting} from './Greeting';
import {UserType} from './HW3';


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (text:string) => {
        setName(text)
        setError('')
    }

    const setKeyPress = () => {
            addUser()
            setName('')
    }

    const addUser = () => {
        if (name.trim() !== ''){
            alert(`Hello ${name} !`)
            addUserCallback(name.trim())
            setName('')
        }
        else {
            setError('Title is required!')
            setName('')
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            setKeyPress={setKeyPress}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

