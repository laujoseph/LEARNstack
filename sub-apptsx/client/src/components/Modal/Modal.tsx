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
  Stack,
} from "@mui/material";
import { useState } from "react";

// define props

interface ModalProps {
  text: string;
  para?: string;
}
const ModalComponent = ({ text, para }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  return (
    <div>
      <Button
        style={{ display: "inline-flex" }}
        sx={{
          height: 70,
          width: 120,
          marginRight: "1rem",
          padding: "0.75rem 4rem",
        }}
        variant="contained"
        onClick={handleShow}
      >
        {text}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{text}</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <DialogContentText>{para}</DialogContentText>
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
          <Stack direction="row" spacing={2}>
            <Button onClick={handleClose}>Cancel</Button>

            <Button onClick={handleClose}>{text}</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
