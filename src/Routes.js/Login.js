import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
     const navigate= useNavigate();

     const [Input, setInput] = useState({
          email:"",
          password:"",

     })


     const handlelogin=(e)=>{
          e.preventDefault();

          const loggeduser = JSON.parse(localStorage.getItem("user"));
          if(Input.email === loggeduser.email && Input.password === loggeduser.password){
            localStorage.setItem("loggedIn", true)
            navigate("/")
          }else{
               alert("password or email doesnt match")
          }
     }



  return (
    <div>

<form onSubmit={handlelogin} >

      <div>
        <label >Email address</label>
        <div className="mt-2">
          <input name='email'  value={Input.email} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })} />
         
        </div>
      </div>

      <div>
        <div >
          <label >Password</label>
        
        </div>
        <div className="mt-2">
          <input name='password'  value={Input.password} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })} />
      
        </div>
      </div>

      <div style={{display:"inline-flex", marginTop:"15px" ,}}>
        <button type="submit" >Sign in</button>
        </div>
    

      <div style={{margin:"20px"}} >Don't have account ? 
     <Link to="/register">Register</Link>
    </div>
    
    </form>

    </div>
  )
}

export default Login