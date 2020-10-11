import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="container">
      <div class="columns is-centered">
        <div class="column has-text-centered is-4">
          <Link to="/Dolls">
            <div class="card is-centered">Dolls</div>
          </Link>
        </div>
        <div class="column has-text-centered is-4">
        <Link to="/ActionFigures">
          <div class="card is-centered">Action Figures</div>
          </Link>
        </div>
        <div class="column">
        <Link to="/BuildingToys">
          <div class="card is-centered">Building Toys</div>
          </Link>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
        <Link to="/ChildrenBooks">
            <div class="card is-centered is-vcentered">Children Books</div>
          </Link>
        </div>
        <div class="column">
        <Link to="/ToyVehicles">
          <div class="card is-centered">Toy Vehicles</div>
        </Link>
        </div>
        <div class="column">
        <Link to="/KidsElectronicGames">
          <div class="card is-centered">Kids Electronic Games</div>
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
