import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <h2>Shiess</h2>
        <div className="nav-masthead">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            About
          </a>
          <a className="nav-link" href="/">
            Log In
          </a>
          <a className="nav-link" href="/">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
