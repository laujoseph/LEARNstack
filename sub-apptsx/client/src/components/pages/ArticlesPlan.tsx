import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
const ArticlesPlan = () => {
  // declaration of type = any
  const [prices, setPrices] = useState<any[]>([]);
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/subs/prices"
    );
    console.log(response.data);
    setPrices(response.data);
  };
  return (
    <Container>
      <Grid container rowSpacing={2} spacing={4}>
        {prices.map((price: any) => {
          return (
            <Grid sx={{ marginTop: 50 }} item xs={4}>
              <Card
                sx={{
                  maxWidth: 345,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="60%"
                    image="https://i.imgur.com/URkHoXq.png"
                    alt="picture of price"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {price.nickname}
                    </Typography>
                    ${price.unit_amount / 100}/month
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="medium" color="primary">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ArticlesPlan;
