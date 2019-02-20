import React from "react";
import "./style.css";

function Nav({ children, message, score, topScore }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div>
        <div>
          <h1>
            <a className="navbar-brand navSub" href="/">
              {children}
            </a>
          </h1>
        </div>
        <div>
          <div className="navbar-brand navSub">{message}</div>
        </div>
        <div>
          <div className="navbar-brand navSub">Current Score: {score}</div>
        </div>
        <div>
          <div className="navbar-brand navSub">Top Score: {topScore}</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
