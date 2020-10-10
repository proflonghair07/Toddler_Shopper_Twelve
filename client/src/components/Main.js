import React from "react";
import { Link } from "react-router-dom";
// import { projects } from "../data/projects";
// import ProjectCard from "./ProjectCard";
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
        <Link to="/ActionFigures">
          <div class="card">Action Figures</div>
          </Link>
        </div>
        <div class="column">
        <Link to="/BuildingToys">
          <div class="card">Building Toys</div>
          </Link>
        </div>
      </div>
      <div class="columns">
        <div class="column">
        <Link to="/ChildrenBooks">
            <div class="card">Children Books</div>
          </Link>
        </div>
        <div class="column">
        <Link to="/ToyVehicles">
          <div class="card">Toy Vehicles</div>
        </Link>
        </div>
        <div class="column">
        <Link to="/KidsElectronicGames">
          <div class="card">Kids Electronic Games</div>
          </Link>
        </div>
      </div>

      <br></br>

      {/* <table className="table is-fullwidth is-striped is-hoverable">
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
      </table> */}
    </main>
  );
}
export default Main;
