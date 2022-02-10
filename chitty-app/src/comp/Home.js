import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
import Main from './Main';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />

      <Main />
      <SideMenu />
    </div>
  );
}

export default Home;