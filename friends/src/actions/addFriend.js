import axiosWithAuth from '../utils/axiosAuth';

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';

export const addFriend = friend => {
    return dispatch => {
        dispatch({ type: ADD_FRIEND });
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            dispatch({
                type: ADD_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
           console.log(err)
        })
    }
}