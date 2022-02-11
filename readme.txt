//Installed Packages
  // npx create-react-app chitty-app
  //
  // npm install @mui/material @emotion/react @emotion/styled
  // npm install axios
  // npm install react-router-dom@6
  // npm install @material-ui/core --save
  // npm install react-switch
  //

//Main Screen
    //Nav Bar - https://mui.com/components/app-bar/#app-bar-with-search-field
    //Welcome screen - https://mui.com/components/grid/





//Pokemon Window


$ npm install @material-ui/core --save


// Top Menu
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Face';
import { MenuItem } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <img src="/img/heThicc.jpg" alt='The Thicc One'></img>

      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
        </IconButton>

        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Home
          </Typography>
        </MenuItem>

        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            About
          </Typography>
        </MenuItem>

      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;
