import React from "react";

function Nav({ children, message, score }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div>
        <div>
          <a className="navbar-brand" href="/">
            {children}
          </a>
        </div>
        <div>
          <div className="navbar-brand">{message}</div>
        </div>
        <div>
          <div className="navbar-brand">Current Score: {score}</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
