import React, { useState } from "react";
import { titleCaseRemoveHyphen } from "../../utils/helper";

function Portfolio() {
  // all projects
  const [projects] = useState([
    {
      name: "moviegoer",
      description: "MERN stack/PWA/SPA Project",
      link: "https://moviegoer-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/moviegoer.git",
    },
    {
      name: "cake-app",
      description: "Model-View-Controller Project",
      link: "https://cake-lab-app.herokuapp.com/",
      repo: "https://github.com/lylylong/cake-app",
    },
    {
      name: "COVID-19-Tracker",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/COVID-19-Tracker/",
      repo: "https://github.com/lylylong/COVID-19-Tracker",
    },
    {
      name: "work-time-planner",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/work-time-planner/",
      repo: "https://github.com/lylylong/work-time-planner.git",
    },
    {
      name: "expense-tracker",
      description: "Node.js/express/mongoDB Project",
      link: "https://expense-tracker-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/expense-tracker.git",
    },
    {
      name: "my-weather-channel",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/my-weather-channel/",
      repo: "https://github.com/lylylong/my-weather-channel.git",
    },
  ]);
  //   const { name, description, link, repo } = [projects[i]];

  return (
    <div>
      <h1 id="about">Portfolio Here!</h1>
      <div className="flex-row">
        {projects.map((project, i) => (
          <div className="project col-lg-4 col-sm-6" key={project.name}>
            <p className="mt-3 project-title">
              {titleCaseRemoveHyphen(project.name)}
            </p>
            <img
              src={require(`../../assets/projects/${project.name}.jpg`).default}
              alt={project.name}
              className="project-img"
            />
            <div className="project-detail text-left">
              <p>
                <i className="fas fa-globe"></i>
                <a
                  className="project-info"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  URL{" "}
                </a>
                <i className="fab fa-github"></i>
                <a
                  className="project-info"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Repo
                </a>
              </p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
