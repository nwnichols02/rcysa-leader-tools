import React from "react";
import { useNavigate } from "react-router";

export default function PrayerList(){
    const navigate = useNavigate();
    const homeRoute = () => {
      navigate('/home')
    }
    return(
        <div>
            <button onClick={homeRoute}>Home</button>
            <h1>PrayerList page</h1>
        </div>
    )
}