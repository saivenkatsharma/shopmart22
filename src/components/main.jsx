import React from "react";
import { Card, CardMedia, CardContent, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="hero" style={{ paddingBottom: "20px" }}>
        <Card style={{ position: 'relative', border: 'none' }}>
          <CardMedia
            component="img"
            image="./assets/shop.jpg"
            alt="Shop"
            height="500"
            style={{ opacity: 0.7 }}
          />
          <CardContent
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Container>
              <Typography
                variant="h2"
                style={{ color: '#fff', fontWeight: 'lighter' }}
                align="center"
              >
                BEST DISCOUNTS
              </Typography>
            </Container>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
