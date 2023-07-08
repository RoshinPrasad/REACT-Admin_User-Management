import React,{useState,useEffect} from 'react'
import UserHomePage from '../components/User/userhome'
import Navbar from '../components/User/Navbar'
import axios from '../Axios'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [details,setDetails]=useState({})
  const navigate=useNavigate()
 useEffect(()=>{
  axios.get('/details',{headers:{'auth-token':JSON.parse(localStorage.getItem('authorization.user'))}}).then((res)=>{
    setDetails(res.data)
  }).catch(error => {
    navigate('/login')
  })
},[])
    
  return (
    <>
    <Navbar details={details}/>
    <UserHomePage details={details}/>
    </>
  )
}

export default HomePage