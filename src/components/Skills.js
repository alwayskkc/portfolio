import React from "react";
import cIcon from "../assets/images/C.png"; // Importing the C icon in PNG format
import csharpIcon from "../assets/images/Csharp.png"; // Importing the C# icon in PNG format
import javaIcon from "../assets/images/Java.png"; // Importing the Java icon in PNG format
import pythonIcon from "../assets/images/Python.png"; // Importing the Python icon in PNG format
import awsIcon from "../assets/images/aws.png"; // Importing the AWS icon in PNG format
import azureIcon from "../assets/images/azure.png"; // Importing the Azure icon in PNG format
import reactIcon from "../assets/images/reactjs.png"; // Importing the ReactJS icon in PNG format
import cplusIcon from "../assets/images/C++.png";
import sqlIcon from "../assets/images/sql.png";
import aspIcon from "../assets/images/asp.png";
import jsIcon from "../assets/images/js.png";

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
        <div className="skill-item">
          <img src={cplusIcon} alt="C++" />
          <p>C++</p>
        </div>
        <div className="skill-item">
          <img src={aspIcon} alt="ASP .NET" />
          <p>ASP .NET</p>
        </div>
        <div className="skill-item">
          <img src={sqlIcon} alt="SQL" />
          <p>SQL</p>
        </div>
        <div className="skill-item">
          <img src={jsIcon} alt="Java Script" />
          <p>JS</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
