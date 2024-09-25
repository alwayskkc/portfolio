import React from "react";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Graduate Teaching Assistant - University of Cincinnati (2023 - Present)</h3>
        <p>Mentored 400+ students in courses such as Machine Learning and Data Mining.</p>
      </div>
      <div className="experience-item">
        <h3>Associate Software Engineer - Accenture Solutions Pvt Ltd (2020 - 2023)</h3>
        <p>
          Developed a scalable back-end portal for an insurance platform, handling 100,000
          user requests per second using AWS and CI/CD pipelines.
        </p>
      </div>
    </section>
  );
}

export default Experience;
