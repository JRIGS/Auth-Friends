import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_FRIEND,
    ADD_FRIEND_SUCCESS,
    DELETE_FRIEND,
    DELETE_FRIEND_SUCCESS
} from '../actions';


const initialState = {
    friends: [],
    loggingIn: false,
    error: null,
    fetchingFriends: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
case LOGIN_START:
return {
    ...state,
    error: '',
    fetchingFriends: false,
    loggingIn: true
};
case LOGIN_SUCCESS:
return {
    ...state,
    error: '',
    loggingIn: false
};
case LOGIN_FAILURE:
return {
    ...state,
    error: 'Login failed!',
    loggingIn: false
}
case FETCH_DATA_START:
return {
    ...state,
    error: '',
    fetchingFriends: true
};
case FETCH_DATA_SUCCESS:
return {
    ...state,
    error: '',
    fetchingFriends: false,
    friends: action.payload
};
case FETCH_DATA_FAILURE:
return {
    ...state,
    fetchingFriends: false,
    error: action.payload,
};
case ADD_FRIEND:
return {
    ...state,
    fetchingFriends: true,
    error: ''
};
case ADD_FRIEND_SUCCESS:
return {
    ...state,
    friends: action.payload,
    fetchingFriends: false,
    error: ''
};
case DELETE_FRIEND:
return {
    ...state,
    fetchingFriends: true,
    error: ''
};
case DELETE_FRIEND_SUCCESS:
return {
    ...state,
    friends: action.payload,
    fetchingFriends: false,
    error: ''
}
default: 
    return state;
    }
};

export default reducer;