import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import "./user.css"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper(props) {
  const classes = useStyles();
  
  return (
    <div>
      <button aria-describedby={props.divId} type="button" onClick={props.handleClick}>
        Toggle Popper
      </button>

    </div>
  );
}
