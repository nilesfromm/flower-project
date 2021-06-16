import React from "react";
//import { Link } from "react-router-dom";
import whiteLogo from "./icons/whiteLogo.png";

export default function DarkModeFooter() {
  return (
    <a href="https://www.ok.community/the-flower-project">
      <img
        src={whiteLogo}
        style={{ width: "3vw" }}
        alt="okLogo"
        id="okLogo"
      />
    </a>
  );
}
