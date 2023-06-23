import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

     const navigate=  useNavigate()

     const [Input, setInput] = useState({
          name:"",
          email:"",
          password:"",

     })


     const handlesubmit=(e)=>{
       e.preventDefault();

       localStorage.setItem("user",JSON.stringify(Input));
     navigate("/login")
     }


  return (
    <div>
    <form onSubmit={handlesubmit} >
      
 
    <div>
        <label >UserName</label>
        <div className="mt-2">
          <input name="name" value={Input.name} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })}  />
        </div>
      </div>

      <div>
        <label >Email address</label>
        <div >
          <input name='email'  value={Input.email} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })} />
        </div>
      </div>
           

      <div>
        <div >
          <label >Password</label>
        
        </div>
        <div className="mt-2">
          <input name="password"  value={Input.password} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })} />
        </div>
      </div>

      <div style={{display:"inline-flex", marginTop:"15px" ,}}>
        <button type="submit" >Sign in</button>
        </div>
    

      <div style={{margin:"20px"}} >Already have account ? 
     <Link to="/login">Login</Link>
    </div>
    
    </form>

   



    </div>
  )
}

export default Register