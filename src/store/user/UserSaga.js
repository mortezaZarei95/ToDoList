import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as userAction from './UserAction'

export function* getUserSagas(action) {
    try {
        const response = yield axios.get('https://jsonplaceholder.typicode.com/users');
        yield put(userAction.setUserAction(response.data));
    } catch (error) {
        console.log(error);
    }
}