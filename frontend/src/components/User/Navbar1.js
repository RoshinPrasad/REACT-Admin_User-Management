import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../Actions/AuthUser';


const Navbar = ({details}) => {
  const dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const logoutHandler = (e) => {
        localStorage.removeItem('authorization.user')
        dispatch(clearUser())
        navigate('/login')
      }
    const handleClose = () => {
      setAnchorEl(null);
    };
 
  return (
    <React.Fragment>
    <Box sx={{ backgroundColor:'black',color:'white', display: 'flex',justifyContent:'space-between', alignItems: 'center', textAlign: 'center' }}>
    <VpnKeyIcon sx={{  ml: 2 }} />
    <Link style={{textDecoration:'none',color:'lightblue'}} to='/login'><h3 style={{marginLeft:'-68rem'}}>React Management</h3></Link> 
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
      
        </IconButton>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
     <Link style={{textDecoration:"none",color:'black'}} to="/userProfile">
      <MenuItem >
        <Avatar /> 
      </MenuItem>
      </Link>
      <Divider />
      <MenuItem onClick={logoutHandler}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        
      </MenuItem>
    </Menu>
  </React.Fragment>
  )
}

export default Navbar