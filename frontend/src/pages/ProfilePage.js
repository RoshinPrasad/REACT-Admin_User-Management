import React,{useEffect,useState} from 'react'
import UserProfile from '../components/User/UserProfile'
import Navbar from '../components/User/Navbar'
import axios from '../Axios'
import { useNavigate } from 'react-router-dom'
function ProfilePage() {
  const [details,setDetails]=useState({})
  const navigate=useNavigate()
  useEffect(()=>{
axios.get('/details',{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.user'))}}).then((res)=>{
  setDetails(res.data)
}).catch(error => {
  navigate('/login')
})
  },[])

  const addImage=(filePath)=>{
    setDetails(prevState=>{
      return{
        ...prevState,
      profilePic:filePath
      }
    })
  }
 
  return (
    <div>
        <Navbar details={details}/>
        <UserProfile details={details} changePic={addImage}/>
        </div>
  )
}

export default ProfilePage