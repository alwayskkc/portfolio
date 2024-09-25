import React from "react";
import cIcon from "../assets/images/C.png"; // Importing the C icon in PNG format
import csharpIcon from "../assets/images/C#.png"; // Importing the C# icon in PNG format
import javaIcon from "../assets/images/Java.png"; // Importing the Java icon in PNG format
import pythonIcon from "../assets/images/Python.png"; // Importing the Python icon in PNG format
import awsIcon from "../assets/images/AWS.png"; // Importing the AWS icon in PNG format
import azureIcon from "../assets/images/Azure.png"; // Importing the Azure icon in PNG format
import reactIcon from "../assets/images/ReactJS.png"; // Importing the ReactJS icon in PNG format

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <img src={cIcon} alt="C Programming" />
          <p>C</p>
        </div>
        <div className="skill-item">
          <img src={csharpIcon} alt="C#" />
          <p>C#</p>
        </div>
        <div className="skill-item">
          <img src={javaIcon} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src={pythonIcon} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src={awsIcon} alt="AWS" />
          <p>AWS</p>
        </div>
        <div className="skill-item">
          <img src={azureIcon} alt="Azure" />
          <p>Azure</p>
        </div>
        <div className="skill-item">
          <img src={reactIcon} alt="ReactJS" />
          <p>ReactJS</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
