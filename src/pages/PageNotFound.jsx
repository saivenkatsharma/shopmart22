import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { Container, Typography, Button, Grid } from '@mui/material';

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" my={3} py={3}>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
          <Grid item xs={12} textAlign="center" bgcolor="background.paper" p={3} borderRadius={2} boxShadow={2}>
            <Typography variant="h4" gutterBottom>
              404: Page Not Found
            </Typography>
            <Link to="/">
              <Button variant="outlined" color="primary" startIcon={<i className="fa fa-arrow-left" />}>
                Go Back to Home
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PageNotFound;
