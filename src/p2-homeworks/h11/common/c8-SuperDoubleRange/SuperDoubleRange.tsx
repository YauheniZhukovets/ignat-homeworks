import React from 'react'
import {Slider} from '@mui/material';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value1: number, value2: number) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number | null
    disable?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        step, disable


    }
) => {


    const handleChangeArray = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            onChangeRange!(newValue[0], newValue[1])
        }
    }


    return (
        <>
            <Slider
                value={value}
                valueLabelDisplay="off"
                onChange={handleChangeArray}
                disableSwap

                min={min}
                max={max}
                step={step}
                disabled={disable}
            />
        </>
    )
}

export default SuperDoubleRange
