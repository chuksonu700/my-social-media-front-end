import axios from 'axios';

const instance = axios.create({
    baseURL:'https://chuks-face-social-clone.herokuapp.com/'
})

//`http://localhost:9000/`

export default instance;