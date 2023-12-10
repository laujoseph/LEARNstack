import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  Divider,
} from "@mui/material";

const ArticlesPlan = () => {
  // const [imageURL, setImageURL] = useState<any>("");
  // declaration of type = any
  const [prices, setPrices] = useState<any[]>([]);
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      `https://musterclassserver-production.up.railway.app/subs/prices`
    );
    console.log(response.data);
    setPrices(response.data);
  };

  const createSession = async (priceId: string) => {
    const { data: response } = await axios.post(
      `https://musterclass-server.herokuapp.com/subs/session`,
      {
        priceId,
      }
    );
    // this leads to the strpe checkout page
    window.location.href = response.url;
  };
  return (
    <Container>
      <Grid sx={{ marginTop: 20 }} container rowSpacing={2} spacing={4}>
        <Grid item xs={4}>
          <img
            style={{}}
            height="100%"
            width="95%"
            src="https://images.unsplash.com/photo-1554494583-c4e1649bfe71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmbG93ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Premium"
          />
        </Grid>
        <Grid item xs={4}>
          <img
            style={{}}
            height="100%"
            width="95%"
            src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Standard"
          />
        </Grid>
        <Grid item xs={4}>
          <img
            height="100%"
            width="95%"
            src="https://images.unsplash.com/photo-1530836176759-510f58baebf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Basic"
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} spacing={4}>
        {prices.map((price: any) => {
          return (
            <Grid sx={{ marginBottom: 30 }} item xs={4}>
              <Card
                sx={{
                  maxWidth: 345,
                }}
              >
                <CardActionArea sx={{ backgroundColor: "white" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight="bold"
                    >
                      {price.nickname}
                    </Typography>
                    <Typography>${price.unit_amount / 100}/month</Typography>
                  </CardContent>
                  <Divider variant="middle" />
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => createSession(price.id)}
                    size="medium"
                    color="primary"
                    sx={{ color: "#ef4562", fontWeight: "bold" }}
                  >
                    SELECT
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
