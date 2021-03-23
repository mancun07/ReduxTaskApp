import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo">
        <div
          className="brand-logo"
          style={{ width: "100%", textAlign: "center" }}
        >
          Task App
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
