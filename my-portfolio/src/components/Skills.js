import React from 'react';
import './skills.css';

function Skills() {
    return ( <
        section id = "skills"
        className = "skills-section" >
        <
        h2 > Skills < /h2>

        <
        div className = "skill-group" >
        <
        h3 > Frontend < /h3> <
        p > React.js, HTML5, CSS3, JavaScript(ES6 + ), Responsive Design, LocalStorage < /p> < /
        div >

        <
        div className = "skill-group" >
        <
        h3 > Backend < /h3> <
        p > Node.js, Express.js, MongoDB, Mongoose, REST APIs, CRUD Operations < /p> < /
        div >

        <
        div className = "skill-group" >
        <
        h3 > DSA(Java) < /h3> <
        p > Arrays, Strings, Trees, Linked Lists, Recursion, Binary Search, DP, LeetCode(Easy– Medium) < /p> < /
        div >

        <
        div className = "skill-group" >
        <
        h3 > Tools & Platforms < /h3> <
        p > Git, GitHub, Postman, VS Code, Replit < /p> < /
        div >

        <
        div className = "skill-group" >
        <
        h3 > Communication < /h3> <
        p > Confident speaker, clear explanations, team collaboration, fluent in English and Hindi < /p> < /
        div > <
        /section>
    );
}

export default Skills;