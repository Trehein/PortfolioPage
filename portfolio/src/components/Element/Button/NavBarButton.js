import React from 'react'
import Button from '@material-ui/core/Button'
import {  withStyles, makeStyles } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'


const useStyles = makeStyles({
    root: {
        padding: '20px',
        margin: '10px 10px',
    },
});

const StyledButton = withStyles(theme => ({
    root: {
        // color: theme.palette.getContrastText(indigo[500]),
        // boxShadow: theme.shadows[4],
        // background: 'linear-gradient(45deg, #3F51B5 30%, #2196F3 90%)'
        width: '20%',
        '&:hover': {
            color: theme.palette.getContrastText(indigo[500]),
            background: 'linear-gradient(45deg, #283593 30%, #0277BD 90%)',
            boxShadow: theme.shadows[8],
        },
    },
}))(Button);

export default function NavBarButton({children}) {
    const classes = useStyles();

    return (
        <StyledButton className={classes.root}>
            {children}
        </StyledButton>
    )
}