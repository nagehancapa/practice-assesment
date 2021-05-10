import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ marginBottom: 20 }}>
      <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/doctorschedule"
      >
        Doctor Schedule
      </NavLink>{" "}
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/patientsignup"
      >
        Patient Signup
      </NavLink>{" "}
      {" | "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/patientdatabase"
      >
        Patient DataBase
      </NavLink>
    </div>
  );
};

export default NavBar;
