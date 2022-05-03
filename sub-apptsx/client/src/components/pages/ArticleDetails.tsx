import {
  Typography,
  Container,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

import ReactPlayer from "react-player";
import AccordionComp from "../Accordion/Accordion";
const ArticleDetails = () => {
  return (
    <div>
      <Typography
        sx={{
          position: "absolute",
          marginBottom: -10,
          marginLeft: 5,
          fontWeight: "bold",
        }}
        variant="h2"
        color="white"
      >
        Instructor
      </Typography>
      <img src="https://i.ibb.co/VVXJ4Gz/Gordon-Ramsay-banner.webp" />

      <Container sx={{ margin: "auto" }}>
        <Typography
          sx={{ marginTop: 5 }}
          fontWeight="bold"
          color="white"
          variant="h4"
        >
          About this class
        </Typography>

        <Box sx={{ display: "flex" }}>
          <ReactPlayer
            height="50vh"
            width="90vh"
            controls
            playing
            muted
            url="https://www.youtube.com/watch?v=RPcv3V4jIE8"
            style={{}}
          />
          <Box
            style={{
              backgroundColor: "black",
              height: 410,
              width: 500,
              marginLeft: 10,
              marginTop: 37,
              overflowY: "scroll",
            }}
          >
            <AccordionComp />
          </Box>
        </Box>

        <Typography variant="h6" color="white">
          This should be the course title:
        </Typography>
        <Typography variant="body1" color="white">
          This should be the course content/description: It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography variant="body1" color="white">
          Category: Food
        </Typography>
      </Container>
    </div>
  );
};

export default ArticleDetails;
