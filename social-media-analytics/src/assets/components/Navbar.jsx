import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Social Media Analytics
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Top Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trending">
                Trending Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feed">
                Feed
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
