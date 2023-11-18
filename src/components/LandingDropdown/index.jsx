import React from "react";
import "./dropdown.css";

const LandingDropdown = (props) => {
  return (
  <div className="dropdown-item">
    <h2 onClick={props.onclick}><i class='bx bx-current-location' ></i> {props.cityname}</h2>
    <hr className="dropdown-divider"/>
  </div>
  );
};


export default LandingDropdown;
