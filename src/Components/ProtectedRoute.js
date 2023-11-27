import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const checkusertoken =()=>{
            const userToken = localStorage.getItem("accessToken");
            if (!userToken ) {
                setIsLoggedIn(false);
                return navigate('/');
            }
            else{
            setIsLoggedIn(true);
            return navigate('/home');
            }
        }
        checkusertoken()

    },[isLoggedIn]);

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;