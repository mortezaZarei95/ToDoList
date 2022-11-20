import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { userWatcher } from './user/UserSagaWatcher';
import { toDoListWatcher } from './todolist/ToDoListSagaWatcher';

import userReducer from './user/UserReducer';
import toDoListReducer from './todolist/ToDoListReducer'

const reducer = combineReducers({
    userReducer,
    toDoListReducer,
});
const sagaMidleWare = createSagaMiddleware();
const composeEnhancers = ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMidleWare)));

sagaMidleWare.run(userWatcher);
sagaMidleWare.run(toDoListWatcher);

export default store;
