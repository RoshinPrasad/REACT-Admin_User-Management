import React,{useState} from 'react'
import { Link  ,useNavigate } from 'react-router-dom';
import {Button,TextField,Grid,Box,Typography,Avatar} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../Axios'
import { useDispatch } from 'react-redux';
import { authAdmin } from '../../Actions/AuthAdmin';
import backgroundImage from '../ad.jpg';

const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  const [error,setError]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    const admin = {
      email,
      password
    }
    console.log(admin);
    axios.post('/admin/login',admin).then((res)=>{
if(res.data.success){
  localStorage.setItem('authorization.admin', JSON.stringify(res.data.token))
  dispatch(authAdmin())
  navigate('/admin/home')
}else if(res.data.error){
  setError(res.data.error)
}
    })
  }

  return (
    <div className="background"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Grid
container
direction="row"
justifyContent="center"
alignItems="center"
>
  <Card sx={{ maxWidth: 345,marginTop:'1rem', border: '1px solid black', borderColor: 'black' , 
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            borderRadius: '10px'}}>
  <Avatar sx={{ m: 2,width: 100, height: 100, bgcolor: 'black',marginX:'auto' }}> 
      </Avatar>
  <Typography component="h1" variant="h5">
       Login
      </Typography>
      <p style={{color:'red'}}>{error}</p>
    <CardContent>
    <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '35ch' },
    
  }}
  noValidate
  autoComplete="off"
  onSubmit={submitHandler}
>


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

    <Button variant="outlined" sx={{mt:'5px', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} color="success" type='submit'>
Submit
</Button>

   </Box>
    </CardContent>

</Card>
</Grid>
</div>
  )
}

export default Login