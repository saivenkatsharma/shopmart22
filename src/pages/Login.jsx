import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const Login = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" my={3} py={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <hr />
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <form>
              <TextField
                fullWidth
                label="Email address"
                type="email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                required
              />
              <div className="my-3">
                <Typography variant="body1">
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </Typography>
              </div>
              <div className="text-center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled
                >
                  Login
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
