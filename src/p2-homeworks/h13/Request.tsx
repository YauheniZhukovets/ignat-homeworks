import React, {useState} from 'react';
import {API} from './api/RequestAPI';
import s from './HW13.module.css'
import preloadImg from '../h10/Spinner.svg';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


export const Request = () => {

    const [state, setState] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)


    const RequestHandler = () => {
        setMessage('')
        setLoading(true)
        API.createPostRequest(state).then((res) => {
            setMessage(res.data.errorText)
        })
            .catch((error) => {
                setMessage(error.response ? error.response.data.errorText : error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const ClassNameMessage = (message === '...всё ок)') ? s.message : s.messageError

    return (
        <div className={s.generalBlock}>

            <div className={s.checkBox}>
                <SuperCheckbox
                    checked={state}
                    onChangeChecked={setState}
                />
            </div>


            <div className={s.blockPreloader}>
                {loading
                    ? (
                        <div><img className={s.preloader} src={preloadImg} alt={'pic'}/></div>
                    ) : (
                        <div className={ClassNameMessage}>{message}</div>
                    )
                }
            </div>

            <div>
                <SuperButton
                    disabled={loading}
                    onClick={RequestHandler}
                >
                    Request
                </SuperButton>
            </div>

        </div>

    );
};

