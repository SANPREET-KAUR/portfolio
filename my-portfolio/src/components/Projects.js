import React from 'react';
import projects from './projectdata';
import './Projects.css';

function Projects() {
    return ( <
        section id = "projects"
        className = "projects-section" >
        <
        h2 className = "section-title" > Projects < /h2> <
        div className = "projects-grid" > {
            projects.map((project, index) => ( <
                div key = { index }
                className = "project-card" >
                <
                h3 className = "project-title" > { project.title } < /h3> <
                p className = "project-description" > { project.description } < /p> <
                p className = "project-tech" >
                <
                strong > Tech Stack: < /strong> {project.techStack.join(', ')} < /
                p > {
                    project.link && ( <
                        a href = { project.link }
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "project-link" >
                        View Project <
                        /a>
                    )
                } <
                /div>
            ))
        }

        { /* ➕ More Projects Box */ } <
        div className = "project-card more-projects" >
        <
        h3 className = "project-title" > More Projects < /h3> <
        p className = "project-description" > Explore more of my work on GitHub. < /p> <
        a href = "https://github.com/SANPREET-KAUR/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "project-link" >
        Visit My GitHub→ <
        /a> < /
        div > <
        /div> < /
        section >
    );
}

export default Projects;