import React, { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { loadGapiInsideDOM } from "gapi-script";
import { actionType } from "../ContextApi/reducer";
import { useStateValue } from "../ContextApi/StateProvider";
import {auth,provider} from "../firebase/config";

function Login() {
  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[,dispatch] = useStateValue();
  const navigate = useNavigate();
  const signInwithGoogle = () => {
    auth.signInWithPopup(provider).then((result)=>{
      dispatch({
        type:actionType.SET_USER,
        user:result.user
      })
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  const submitform=(e)=>{
    e.preventDefault();
    signInwithEmail();
    setEmail("");
    setPassword("");
  
  }
  const signInwithEmail = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        })
      })
      .catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className='image'>
      <img src="images/hero-img.jpg" alt='logo' />
      <div className='form-wrapper'>
        <h1>Sign In</h1>
        <form action="" onSubmit={submitform}>
          <div className='form-control'>
            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email or phone number' />
          </div>
          <div className='form-control'>
            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' />
          </div>
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
        <h3 className="signin_google" onClick={signInwithGoogle}>
            Login with&nbsp;
            <img className ="google"
              src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
              alt="google-logo"
            />
          </h3>
          <p>New to Netflix? <Link to="/register">Sign up now</Link></p>
        <small>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </small>
        </div>
      </div>
    </div>
  )
}
export default Login
