import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        color: 'white',
        cursor: 'pointer'
    }
}));

export default function AppNavigator() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='fixed' variant='h6'>
            <Toolbar>
                <Link className={classes.link} to='/'>
                    <Typography className={classes.title}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
