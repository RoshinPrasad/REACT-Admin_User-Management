import React,{useEffect,useState,useRef} from 'react'
import {Button,Grid,TextField,Box,IconButton,Avatar, CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {AccountCircle,PhotoCamera} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import axios from '../../Axios'
import { useNavigate, useParams } from 'react-router-dom';
const EditUser = () => {
    const {id}=useParams()
    const [name,setName]=useState('')
    const [email,SetEmail]=useState('')
    const [image,setImage]=useState('')
    const navigate=useNavigate()
    useEffect(() => {
        axios.get(`/admin/editUser/${id}`,{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.admin'))}}).then((res)=>{
            setName(res.data.name)
            SetEmail(res.data.email)
            setImage(res.data.profilePic)
        })
  },[])
     const submitHandler=()=>{
        const data={
            name,
            email
        }
        console.log(data);
        navigate('/admin/home')
axios.patch(`/admin/editUser/${id}`,data,{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.admin'))}}).then(res=>{
    console.log(res.data);
})
    }
  return (
    <div>
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
            <Card sx={{   minWidth: 500,mt:'14rem '}}>
      <CardContent>
        <Box sx={{position:'relative'}}>
             <Avatar sx={{width: 150, height: 150,mx:'auto',backgroundColor:'black'}} src={image} >
             </Avatar>  
        </Box>
  
      
       <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField  id="input-with-sx" fullWidth margin='dense' value={name} onChange={(e)=>{setName(e.target.value)}}  variant="standard" />
      </Box>
     
      <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField    id="filled-size-normal" fullWidth margin='dense' value={email} onChange={(e)=>{SetEmail(e.target.value)}} type="email"  variant="standard" />
      </Box>
    
      </CardContent>
 
  <Button sx={{my:2,mr:2}} variant="outlined" color="error" onClick={()=>navigate('/admin/home')}  >Cancel</Button>
  <Button sx={{my:2}} variant="outlined" color="success" onClick={submitHandler} >Submit Changes</Button>
 
    </Card>
   </Grid>
    </div>
  )
}

export default EditUser