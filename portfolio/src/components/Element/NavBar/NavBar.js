import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar';
import NavBarButton from '../Button/NavBarButton'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    bar: {
        // background: 'linear-gradient(45deg, #3F51B5 30%, #2196F3 90%)',
        background: 'white',
    },
});

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar postion='static' className={classes.bar}>
                <Toolbar>
                    <NavBarButton className={classes.navButton}>
                        NavBarButton
                    </NavBarButton>
                    <NavBarButton className={classes.navButton}>
                        CV
                    </NavBarButton>
                    <NavBarButton className={classes.navButton}>
                        HomeHolder
                    </NavBarButton>
                    <NavBarButton className={classes.navButton}>
                        HomeHolder
                    </NavBarButton>
                    <NavBarButton className={classes.navButton}>
                        HomeHolder
                    </NavBarButton>
                </Toolbar>        
            </AppBar>
        </div>
    )
}
