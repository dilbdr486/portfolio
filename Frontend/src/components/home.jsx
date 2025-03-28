import React from "react";
import Logo from "./dil.jpg";

export default function home() {
  return (
    <div>
      fil
      <div>right</div>
      <div>
        <NavLink to="/">
          <img src={Logo} width={70} className="" />
        </NavLink>
      </div>
    </div>
  );
}
