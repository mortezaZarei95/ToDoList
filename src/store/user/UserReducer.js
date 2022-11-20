import * as userAction from './UserAction';

const initialState = {
    users: [],
    userActive: 'All User'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case userAction.SET_USER:
            return {
                ...state,
                users: action.users
            }
        case userAction.SET_USERACTIVE:
            return {
                ...state,
                userActive: action.id
            }
    }
    return state;
}

export default reducer;