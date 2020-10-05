import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Main.css";

function Main() {
  return (
    <main className="container">
      <div class="columns">
        <div class="column">
          <Link to="/Dolls">
            <div class="card">Dolls</div>
          </Link>
        </div>
        <div class="column">
          <div class="card">Board Games</div>
        </div>
        <div class="column">
          <div class="card">Art Supplies</div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card">Books</div>
          </div>
        </div>
        <div class="column">
          <div class="card">Action Figures</div>
        </div>
        <div class="column">
          <div class="card">Costumes</div>
        </div>
      </div>

      <br></br>

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
}
export default Main;
