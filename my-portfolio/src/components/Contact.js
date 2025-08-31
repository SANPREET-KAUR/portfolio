import React from 'react';
import './Contact.css';

function Contact() {
    return ( <
        section id = "contact"
        className = "contact-section" >
        <
        h2 > Contact Me < /h2>

        <
        p > If you'd like to get in touch, feel free to contact me using the details below:</p>

        <
        div className = "contact-info" >
        <p>
  <strong>LinkedIn: </strong>
  <a href="https://www.linkedin.com/in/sanpreet-kaur-b79077279/" >
     linkedin.com/in/sanpreet-kaur
  </a>
</p>
<
        p > < strong > Email: < /strong> <a href="mailto:kaursanpreet935@gmail.com">kaursanpreet935@gmail.com</a > < /p> < /
        div > <
        /section>
    );
}

export default Contact;