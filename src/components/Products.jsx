import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true); 

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        if (componentMounted.current) {
          setData(products);
          setFilter(products);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        if (componentMounted.current) {
          setLoading(false);
        }
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProducts();

    // Cleanup function to set componentMounted to false when the component unmounts
    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      <Grid container spacing={2}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton height={400} />
          </Grid>
        ))}
      </Grid>
    </>
  );

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <Button variant="outlined" size="small" onClick={() => setFilter(data)} className="m-2">
          All
        </Button>
        <Button variant="outlined" size="small" onClick={() => filterProduct("men's clothing")} className="m-2">
          Men's Clothing
        </Button>
        <Button variant="outlined" size="small" onClick={() => filterProduct("women's clothing")} className="m-2">
          Women's Clothing
        </Button>
        <Button variant="outlined" size="small" onClick={() => filterProduct("jewelery")} className="m-2">
          Jewelry
        </Button>
        <Button variant="outlined" size="small" onClick={() => filterProduct("electronics")} className="m-2">
          Electronics
        </Button>
      </div>

      <Grid container spacing={2} justifyContent="center">
        {filter.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.title}
                style={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title?.substring(0, 12)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description?.substring(0, 90)}...
                </Typography>
                <Typography variant="h6" component="div">
                  $ {product.price}
                </Typography>
              </CardContent>
              <div className="card-body">
                <Button variant="contained" color="primary" size="small" component={Link} to={`/product/${product.id}`} className="m-1">
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
