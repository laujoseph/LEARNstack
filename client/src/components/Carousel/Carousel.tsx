import { motion } from "framer-motion";

import { Typography, Container, Button } from "@mui/material";

const trendingCourses: { imgUrl: string; instructor: string }[] = [
  { imgUrl: "https://i.imgur.com/y71LstY.jpg", instructor: "Gordan Ramsay" },
  { imgUrl: "https://i.imgur.com/CGeFsxh.jpg", instructor: "Alicia Keys" },
  { imgUrl: "https://i.imgur.com/ztwwQEr.jpg", instructor: "Questlove" },
  { imgUrl: "https://i.imgur.com/ZrRI03m.jpg", instructor: "Stephen Curry" },
  { imgUrl: "https://i.imgur.com/XsRaGq1.jpg", instructor: "Tony Hawk" },
  { imgUrl: "https://i.imgur.com/touNplE.jpg", instructor: "Lewis Hamilton" },
  { imgUrl: "https://i.imgur.com/4Nm5HpE.jpg", instructor: "Serena Williams" },
  { imgUrl: "https://i.imgur.com/JSomdbR.jpg", instructor: "Wayne Gretzky" },
];
const CarouselSlide = () => {
  return (
    <div>
      <Container sx={{ marginBottom: 7 }}>
        <Typography
          sx={{ marginTop: 7, fontStyle: "italic" }}
          variant="h6"
          color="common.white"
        >
          Sign up now and view our courses!
        </Typography>

        <Typography
          sx={{ marginTop: 15, marginBottom: 3, fontWeight: "bold" }}
          variant="h5"
          color="common.white"
        >
          Trending Instructors
        </Typography>
        <motion.h1
          style={{
            margin: "auto",
            color: "white",
            overflow: "hidden",
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1300 }}
            style={{
              display: "flex",
              backgroundColor: "black",
              cursor: "grab",
              margin: "auto",
            }}
          >
            {trendingCourses.map((image, id) => {
              return (
                <motion.div>
                  <img
                    style={{
                      borderRadius: 20,
                      minWidth: "15rem",
                      minHeight: "30rem",
                      maxWidth: "30rem",
                      maxHeight: "30rem",
                      marginRight: "2rem",
                      pointerEvents: "none",
                    }}
                    src={image.imgUrl}
                    alt=""
                    key={id}
                  />
                  <Typography variant="h4" color="common.white">
                    {image.instructor}
                  </Typography>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.h1>
      </Container>
      <a
        style={{ textDecoration: "none" }}
        href="https://musterclass-client.vercel.app/articles"
      >
        <Button
          sx={{
            display: "flex",
            margin: "auto",
            backgroundColor: "#424242",
            color: "white",
            marginTop: "20",
          }}
          variant="contained"
        >
          Discover Classes
        </Button>
      </a>
    </div>
  );
};

export default CarouselSlide;
