import * as React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { UserContext } from "../../context";
import CatButton from "./CategoriesButton";
import ProfileButton from "./Profile";
import AdminButton from "./Admin";

const Navbar = () => {
  const [state, setState] = useContext(UserContext);

  console.log(state, "nav");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "black" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <img
            style={{ height: "50px", width: "50px" }}
            src="https://i.imgur.com/JTagWOF.png"
            alt="icon"
          />
          <Button href="/" color="inherit" sx={{ marginRight: "auto" }}>
            MusterClass
          </Button>
          <CatButton />
          <Button href="/article-plans" color="inherit">
            View Plans
          </Button>

          <Button href="/" color="inherit">
            Home
          </Button>
          <AdminButton />
          <ProfileButton />

          {/* {state.data && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
