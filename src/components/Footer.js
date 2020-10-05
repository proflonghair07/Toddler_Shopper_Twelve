import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Contributors</strong>{" "}
          <a href="https://github.com/karlavalentina85">
            Karla Silva <i class="fa fa-github" aria-hidden="true"></i>
          </a>{" "}
          <a href="https://github.com/christopherm970">Chris Mims</a>{" "}
          <a href="https://github.com/proflonghair07">Murphy Vaughn</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
