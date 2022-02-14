import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import SuperRange from './common/c7-SuperRange/SuperRange';
import s from './HW11.module.css'
import {Grid} from '@mui/material';


function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(80)

    const setValuesArray = (num1: number, num2: number) => {
        setValue1(num1)
        setValue2(num2)
    };


    return (
        <div>
            <hr/>
            homeworks 11

            <div className={s.singleRange}>
                <div>{value1}</div>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            {/*=============================*/}

            <Grid
                width={600}
                marginLeft={2.5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid width={54}
                >
                    {value1}
                </Grid>

                <Grid width={267}>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={setValuesArray}
                    />
                </Grid>

                <Grid
                    paddingLeft={4}
                    width={50}>
                    {value2}
                </Grid>
            </Grid>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
