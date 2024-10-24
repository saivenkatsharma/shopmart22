import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText } from "@mui/material";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <Container>
      <Typography variant="h4" className="py-5 text-center">
        Your Cart is Empty
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary">
          <i className="fa fa-arrow-left"></i> Continue Shopping
        </Button>
      </Link>
    </Container>
  );

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    const shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <Container>
        <Typography variant="h5" className="my-4">
          Item List
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Card>
              <CardContent>
                {state.map((item) => (
                  <div key={item.id}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item lg={3} md={12}>
                        <img src={item.image} alt={item.title} width={100} height={75} />
                      </Grid>
                      <Grid item lg={5} md={6}>
                        <Typography variant="body1">
                          <strong>{item.title}</strong>
                        </Typography>
                      </Grid>
                      <Grid item lg={4} md={6}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Button onClick={() => removeItem(item)} variant="outlined" color="primary">
                            <i className="fas fa-minus"></i>
                          </Button>
                          <Typography className="mx-2">{item.qty}</Typography>
                          <Button onClick={() => addItem(item)} variant="outlined" color="primary">
                            <i className="fas fa-plus"></i>
                          </Button>
                        </div>
                        <Typography variant="body2" align="right">
                          <strong>
                            <span className="text-muted">{item.qty}</span> x ${item.price}
                          </strong>
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr />
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Order Summary</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary={`Products (${totalItems})`} />
                    <span>${Math.round(subtotal)}</span>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Shipping" />
                    <span>${shipping}</span>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={<strong>Total amount</strong>} />
                    <span>
                      <strong>${Math.round(subtotal + shipping)}</strong>
                    </span>
                  </ListItem>
                </List>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Go to checkout
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };

  return (
    <>
      <Navbar />
      <Container my={3}>
        <Typography variant="h3" align="center">
          Cart
        </Typography>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
