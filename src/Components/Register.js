import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

function Register() {
    const[data,setdata] = useState({firstname:'',email:'',password:''});
    const[errors,seterrors] =useState([]);
    const handlechange=(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setdata({...data,[name]:value})
    }
    const submitform=(e)=>{
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/register',data).then(response =>{
        if(response.data.message === 'success'){
          window.location.href='/login';
        }
        else{
          seterrors(response.data.validation_err);
        }
    })
    }
  return (
    <div className='image'>
      <img src="images/hero-img.jpg" alt='logo' />
      <div className='form-wrapper'>
        <h1>Register</h1>
        <form action="" onSubmit={submitform}>
          <div className='form-control'>
            <input type="text" name='firstname' onChange={handlechange} value={data.firstname} placeholder='name' />
            {errors.name && (<span style={{color:'red',paddingBottom:'10px'}}>{errors.name[0]}</span>)}
          </div>
          <div className='form-control'>
            <input type="email" name='email' onChange={handlechange} value={data.email} placeholder='Email or phone number' />
            {errors.email && (<span style={{color:'red',paddingBottom:'10px'}}>{errors.email[0]}</span>)}
          </div>
          <div className='form-control'>
            <input type='password' name='password' onChange={handlechange} value={data.password} placeholder='Password' />
          </div>
          <div className='form-control'>
            <input type='password' name='password_confirmation' onChange={handlechange} value={data.password_confirmation} placeholder='Confirm Password' />
          </div>
          {errors.password && (<span style={{color:'red'}}>{errors.password[0]}</span>)}
          <button type='submit' className='submit-button'>Sign In</button>
        </form>
       </div>
    </div>
  )
}

export default Register
