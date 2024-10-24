import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const Register = () => {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <Box sx={{ mt: 8, mb: 2 }}>
          <Typography variant="h4" align="center">
            Register
          </Typography>
          <hr />
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  placeholder="Enter Your Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  placeholder="name@example.com"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
