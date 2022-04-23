import * as React from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <div>
      <Typography
        variant="h2"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "60vh",
          padding: "5rem 0",
          width: "100%",
        }}
      >
        Subscrybed
      </Typography>
    </div>
  );
};

export default Hero;
