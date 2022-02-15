import axios from 'axios';

export const API = {
    createPostRequest(checkBox: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkBox})
    }
}


