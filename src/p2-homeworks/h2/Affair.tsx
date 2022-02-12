import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

export const Affair = (props: AffairPropsType) => {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affairs}>
            <span>{props.affair.name}</span>
            <span className={
                props.affair.priority === 'low'
                    ? s.lowFilter
                    : props.affair.priority === 'middle'
                        ? s.middleFilter
                        : s.highFilter}>

                [{props.affair.priority}]</span>
            <SuperButton red onClick={deleteCallback}>
                X
            </SuperButton>

            {/*<span><button className={s.buttonDelete}
                          onClick={deleteCallback}
            >X</button></span>*/}
        </div>
    )
}
