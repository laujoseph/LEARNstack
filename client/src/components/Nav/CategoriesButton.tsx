import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";

export default function CatButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        Categories
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
          href="/articles/Food"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem sx={{ width: 120 }} onClick={handleClose}>
            Food
          </MenuItem>
        </Link>
        <Link
          href="/articles/Music"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Music</MenuItem>
        </Link>
        <Link
          href="/articles/Sports"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Sports</MenuItem>
        </Link>
        <Link
          href="/articles/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>All</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
