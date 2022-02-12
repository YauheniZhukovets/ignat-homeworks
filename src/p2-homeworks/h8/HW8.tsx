import React, {useState} from 'react'
import {ageCheckAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={s.user}
             key={p._id}
        >
            <span>{p.name}</span>
            <span style={ {color: 'rgba(13, 39, 121, 0.75)'} }>{p.age}</span>

        </div>
    ))
    const sortUp = () => setPeople(homeWorkReducer(initialPeople,sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople ,sortDownAC()))
    const ageCheck = () => setPeople(homeWorkReducer(initialPeople, ageCheckAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            <div className={s.users}>
                {finalPeople}
            </div>

            <div className={s.blockButton}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={ageCheck} red>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
