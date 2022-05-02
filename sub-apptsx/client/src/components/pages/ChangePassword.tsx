import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";

import {
  Stack,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

interface User {
  email: string;
  title: string;
  imageUrl: string;
  content: string;
  category: string;
  access: string;
}

const ChangePassword = () => {
  const [state, setState] = useContext(UserContext);
  const [user, setUser] = useState<User[]>([]);
  const [newPassword, setNewPassword] = useState<string>("");
  // "! is to tell ts that expression is not null or undefined"
  const userEmail = state.data?.email;

  const updatePassword = () => {
    axios.put<any>("http://localhost:8080/auth/changepass", {
      email: userEmail,
      newPassword: newPassword,
    });
    alert("Password changed successfully!");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const { data: response } = await axios.get("http://localhost:8080/auth/me");
    setUser(response);
  };
  return (
    <div>
      <Stack sx={{ margin: "auto", marginBottom: 20 }}>
        <Typography
          sx={{ margin: "auto", marginBottom: 2 }}
          color="common.white"
          variant="h2"
        >
          Enter New Password
        </Typography>
        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="New Password"
          variant="filled"
          sx={{
            backgroundColor: "white",
            margin: "auto",
            minWidth: 500,
            marginBottom: 2,
          }}
          type="password"
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        />
        <TextField
          id="outlined-textarea"
          label="Re-enter Password"
          placeholder="Re-enter Password"
          variant="filled"
          sx={{
            backgroundColor: "white",
            margin: "auto",
            minWidth: 500,
            marginBottom: 2,
          }}
          type="password"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        <Button onClick={updatePassword}>Submit</Button>
      </Stack>
    </div>
  );
};

export default ChangePassword;
