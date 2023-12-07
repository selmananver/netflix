import React, { useState } from 'react'
import './Login.css'
import {auth} from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    const submitform=(e)=>{
      e.preventDefault();
      if(password ===password1){
        SignWithEmail();
      }
      else{
        alert('Password didnt match')
      }
      setPassword('');
      setPassword1('');
    };
     const SignWithEmail=()=>{
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          alert("Account Created");
        }
        navigate("/netflix");
      })
      .catch(function (error) {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className='image'>
      <img src="images/hero-img.jpg" alt='logo' />
      <div className='form-wrapper'>
        <h1>Sign Up</h1>
        <form  onSubmit={submitform}>
          <div className='form-control'>
            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email or phone number' />
           
          </div>
          <div className='form-control'>
            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)}  value={password} placeholder='Password' />
          </div>
          <div className='form-control'>
            <input type='password' name='password_confirmation' onChange={(e)=>setPassword1(e.target.value)} value={password1} placeholder='Confirm Password' />
          </div>
          <button type='submit' className='submit-button'>Sign Up</button>
        </form>
       </div>
    </div>
  )
}

export default Register
