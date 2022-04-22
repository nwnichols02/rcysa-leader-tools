import React from "react";
import { useNavigate } from "react-router";

export default function Home(){
    const navigate = useNavigate();
    const callingsRoute = () => {
        navigate('/callings')
    }
    const agendasRoute = () => {
        navigate('/agendas')
    }
    const logoutRoute = () => {
        navigate('/')
    }
    const recentlySpakeRoute = () => {
        navigate('/recentlyspake')
    }
    const prayerRoute = () => {
        navigate('/prayerlist')
    }
    const settingsRoute = () => {
        navigate('/settings')
    }
    return(
        <div>
            <nav>
                <img/>
                <h4>Welcome user.name to RCYSA Leader Tools</h4>
                <button onClick={logoutRoute}>Logout</button>
            </nav>
            <div className="top-navbar">
                <button onClick={prayerRoute}>Prayers List</button>
                <button onClick={recentlySpakeRoute}>Recently Spoke</button>
                {/* <button>New Members</button> */}
            </div>
            <div className="grid-navbar">
                <button onClick={agendasRoute}>Agendas</button>
                <button onClick={callingsRoute}>Callings</button>
                {/* <button>Interviews</button> */}
                {/* <button>Ordinations</button> */}
                <button onClick={settingsRoute}>Settings</button>
            </div>
        </div>
    )
}