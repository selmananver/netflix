import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

function Login() {
  const[data,setdata] = useState({email:'',password:''});
  const[errors,seterrors] =useState([]);
  const handlechange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setdata({...data,[name]:value})
  }
  const submitform=(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login',data).then(response =>{
      if(response.data.message === 'success'){
        window.location.href='/';
      }
      else{
        if(data.email==='' || data.password ==='')
        seterrors(response.data.validation_err);
      }
      if(response.data.message ==='failure'){
        window.location.href='/login';
      }
  })
  }

  return (
    <div className='image'>
      <img src="images/hero-img.jpg" alt='logo' />
      <div className='form-wrapper'>
        <h1>Sign In</h1>
        <form action="" onSubmit={submitform}>
          <div className='form-control'>
            <input type="email" name='email' onChange={handlechange} value={data.email} placeholder='Email or phone number' />
            {errors.email && (<span style={{color:'red',paddingBottom:'10px'}}>{errors.email[0]}</span>)}
          </div>
          <div className='form-control'>
            <input type='password' name='password' onChange={handlechange} value={data.password} placeholder='Password' />
          </div>
          {errors.password && (<span style={{color:'red'}}>{errors.password[0]}</span>)}
          <button type='submit' className='submit-button'>Sign In</button>
          <div className="form-help">
            <div className='remember-me'>
              <input type='checkbox' id='remember-me' />
              <label>Remember me</label>
            </div>
            <small>
              <p>Need help?</p>
            </small>
          </div>
        </form>
        <div className='footer'>
          <p>New to Netflix? <a href="/register">Sign up now</a></p>
        <small>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </small>
        </div>
      </div>
    </div>
  )
}
export default Login
