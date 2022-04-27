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
import axios from "axios";

// define props

interface ModalProps {
  text: string;
  para?: string;
  isSignupFlow: boolean;
}

const ModalComponent = ({ text, para, isSignupFlow }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);
  const handleClick = async () => {
    let data;
    if (isSignupFlow) {
      const { data: signUpData } = await axios.post(
        "http://localhost:8080/auth/signup/",
        {
          email,
          password,
        }
      );
      data = signUpData;
    } else {
      const { data: loginData } = await axios.post(
        "http://localhost:8080/auth/login/",
        {
          email,
          password,
        }
      );
      data = loginData;
    }

    if (data.errors.length) {
      setErrorMsg(data.errors[0].msg);
    }
    // storing token to local storage
    localStorage.setItem("token", data.data.token);
  };
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
        color="error"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {/* if error msg is truthy */}
          {errorMsg && (
            <Typography sx={{ color: "red", marginRight: 5, marginBottom: 1 }}>
              {errorMsg}
            </Typography>
          )}
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="outlined" onClick={handleClick}>
              {text}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
