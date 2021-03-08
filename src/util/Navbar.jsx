import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" class="navbarStyle" >
        <Toolbar>
        <img src={logo} width="50" style={{marginRight:"5px"}} />
          <Typography variant="h6">
            Project Journey Graph Board
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}