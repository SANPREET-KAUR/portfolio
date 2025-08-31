import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../assets/bg.mp4';
import './Welcome.css';

function Welcome() {
    const navigate = useNavigate();

    return ( <
        div className = "welcome-container" >
        <
        video autoPlay muted loop className = "bg-video" >
        <
        source src = { bgVideo }
        type = "video/mp4" / >
        <
        /video> <
        div className = "overlay" > < /div> <
        div className = "welcome-content" >
        <
        h1 > Welcome to Sanpreet 's Portfolio</h1> <
        button onClick = {
            () => navigate('/portfolio') } > Enter Portfolio < /button> <
        /div> <
        /div>
    );
}

export default Welcome;