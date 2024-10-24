import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => (
    <Container>
      <Typography variant="h4" className="py-5 text-center">
        No item in Cart
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" color="primary">
          <i className="fa fa-arrow-left"></i> Continue Shopping
        </Button>
      </Link>
    </Container>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    const shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item md={5} order={{ xs: 2, md: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" className="mb-3">
                  Order Summary
                </Typography>
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
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={7} order={{ xs: 1, md: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h4" className="mb-3">
                  Billing Address
                </Typography>
                <form className="needs-validation" noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        label="First Name"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address"
                        label="Address"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        label="Address 2 (Optional)"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth variant="outlined" required>
                        <InputLabel id="country-label">Country</InputLabel>
                        <Select labelId="country-label" id="country">
                          <MenuItem value=""><em>Choose...</em></MenuItem>
                          <MenuItem value="India">India</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth variant="outlined" required>
                        <InputLabel id="state-label">State</InputLabel>
                        <Select labelId="state-label" id="state">
                          <MenuItem value=""><em>Choose...</em></MenuItem>
                          <MenuItem value="Andhra Pradesh & Telangana">Andhra Pradesh & Telangana</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        label="Zip"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" className="mb-3">Payment</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cc-name"
                        label="Name on Card"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cc-number"
                        label="Credit Card Number"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cc-expiration"
                        label="Expiration"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="cc-cvv"
                        label="CVV"
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="my-4"
                    type="submit"
                    disabled
                  >
                    Continue to Checkout
                  </Button>
                </form>
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
      <Container className="my-3 py-3">
        <Typography variant="h3" align="center">
          Checkout
        </Typography>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
