import React from "react"
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const PublicRoutes = () => {
    const authState= useSelector(state=>state.userAuth)
  return (
   !authState.auth?<Outlet/>:<Navigate to='/'/>
  )
}

export default PublicRoutes