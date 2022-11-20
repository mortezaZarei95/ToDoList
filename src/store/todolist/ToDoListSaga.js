import axios from 'axios';
import { put } from 'redux-saga/effects';


import * as toDoListAction from './ToDoListAction';

export function* setDoListSaga(action) {
    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/todos', { params: { completed: false } });
        yield put(toDoListAction.setDoListAction(response.data))
    } catch (error) {
        console.log(error);
    }

};

export function* setDoneListSaga(action) {
    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/todos', { params: { completed: true } });
        yield put(toDoListAction.setDoneListAction(response.data))
    } catch (error) {
        console.log(error);
    }

};