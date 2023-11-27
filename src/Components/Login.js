import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { loadGapiInsideDOM } from "gapi-script";

function Login() {
  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  })
  const[data,setdata] = useState({email:'',password:''});
  const navigate = useNavigate();
  const[errors,seterrors] =useState([]);
  const handlechange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setdata({...data,[name]:value})
  }
  const responseGoogle = (response) => {
    const accessToken = response.accessToken;
    const  displayName = response.profileObj.name;
    const image =response.profileObj.imageUrl;
    localStorage.setItem('displayName', displayName)
    localStorage.setItem('image',image);
    localStorage.setItem('accessToken',accessToken);
    navigate("/home", { replace: true,  state: {  displayName,image } });
  
  }
  const submitform=(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login',data).then(response =>{
      if(response.data.message === 'success'){
        window.location.href='/home';
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
         <h3 className="signin__google">
         <GoogleLogin clientId="372965052705-pf573654e4a1g9e2f56vn1riec0bp8s8.apps.googleusercontent.com"
             buttonText="Login with google"
               onSuccess={responseGoogle}/>
    
        </h3> 
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
