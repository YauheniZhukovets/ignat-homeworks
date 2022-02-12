import React from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string
    setNameCallback: (text: string) => void
    setKeyPress: () => void
    addUser: () => void
    error: string
    totalUsers: number

}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = ({
                                                          name,
                                                          setNameCallback,
                                                          setKeyPress,
                                                          addUser,
                                                          error,
                                                          totalUsers,
                                                      }
) => {
    return (
        <div className={s.blockGreeting}>
            <SuperInputText
                value={name}
                onChangeText={setNameCallback}
                onEnter={setKeyPress}
                error={error}
            />

            <SuperButton disabled={!name}
                         onClick={addUser}
            >add</SuperButton>

            <span className={s.totalCount}>{totalUsers}</span>
        </div>
    )
}


