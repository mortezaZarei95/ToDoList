import List from "../list/List";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";




const useStyles = makeStyles((theme) => ({
    listWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        minHeight: 700,

    },
}));


const ToDoList = () => {
    const classes = useStyles();

    return (
        <div className={classes.listWrapper}>
            <List type='do' />
            <List type='done' />
        </div>
    )
}
export default ToDoList;