import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { createStyles } from '@mui/styles';

// withStyles & makeStyles

const style = createStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
});

const SideMenu = (props: any) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}

export default withStyles(style)(SideMenu);
