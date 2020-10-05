import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Main.css";

const Dolls = () => {
  return (
    <main className="container">
      <table className="table is-fullwidth is-striped is-hoverable">
        <tbody>
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              image={project.image}
              rating={project.rating}
              rawPrice={project.rawPrice}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
export default Dolls;
