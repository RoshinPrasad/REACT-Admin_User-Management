import React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { clearAdmin } from '../../Actions/AuthAdmin';

const Navbar = () => {
 const dispatch = useDispatch()
    const navigate=useNavigate()
    const logoutHandle=()=>{
        console.log('hi');
        localStorage.removeItem('authorization.admin') 
        dispatch(clearAdmin())
        navigate('/admin')
    }
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'InactiveBorder'}}>
          <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
             User Management
            </Typography>
      
            <Button variant="outlined" color='primary' onClick={logoutHandle}><LogoutIcon/>Logout</Button>
          </Toolbar>
        </AppBar>
      
      </Box>
  )
}

export default Navbar