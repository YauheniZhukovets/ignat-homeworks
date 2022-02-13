import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import s from './HW10.module.css'
import preloadImg from './Spinner.svg'

function HW10() {

    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        let TimerId = setTimeout(() => {
            dispatch(loadingAC(false))
            clearTimeout(TimerId)
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={s.blockPreloader}>
                {loading
                    ? (
                        <div><img className={s.preloader} src={preloadImg} alt={'pic'}/></div>
                    ) : (
                        <div><SuperButton onClick={setLoading}>set loading...</SuperButton></div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
