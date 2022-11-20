import Header from "../header/Header";
import ToDoList from "../todolist/ToDoList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as userAction from '../../store/user/UserAction';
import * as toDoListAction from '../../store/todolist/ToDoListAction'



const HomePage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users)
    useEffect(() => {
        dispatch(userAction.getUserAction());
        dispatch(toDoListAction.getDoListAction());
        dispatch(toDoListAction.getDoneListAction());
    }, []);
    return (
        <div>
            <Header users={users} />
            <ToDoList />
        </div>
    )
}
export default HomePage;