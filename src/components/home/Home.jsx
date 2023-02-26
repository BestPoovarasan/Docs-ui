import React from "react";
import { Box,Typography, CardMedia, Grid, styled, Container } from "@mui/material";


const DIV = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const CardImg = styled(CardMedia)({
  height:"500px",
});

const Home = () => {
  return (
    <Container>
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <CardImg
          component="img"
          image="./word.jpg"
          ></CardImg>
      </Grid>
      <DIV item xs={8}>
        <Typography variant="h5" sx={{ padding: 1 }}>Docs is an online document creation platform.</Typography>
        <Typography sx={{ padding: 1 }}>Create beautiful documents anywhere, anytime....<span>📝</span></Typography>
      </DIV>
    </Grid>
    </Container>
  );
};

export default Home;
