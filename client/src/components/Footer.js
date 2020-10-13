import React from "react";
import "./Main.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Contributors:</strong>{" "}
          <a href="https://github.com/karlavalentina85">
            Karla Silva <i class="fab fa-github-square"></i>
          </a>{" "}
          <a href="https://github.com/christopherm970">Chris Mims <i class="fab fa-github-square"></i></a>{" "}
          <a href="https://github.com/proflonghair07">Murphy Vaughn <i class="fab fa-github-square"></i></a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
