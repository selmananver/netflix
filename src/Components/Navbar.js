
// export default Navbar
import React, { useRef } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { ArrowDropDown, Clear, ExpandMore, Search } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import { auth } from "../firebase/config";
import { ClickAwayListener } from "@material-ui/core";
import { actionType } from "../ContextApi/reducer";
import { useStateValue } from "../ContextApi/StateProvider";
import { truncate } from "./Utils/truncate";

function Navbar() {
  
  const { state } = useLocation();

  const [{ user } , dispatch] = useStateValue();
  const [show, handleShow] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  // const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [expandMore, setExpandMore] = useState(false);
  const location = useLocation();
  useEffect(() => {
    //random useravatar image.
    // setUserAvatar(Math.floor(Math.random() * 3) + 1);

    //change nav style on scroll more than 60px from top
    const navHandler = () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", navHandler);

    return () => {
      //clean up
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

   const signOut = () => {
   auth.signOut().then(()=>{
    dispatch({
      type:actionType.SET_USER,
      user:null,
   })
   window.location ="https://selmananver.github.io/netflix"
  
  })
  .catch((err)=>{
    alert(err.message)
  })

  }

 

  //just for indication
  const dropClickHandler = () => {
    alert(
      "Not added this functionality.\nClick on signout option in dropdown menu to signout of Netflix."
    );
  };

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__leftSide">
        <Link to="/">
          <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"   alt="netflix logo" />
        </Link>
        <ClickAwayListener onClickAway={() => setExpandMore(false)}>
          <div className="expandMore__content">
            <ExpandMore
              onClick={() => {
                setExpandMore(!expandMore);
              }}
            />
            <div
              className={`nav__links ${!expandMore ? "navMobile__links" : ""}`}
            >
              <span
                 style={
                    location.pathname === "/home" ? { color: "white" } : {}
                  }
                 onClick={() => navigate("/netflix")}
              >
                Home
              </span>

              <span
                  style={
                    location.pathname === "/browse/tv"
                    ? { color: "white" }
                      : {}
                  }
                 onClick={() => navigate("/browse/tv")}
              >
                TV Shows
              </span>

              <span
                style={
                  location.pathname === "/browse/movies"
                     ? { color: "white" }
                    : {}
                 }
                 onClick={() => navigate("/browse/movies")}
              >
                Movies
              </span>

              <span
                 style={
                  location.pathname === "/browse/latest"
                     ? { color: "white" }
                     : {}
                 }
                onClick={() => navigate("/browse/latest")}
              >
                New & Popular
              </span>
            </div>
          </div>
        </ClickAwayListener>
      </div>
      <div className="nav__rightSide">
        {/* Search Field */}

        <Link to="/Searchpage">
          <SearchIcon className="nav-search-icon"/>
      </Link>
        <img
          className="nav__avatar"
           src={user.photoURL ? user.photoURL : "netflix/images/5.png"}
        />
        <span className="nav__userName">
            { truncate(
                      user.displayName ? user.displayName : user.email.slice(0,-10),
                      15
                     
                    )}
        </span>
        <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
          <span className="dropDown__arrow">
            <ArrowDropDown
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            />
            <div
              className="dropdown__list"
              style={showDropdown ? {} : { display: "none" }}
            >
              <ul>
                <li>
                  <img
                    className="nav__avatar"
                    src={
                      user.photoURL ? user.photoURL  : "netflix/images/5.png"
                     }
                    alt="netflix avatar" 
                  />
                  <span>
                    {truncate(
                      user.displayName ? user.displayName : user.email.slice(0,-10),
                      15
                     
                    )}
                  </span>
                </li>
                <li onClick={dropClickHandler}>
                  <img src="netflix/images/1.png" alt="" />
                  User 2
                </li>
                <li onClick={dropClickHandler}>
                  <img src="netflix/images/2.png" alt="" />
                  User 3
                </li>
                <li onClick={dropClickHandler}>Manage Profiles</li>
                <li className="dropdown__options" onClick={dropClickHandler}>
                  Account
                </li>
                <li className="dropdown__options" onClick={dropClickHandler}>
                  Help Center
                </li>
                <li
                  className="dropdown__options"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign out of Netflix
                </li>
              </ul>
            </div>
          </span>
        </ClickAwayListener>
      </div>
    </div>
  );
}

export default Navbar;
