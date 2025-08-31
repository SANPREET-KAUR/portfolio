import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievments from './components/Achievements'
import Contact from './components/Contact';

function MainPortfolio() {
    return ( <
        >
        <
        Hero / >

        <
        Projects / >
        <
        Achievments /
        >
        <
        Skills / >
        <
        Contact / >

        <
        />
    );
}

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Welcome / > }
        /> <
        Route path = "/portfolio"
        element = { < MainPortfolio / > }
        /> < /
        Routes > <
        /Router>
    );
}

export default App;