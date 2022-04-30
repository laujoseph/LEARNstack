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
} from "@mui/material";
interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  category: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);
  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/articles"
    );
    setArticles(response);
  };

  return (
    <Container>
      {articles.length ? (
        <Grid container rowSpacing={2} spacing={4}>
          {articles.map((article) => (
            <Grid sx={{}} item xs={4}>
              <Card
                sx={{
                  maxWidth: 375,
                  borderRadius: 8,
                }}
                key={article.id}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="60%"
                    image={article.imageUrl}
                    alt="picture of price"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="h6" component="div">
                      {article.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>You don't have a plan</div>
      )}
    </Container>
  );
};

export default Articles;
