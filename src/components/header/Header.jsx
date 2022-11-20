import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as userAction from '../../store/user/UserAction';
import { useDispatch } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(1),
    },
    formControl: {
        display: 'block',
        margin: theme.spacing(1),
        marginright: theme.spacing(3),
        minWidth: 200,
        direction: 'rtl',
    },
    formInput: {
        display: 'block',
        minWidth: 200,
        direction: 'rtl',
        textAlign: 'center'
    },
    nameUser: {
        display: 'block',
        margin: theme.spacing(1),
        marginleft: theme.spacing(3),
        minWidth: 200,
        maxWidth: 400,
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F1'
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setname] = React.useState('All User');
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setname(event.target.value);
        dispatch(userAction.setUserActiveAction(event.target.value));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.nameUser}>userId : {name}</div>
            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-controlled-open-select-label">name</InputLabel> */}
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    className={classes.formInput}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={name}
                    onChange={handleChange}
                >
                    <MenuItem value="All User">
                        <em>All User</em>
                    </MenuItem>
                    {props.users.map(user =>
                        <MenuItem value={user.id}>{user.name}</MenuItem>
                    )}
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    )
}

export default Header;