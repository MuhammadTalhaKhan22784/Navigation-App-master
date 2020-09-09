import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./user.css"
import DownloadImage from './assets/download.png';



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} className="exportBtn" onClick={handleClick}><img src={DownloadImage} className="download-icon cursor"/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        <div className="exportDetail">
            <div className="ex-text-1">
            <text>Export</text>
            </div>
            <hr/>
            <div className="ex-text-2">
        <text>Choose an export format for report</text>
        </div>
        <div class="ex-val">
        
            <span>
            Excel (.xlx)
            </span>
            <span>CSV (.csv)</span>
            <span>XML (.xml)</span>
            <span>PDF (.pdf)</span>
        </div>
        </div>
        </Typography>
      </Popover>
    </div>
  );
}
