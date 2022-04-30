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
    <div>
      {articles.length ? (
        <div>
          {articles.map((article) => (
            <Card
              sx={{
                maxWidth: 345,
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
          ))}
        </div>
      ) : (
        <div>You don't have a plan</div>
      )}
    </div>
  );
};

export default Articles;
