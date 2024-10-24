import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Button, Badge, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <AppBar position="sticky" color="default" elevation={0}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Branding or Logo */}
                <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    React Ecommerce
                </Typography>

                {/* Links */}
                <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
                    <Button component={NavLink} to="/" color="inherit">Home</Button>
                    <Button component={NavLink} to="/product" color="inherit">Products</Button>
                    <Button component={NavLink} to="/about" color="inherit">About</Button>
                    <Button component={NavLink} to="/contact" color="inherit">Contact</Button>
                </Box>

                {/* Action Buttons */}
                <Box>
                    <Button component={NavLink} to="/login" color="inherit" startIcon={<LoginIcon />}>
                        Login
                    </Button>
                    <Button component={NavLink} to="/register" color="inherit" startIcon={<PersonAddIcon />}>
                        Register
                    </Button>
                    <IconButton component={NavLink} to="/cart" color="inherit">
                        <Badge badgeContent={state.length} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
