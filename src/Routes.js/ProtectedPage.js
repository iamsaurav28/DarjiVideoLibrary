import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedPage = () => {

     const auth =localStorage.getItem("loggedIn");
     return auth ? <Outlet /> : <Navigate to={"/login"} />

}

export default ProtectedPage