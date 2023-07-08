import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Button,TextField,Grid,Box,Typography,Avatar} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../Axios'
import backgroundImage from '../1930875.jpg';

function Signup() {
  const navigate=useNavigate()
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confPassword,setConfPassword]=useState('')
  const [error,setError]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
const user={
  name,
  email,
  password,
  confPassword
}
axios.post('/signup',user).then((res)=>{
  if(res.data.success){
navigate('/login')
  }
else if(res.data.error){
  setError(res.data.error)
}
})
  }
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <Card sx={{ maxWidth: 400,marginTop:'-2rem' ,border: '1px solid black', borderColor: 'black' , 
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            borderRadius: '10px'}}>
      
      <Avatar sx={{ m: 2,width: 90, height: 90, bgcolor: 'black',marginX:'auto' }}> 
          </Avatar>
      <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
            SIGN UP
          </Typography>
          <p style={{color:'red'}}>{error}</p>
        <CardContent>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },marginTop:'-2rem'
        
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
        <TextField
          label="Name"
          id="outlined-size-small"
          margin="dense"
          onChange={(e)=>setName(e.target.value)}
        />
   
    <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          margin="dense"
          onChange={(e)=>setEmail(e.target.value)}
        />
  
   <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          margin="dense"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password" 
          margin="dense"
          autoComplete="current-password"
          onChange={(e)=>setConfPassword(e.target.value)}
        />
        <Button variant="outlined" color="primary" type='submit' sx={{ fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
  Submit
</Button>
<Typography sx={{display:'block',textAlign:'center',mt:2}} variant="p" gutterBottom>
       Already Have an Account?<Link style={{color:'black', fontWeight: 'bold'}} to="/login">Login</Link>
      </Typography>
       </Box>
        </CardContent>
    
    </Card>
    </Grid>
    </div>
    
  )
}

export default Signup