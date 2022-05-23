import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Grid,
  Container,
  Button,
  Stack,
  Box,
} from "@mui/material";
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

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);
  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      `${process.env.BACKEND_URI}/articles`
    );
    setArticles(response);
  };

  return (
    <Container sx={{ backgroundColor: "black" }}>
      {/* if user has plan, show the articles  */}
      {articles.length ? (
        <Grid container rowSpacing={2} spacing={4}>
          {articles.map((article) => (
            <Grid item xs={4}>
              <Card
                sx={{
                  maxWidth: 375,
                  borderRadius: 8,
                  minHeight: 900,
                  maxHeight: 900,
                  backgroundColor: "black",
                }}
                key={article.id}
              >
                <CardActionArea
                  sx={{ backgroundColor: "black", cursor: "pointer" }}
                  href={`/articles/course/${article.title}`}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={article.imageUrl}
                    alt="Instructor image"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        minHeight: "1000",
                        maxHeight: "1000",
                        fontWeight: "bold",
                      }}
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="white"
                    >
                      {article.title}
                    </Typography>
                    <Divider />
                    <Typography
                      sx={{ marginTop: 1 }}
                      gutterBottom
                      component="div"
                      variant="body2"
                      color="white"
                    >
                      {article.content}
                    </Typography>
                    <Typography
                      display="flex"
                      alignSelf="flex-end"
                      gutterBottom
                      component="div"
                      color="#ef4562"
                    >
                      {article.access}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ backgroundColor: "black" }}></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack>
          <Box sx={{ margin: "auto", marginTop: 30 }}>
            <Typography color="common.white" variant="h1" sx={{}}>
              You don't have a plan
            </Typography>
            <Button
              style={{ color: "#ef4562" }}
              sx={{ margin: "auto", fontSize: 20, marginBottom: 20 }}
              href="/article-plans"
            >
              Buy a plan
            </Button>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default Articles;
