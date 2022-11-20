import { takeEvery } from "redux-saga/effects";

import * as toDoListAction from './ToDoListAction';
import * as toDoListSaga from './ToDoListSaga';

export function* toDoListWatcher() {
    yield takeEvery(
        toDoListAction.GET_DOLIST,
        toDoListSaga.setDoListSaga
    );
    yield takeEvery(
        toDoListAction.GET_DONELIST,
        toDoListSaga.setDoneListSaga
    );
};