import React,{useEffect,useState,useRef} from 'react'
import {Button,Grid,TextField,Box,IconButton,Avatar, CardActionArea} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {AccountCircle,PhotoCamera} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import axios from '../../Axios'
import backgroundImage from '../undefined.jpg';



const UserProfile = ({details,changePic}) => {
    const [image,setImage]=useState('')
    const [error, setError] = useState(false)
    const fileRef=useRef()
    useEffect(() => {
        setImage(details.profilePic )
      }, [details.profilePic ])
    console.log(image)
    const handleSubmit=(e)=>{
e.preventDefault()
const file=fileRef.current.files[0]
const formData=new FormData()
if(!file){
    return setError(true)
  }else{
    setError(false)
  }
  formData.append('image',file,file?.name)
  const data=formData
  axios.patch('/update',data,{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.user')), 'Content-Type': 'multipart/form-data'}}).then((res)=>{
changePic(res.data.url)
  })
    }
  return (
    <div  className="background"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '91vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
            <Card sx={{
    height: '60vh',
    aspectRatio: '3/4', // Adjust the aspect ratio as needed
    maxWidth: 400,
    marginTop: '-3rem',
    border: '1px solid black',
    borderColor: 'black',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    borderRadius: '10px',
  }}>
      <CardContent>
        <Box sx={{position:'relative'}}>
             <Avatar sx={{width: 150, height: 150,mx:'auto',backgroundColor:'black'}} src={image} >
             </Avatar>  
             <Avatar  sx={{position:'absolute',zIndex:100,bottom:10,right:155}}>
             <IconButton color="primary" aria-label="upload picture" component="label">
  <input ref={fileRef} hidden accept="image/*" type="file" onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}} />
  <PhotoCamera sx={{color:'black'}}/>
</IconButton>
</Avatar>
       
        </Box>
  
      
       <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField disabled id="input-with-sx" fullWidth label={details.name} variant="standard" />
      </Box>
     
      <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField disabled   id="filled-size-normal" fullWidth  type="email" label={details.email}  variant="standard" />
      </Box>
    
      </CardContent>
  <CardActionArea>
  <Button sx={{my:2, fontWeight: 'bold', boxShadow: '0 0 4px rgba(0, 0, 255, 0.5)'}} variant="outlined" color="primary" onClick={handleSubmit} >Submit Changes</Button>
  </CardActionArea>
    </Card>
   </Grid>
    </div>
    
  )
}

export default UserProfile