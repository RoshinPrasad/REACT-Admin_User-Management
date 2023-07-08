import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../Actions/AuthUser';
import backgroundImage from '../wp8113599.jpg';

const UserHomePage = ({ details }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('authorization.user');
    dispatch(clearUser());
    navigate('/login');
  };

  return (
    <div style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',backgroundPosition: 'center', height: '91vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
            Welcome to {details.name}'s Homepage
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom style={{ color: 'white', fontWeight: 'bold' }}>
            {details.email}
          </Typography>
        </Grid>

        <Grid item>
          <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} component={Link} to="/userProfile">
            Account Settings
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={logoutHandler} sx={{ fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserHomePage;
