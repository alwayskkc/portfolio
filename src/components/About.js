import React from "react";
import profilePhoto from "../assets/images/your-photo.jpg"; // Place your image here

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePhoto} alt="Kesava" className="profile-photo" />
        <p>
          Hi! I’m Kesava, a graduate student at the University of Cincinnati with experience in full-stack development, 
          cloud computing (AWS, Azure), and AI-based technologies. Passionate about Machine Learning, Data Science, and 
          Natural Language Processing. Currently focusing on cybersecurity and cloud infrastructure.
        </p>
      </div>
    </section>
  );
}

export default About;
