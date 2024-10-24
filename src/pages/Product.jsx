import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);

        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const data2 = await response2.json();
        setSimilarProducts(data2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Skeleton height={400} width={400} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton height={30} width={250} />
        <Skeleton height={90} />
        <Skeleton height={40} width={70} />
        <Skeleton height={50} width={110} />
        <Skeleton height={120} />
        <Skeleton height={40} width={110} inline={true} />
        <Skeleton className="mx-3" height={40} width={110} />
      </Grid>
    </Grid>
  );

  const ShowProduct = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          style={{ height: "400px", objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" color="textSecondary">
          {product.category}
        </Typography>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="body1">
          {product.rating && product.rating.rate} <i className="fa fa-star" />
        </Typography>
        <Typography variant="h5" my={2}>
          ${product.price}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => addProduct(product)}
          style={{ marginRight: "8px" }}
        >
          Add to Cart
        </Button>
        <Link to="/cart">
          <Button variant="contained" color="primary">
            Go to Cart
          </Button>
        </Link>
      </Grid>
    </Grid>
  );

  const Loading2 = () => (
    <Grid container spacing={2} my={4}>
      {Array(4)
        .fill()
        .map((_, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Skeleton height={400} />
          </Grid>
        ))}
    </Grid>
  );

  const ShowSimilarProduct = () => (
    <Grid container spacing={2}>
      {similarProducts.map((item) => (
        <Grid item xs={6} md={3} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              height={300}
            />
            <CardContent>
              <Typography variant="h6">
                {item.title.substring(0, 15)}...
              </Typography>
              <Button
                component={Link}
                to={`/product/${item.id}`}
                variant="outlined"
                color="primary"
                style={{ marginRight: "8px" }}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <Navbar />
      <Container>
        {loading ? <Loading /> : <ShowProduct />}
        <div className="my-5 py-5">
          <Typography variant="h4" align="center">
            You may also Like
          </Typography>
          <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </Marquee>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
