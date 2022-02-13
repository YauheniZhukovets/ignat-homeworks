import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }


    const get2digitsNumber = (num: number) => num < 10 ? '0' + num : num

    const stringTime = `${get2digitsNumber(date.getHours())} 
    : ${get2digitsNumber(date.getMinutes())} : ${get2digitsNumber(date.getSeconds())}`

    const stringDate = `${get2digitsNumber(date.getDate())} 
    : ${get2digitsNumber(date.getMonth() + 1)} : ${date.getFullYear()}`

    return (
        <div className={s.blockClock}>
            <div className={s.stringTime}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.stringDate}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttonBlock}>
                <div><SuperButton onClick={start}>start</SuperButton></div>
                <div><SuperButton onClick={stop}>stop</SuperButton></div>
            </div>
        </div>
    )
}

export default Clock
