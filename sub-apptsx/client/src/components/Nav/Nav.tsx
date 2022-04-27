import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LEARNstack
          </Typography>
          <Button color="inherit">View Plans</Button>
          <Button color="inherit">About Us</Button>
          <Button href="/" color="inherit">
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
