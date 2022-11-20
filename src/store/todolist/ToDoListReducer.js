import * as toDoListAction from './ToDoListAction';


const initialState = {
    do: [],
    done: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case toDoListAction.SET_DOLIST:
            return {
                ...state,
                do: action.dolist
            }
        case toDoListAction.SET_DONELIST:
            return {
                ...state,
                done: action.donelist
            }
        case toDoListAction.ADD_DO:
            return {
                ...state,
                do: [...state.do, action.item]
            }
        case toDoListAction.ADD_DONE:
            return {
                ...state,
                done: [...state.done, action.item]
            }
    }
    return state;
}

export default reducer;