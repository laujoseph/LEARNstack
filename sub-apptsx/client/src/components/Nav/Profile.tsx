import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {state.data && (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "white" }}
          >
            Profile
            <ExpandMoreIcon />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              href="/changepassword"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem sx={{ width: 120 }} onClick={handleClose}>
                Reset P/W
              </MenuItem>
            </Link>
            <Link
              href="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem sx={{ width: 120 }} onClick={handleClose}>
                My Account
              </MenuItem>
            </Link>
            <Button
              sx={{ marginLeft: 1, color: "#ef4562" }}
              onClick={handleLogout}
              color="inherit"
            >
              Logout
            </Button>
          </Menu>
        </div>
      )}
    </div>
  );
}
