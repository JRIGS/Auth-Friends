import axiosWithAuth from '../utils/axiosAuth';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';

export const deleteFriend = id => {
    return dispatch => {
        dispatch({type: DELETE_FRIEND});
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}