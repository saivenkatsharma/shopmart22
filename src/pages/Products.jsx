import React from "react";
import { Footer, Navbar } from "../components";
import { Container } from "@mui/material";
import Product from "../components/Products"; 

const Products = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-center my-4">Products</h1>
        <Product />
      </Container>
      <Footer />
    </>
  );
};

export default Products;
