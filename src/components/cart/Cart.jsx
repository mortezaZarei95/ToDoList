import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    cartWrapper: {
        boxShadow: '0 0 5px 3px #00000022',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: theme.spacing(2),
        backgroundColor: '#FAFAFA',
        minWidth: 350,
        maxWidth: 350,
        minHeight: 100,
        maxHeight: 180,
        textAlign: 'center',
    },
    userNameWrapper: {
        display: 'inline',
        marginLeft: '5px'
    }
}));


const Cart = (props) => {
    const userName = useSelector(state => state.userReducer.users[props.userId - 1].name);
    const classes = useStyles();
    return (
        <div className={classes.cartWrapper} draggable onDragEnd={props.onDragEnd} onDragStart={props.onDragStart} >
            <p>
                userName :
                <h3 className={classes.userNameWrapper}>
                    {userName}
                </h3>
            </p>
            <p>
                title :
                <h3 className={classes.userNameWrapper}>
                    {props.title}
                </h3>
            </p>
            <p>
                id :
                <h4 className={classes.userNameWrapper}>
                    {props.id}
                </h4>
            </p>
        </div>
    )
}

export default Cart;