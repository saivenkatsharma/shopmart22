import React from 'react';
import { Footer, Navbar } from "../components";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 3, py: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <hr />
        <Typography variant="body1" align="center" paragraph>
          Welcome to our store, your number one source for all things fashion and electronics.
          We're dedicated to giving you the very best of our products, with a focus on dependability, 
          customer service, and uniqueness.
        </Typography>
        
        <Typography variant="body1" align="center" paragraph>
          Founded with a passion for providing high-quality goods, we have come a long way from our beginnings. 
          Our goal is to offer innovative products that meet the needs of our customers. We now serve customers 
          worldwide and are thrilled to be able to share our passion through this platform.
        </Typography>

        <Typography variant="body1" align="center" paragraph>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions 
          or comments, please don't hesitate to contact us.
        </Typography>

        <Typography variant="h5" align="center" sx={{ py: 4 }}>
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={3} sm={6} xs={12} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {product.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};


const products = [
  {
    id: 1,
    title: "Men's Clothing",
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Women's Clothing",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Jewelery",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Electronics",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default AboutPage;
