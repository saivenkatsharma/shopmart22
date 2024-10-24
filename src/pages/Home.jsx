import React from "react";
import { Navbar, Main, Product, Footer } from "../components";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </Container>
  );
};

export default Home;
