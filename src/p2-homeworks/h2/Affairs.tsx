import React from 'react'
import {Affair} from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

export const Affairs = (props: AffairsPropsType) => {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setHandlerFilter = (filter: FilterType) => {
        props.setFilter(filter)
    }

    return (
        <div className={s.blockAffairs}>
            <div>
                {mappedAffairs}
            </div>

            <div className={s.buttons}>
                <SuperButton
                    onClick={() => setHandlerFilter('all')}
                >All</SuperButton>

                <SuperButton
                    onClick={() => setHandlerFilter('high')}
                >High</SuperButton>

                <SuperButton
                    onClick={() => setHandlerFilter('middle')}
                >Middle</SuperButton>

                <SuperButton
                    onClick={() => setHandlerFilter('low')}
                >Low</SuperButton>
            </div>
        </div>
    )
}


