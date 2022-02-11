import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },

  // pokedexContainer: {
  //   paddingTop: "20px",
  //   paddingLeft: "50px",
  //   paddingRight: "50px"
  // },

  // cardPicture:{
  //   margin: "right"
  // },

  // cardName:{
  //   margin: "left"
  // },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>WELCOME TO THE POKEDEX</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          PLEASE SEARCH A POKEMON TO LEARN MORE ABOUT IT
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;