import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const URL = 'http://localhost:5000/api/login'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(`${URL}`, creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err});
        console.log(err);
})};