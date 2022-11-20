export const GET_DOLIST = 'GET_DOLIST';
export const SET_DOLIST = 'SET_DOLIST';
export const GET_DONELIST = 'GET_DONELIST';
export const SET_DONELIST = 'SET_DONELIST';
export const ADD_DO = 'ADD_DO';
export const ADD_DONE = 'ADD_DOE';


export const getDoListAction = () => ({
    type: GET_DOLIST,
});
export const setDoListAction = (dolist) => ({
    type: SET_DOLIST,
    dolist
});


export const getDoneListAction = () => ({
    type: GET_DONELIST,
});
export const setDoneListAction = (donelist) => ({
    type: SET_DONELIST,
    donelist
});


export const addDoAction = (item) => ({
    type: ADD_DO,
    item
});
export const addDoneAction = (item) => ({
    type: ADD_DONE,
    item
});