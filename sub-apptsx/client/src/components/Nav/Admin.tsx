import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function AdminButton() {
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
    alert("You are logged out.");
    navigate("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // the ! means that the expression is not null/undefined
  //   console.log(state.data!, "admin");
  return (
    <div>
      {state.data?.isAdmin && (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "white" }}
          >
            Admin
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
              href="/articles/create"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem sx={{ width: 120 }} onClick={handleClose}>
                Create
              </MenuItem>
            </Link>
            <Link
              href="/articles/update"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem sx={{ width: 120 }} onClick={handleClose}>
                Update
              </MenuItem>
            </Link>
            <Link
              href="/articles/delete"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem
                sx={{ width: 120, color: "#ef4562" }}
                onClick={handleClose}
              >
                Delete
              </MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </div>
  );
}
