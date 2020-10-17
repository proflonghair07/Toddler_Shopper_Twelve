import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="container">
      <div class="columns is-centered">
        <div class="column has-text-centered is-4">
          <Link to="/Dolls">
            <div class="card is-centered grow" id="dolls"><div class="card-text">Dolls</div></div>
          </Link>
        </div>
        <div class="column has-text-centered is-4">
        <Link to="/ActionFigures">
          <div class="card is-centered grow" id="action-figures"><div class="card-text">Action Figures</div></div>
          </Link>
        </div>
        <div class="column">
        <Link to="/BuildingToys">
          <div class="card is-centered grow" id="building-toys"><div class="card-text">Building Toys</div></div>
          </Link>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
        <Link to="/ChildrenBooks">
            <div class="card is-centered grow is-vcentered" id="children-books"><div class="card-text">Children's Books</div></div>
          </Link>
        </div>
        <div class="column">
        <Link to="/ToyVehicles">
          <div class="card is-centered grow" id="toy-vehicles"><div class="card-text">Toy Vehicles</div></div>
        </Link>
        </div>
        <div class="column">
        <Link to="/KidsElectronicGames">
          <div class="card is-centered grow" id="electronic-games"><div class="card-text">Electronic Games</div></div>
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
