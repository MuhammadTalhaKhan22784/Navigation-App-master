import "./user.css"
import DownloadImage from './assets/download.png';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Checkbox } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import "./popup.css"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 13, 3,13),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="exportBtn" onClick={handleOpen}><img src={DownloadImage} className="download-icon cursor"/>
</button>
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        
          <div className="main">
              
          <div className="exp-head">
              <text>Export</text>
              <div className="closeIcon">
                <CloseIcon/>
              </div>
              </div>
            <p>Choose an export format for report</p>
            
            <div class="ex-formats">
              <div>
               <Checkbox/> <text>Ecel (.xlx)</text> 
              </div>
              <div>
               <Checkbox/> <text>CSV (.csv)</text> 
              </div>
              <div>
               <Checkbox/> <text>XML (.xml)</text> 
              </div>
              <div>
               <Checkbox/> <text>PDF (.pdf)</text> 
              </div>
            </div>
          
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


















