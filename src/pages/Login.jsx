import React, { useState } from 'react'
import './Login.css'
import Wordmark from '../assets/Wordmark.png'

const Login =() => {

const  [signState,setSignState] =useState("Sign In")


  return (
    <div className='login'>
      <img src={Wordmark} className='login-logo'  alt="" />
      <div className="login-form">
        <h3>{signState}</h3>
        <form >
          {signState ==="Sign Up"?<input type="text"  placeholder='Your name'/>: <></>}
         
          <input type="email"  placeholder="Email"  />
          <input type="password"  placeholder="Password"  />
          <button>{signState}</button>
          <div className="form-help">
          <div className="remember">
             <input type="checkbox" />
             <label htmlFor="">Rember Me </label>

          </div>
          <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
        :  <p>Already have an account?  <span  onClick={()=>{setSignState("Sign In")}}  >Sign In Now</span> </p>
}
        </div>
      </div>
    </div>
  )
}

export default Login