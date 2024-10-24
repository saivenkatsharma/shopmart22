import React from "react";
import { Footer, Navbar } from "../components";
import { Container, Typography, Grid, TextField, Button, Box } from "@mui/material";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container className="my-3 py-3">
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <hr />
        <Grid container spacing={2} justifyContent="center" className="my-4">
          <Grid item md={6} sm={8}>
            <form>
              <Box mb={3}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  placeholder="Enter your name"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  placeholder="name@example.com"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  placeholder="Enter your message"
                />
              </Box>
              <div className="text-center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled
                >
                  Send
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

export default ContactPage;
