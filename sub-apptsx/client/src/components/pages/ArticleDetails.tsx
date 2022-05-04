import { Typography, Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import AccordionComp from "../Accordion/Accordion";
import { useEffect, useState } from "react";
import axios from "axios";
interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  category: string;
  access: string;
  bannerUrl: string;
  instructor: string;
}

const ArticleDetails = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { title } = useParams();
  console.log(articles);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      `http://localhost:8080/articles/course/${title}`
    );
    setArticles(response);
    console.log(response);
  };

  return (
    <div>
      {articles.length && (
        <div>
          <Typography
            sx={{
              position: "absolute",
              marginBottom: -10,
              marginLeft: 10,
              fontWeight: "bold",
            }}
            variant="h2"
            color="white"
          >
            {articles[0].instructor}
          </Typography>
          <img height="100%" width="100%" src={articles[0].bannerUrl} />
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

            <Typography sx={{ fontWeight: "Bold" }} variant="h6" color="white">
              {articles[0].title}
            </Typography>
            <Typography variant="body1" color="white">
              This should be the course content/description: It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Typography>
            <Typography variant="body1" color="white">
              {/* {articles[0].category} */}
            </Typography>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
