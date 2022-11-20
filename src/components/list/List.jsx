import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as toDoListAction from '../../store/todolist/ToDoListAction';
import Cart from '../cart/Cart';

const useStyles = makeStyles((theme) => ({
    listWrapper: {
        display: 'inline-block',
        padding: theme.spacing(2),
        backgroundColor: '#F1F1F1',
        minWidth: 450,
        width: 450,
        maxWidth: 450,
        textAlign: 'center',
    },
    typeWrapper: {
        minWidth: 350,
        width: 350,
        maxWidth: 350,
        height: 30,
        boxShadow: '0 0 5px 3px #00000055',
        margin: '0 auto 10px',
        lineHeight: '30px',
        backgroundColor: '#888',
        color: '#FAFAFA',
        fontWeight: 'bold'

    }
}));


const List = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const type = props.type;
    const listWrapperRef = useRef(null)
    let currentLocation = null;
    const userActive = useSelector(state => state.userReducer.userActive);
    const list = useSelector(state => state.toDoListReducer[type]);
    const handleDragStart = (e, completed) => {
        if (completed === false) {
            currentLocation = e.clientX - listWrapperRef.current.offsetLeft;
        }
        else {
            currentLocation = listWrapperRef.current.offsetLeft + listWrapperRef.current.clientWidth - e.clientX;
        }
    }
    const handleDragEnd = (e, item) => {
        if (item.completed === true && e.clientX + currentLocation < window.innerWidth / 2) {
            let newList = list.filter(i => i.id != item.id);
            item = { ...item, completed: false };
            dispatch(toDoListAction.setDoneListAction(newList));
            dispatch(toDoListAction.addDoAction(item));
            console.log('first if');

        }
        else if (item.completed === false && e.clientX - currentLocation > window.innerWidth / 2) {
            let newList = list.filter(i => i.id != item.id);
            item = { ...item, completed: true };
            dispatch(toDoListAction.setDoListAction(newList));
            dispatch(toDoListAction.addDoneAction(item));
            console.log('second if');
        }
    }
    const showCart = () => {
        if (userActive === 'All User') {
            return list.map(item => {
                return <Cart id={item.id} title={item.title} userId={item.userId} key={item.id} onDragEnd={(e) => { handleDragEnd(e, item) }} onDragStart={e => { handleDragStart(e, item.completed) }} />
            })
        }
        else {
            return list.filter(item => item.userId === userActive).map(item => {
                return <Cart id={item.id} title={item.title} userId={item.userId} key={item.id} onDragEnd={(e) => { handleDragEnd(e, item) }} onDragStart={(e) => { handleDragStart(e, item.completed) }} />
            });
        }
    }
    return (
        <div className={classes.listWrapper}>
            <div className={classes.typeWrapper} ref={listWrapperRef}>
                {props.type}
            </div>
            {/* { list.map(item => {
                return <Cart title={item.title} userId={item.userId} key={item.id} />
            })} */
                showCart()
            }
        </div>
    )
}

export default List;