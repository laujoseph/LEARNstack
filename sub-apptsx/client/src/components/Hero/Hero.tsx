import * as React from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import ModalComponent from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";

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
            height: "500px",
            width: "500px",
            marginLeft: 200,
            marginTop: 25,
            background: `rgba(60, 60, 60, 0.7)`,
            padding: "3rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            style={{ color: "white" }}
          >
            Welcome to MusterClass!
          </Typography>

          <br />
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            style={{ color: "white" }}
          >
            {" "}
            THEY CHANGED
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            style={{ color: "white" }}
          >
            {" "}
            THE WORLD.
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            style={{ color: "#ef4562" }}
          >
            {" "}
            NOW YOU.
          </Typography>
          <Divider style={{ color: "black" }} sx={{ borderBottomWidth: 3 }} />
          <br />

          <Typography
            variant="h4"
            style={{ color: "white" }}
            sx={{ marginBottom: 3 }}
          >
            Grow, learn, and become more successful by learning from highly
            reputable individuals
          </Typography>
          <Grid container>
            <ModalComponent
              text="Signup"
              para="Kindly enter your email and password to get started!"
              isSignupFlow={true}
            />

            <ModalComponent text="Login" isSignupFlow={false} />
          </Grid>
        </Box>
        {/* to add a youtube vid for intro maybe */}
        {/* <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            // allowfullscreen
            title="video"
          />{" "}
        </Box> */}
      </Box>
      <Carousel />
    </div>
  );
};

export default Hero;
