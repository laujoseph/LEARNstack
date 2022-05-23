import {
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

// define prop types
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

  const navigate = useNavigate();

  const [state, setState] = useContext(UserContext);

  const handleClick = async () => {
    let response;
    if (isSignupFlow) {
      const { data: signUpData } = await axios.post(
        `${process.env.BACKEND_URI}/auth/signup/`,
        {
          email,
          password,
        }
      );
      response = signUpData;
    } else {
      const { data: loginData } = await axios.post(
        `${process.env.BACKEND_URI}/auth/login/`,
        {
          email,
          password,
        }
      );
      response = loginData;
    }

    if (response.errors.length) {
      return setErrorMsg(response.errors[0].msg);
    }

    setState({
      data: {
        id: response.data.user.id,
        email: response.data.email,
        stripeCustomerId: response.data.user.stripeCustomerId,
        isAdmin: response.data.user.isAdmin,
      },
      loading: false,
      error: null,
    });
    // storing token to local storage
    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common[
      "authorization"
    ] = `Bearer ${response.data.token}`;
    navigate("/articles");
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
