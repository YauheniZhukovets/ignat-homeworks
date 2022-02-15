import axios from 'axios';

export const API = {
    createPostRequest(state: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: state})
    }
}


