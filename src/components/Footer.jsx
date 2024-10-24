import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#f1f1f1", padding: "20px", marginTop: "auto" }}>
        <Container>
          <Grid container justifyContent="center" alignItems="center" className="pb-5">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" align="center">
                &copy; 2024 Your Website. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
