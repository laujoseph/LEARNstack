import {
  Grid,
  Typography,
  Box,
  Button,
  Modal,
  TextField,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useState } from "react";

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  return (
    <div>
      <Button variant="outlined" onClick={handleShow}>
        Signup
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Signup</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <DialogContentText>
            Kindly enter a username and password to get started!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Signup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
