import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "React",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "Html+Css",
    level: "advanced",
    color: "#F0DB4F",
  },
  {
    skill: "Tailwind",
    level: "intermediate",
    color: "#2965F1",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#68A063",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#0db7ed",
  },
  {
    skill: "python",
    level: "beginner",
    color: "#336791",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/io.png" alt="Raffaele Tarantino"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Raffaele Tarantino</h1>
      <p>
        Ciao, sono un ragazzo appassionato di informatica e sviluppo front-end.
        Attualmente sto frequentando un corso dedicato allo sviluppo web, dove
        sto acquisendo competenze nel creare siti con HTML, CSS, JavaScript e
        React.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "👍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
