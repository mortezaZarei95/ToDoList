export const SET_USER = 'SETUSER';
export const GET_USER = 'GETUSER';
export const SET_USERACTIVE = 'SETUSERACTIVE';

export const setUserAction = (users) => ({
    type: SET_USER,
    users
});
export const getUserAction = () => ({
    type: GET_USER,
});
export const setUserActiveAction = (id) => ({
    type: SET_USERACTIVE,
    id
});