import React,{ useRef, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Navbar from './Navbar';
import './SearchPage.css';
// import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function SearchPage() {
    const navigate = useNavigate();
    const inputRef = useRef();

    function handleClick(e){
        e.preventDefault();
        localStorage.getItem('displayName');
        localStorage.getItem('image');
        navigate(`/Searchpage/${inputRef.current.value}`);
    }
    
    return (
        <div>
          <Navbar/>
          <div className="searchpage">
             <form>
                 <input type="text" ref={inputRef} placeholder="Search movies"/>
                 
                <button onClick={handleClick}>
                       <SearchIcon/>
                </button>
                

             </form>
          </div>
        </div>
    )
}

export default SearchPage