import * as React from "react";
import { Typography, Box, Divider } from "@mui/material";
import ModalComponent from "../Modal/Modal";

const Hero = () => {
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597955942443-5a61862792aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          padding: "5rem 0",
          width: "100%",
        }}
      >
        <Box
          style={{
            height: "600px",
            width: "600px",
            marginLeft: 200,
            marginTop: 50,
            background: `rgba(60, 60, 60, 0.7)`,
            padding: "3rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold" }}
            style={{ color: "white" }}
          >
            Welcome to Subscrybed!
          </Typography>

          <br />
          <Typography variant="h3" style={{ color: "white" }}>
            {" "}
            Feed your mind with the best
          </Typography>
          <Divider style={{ color: "black" }} sx={{ borderBottomWidth: 5 }} />
          <br />
          <br />
          <Typography variant="h4" style={{ color: "white" }}>
            Grow, learn, and become more successful by reading some of the top
            articles by highly reputable individuals
          </Typography>
          <ModalComponent />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
