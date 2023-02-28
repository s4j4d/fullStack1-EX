import React from "react";
import sass from "../styles/layout/layout.module.scss";

function Header() {
  return (
    <div className={sass.wrapper}>
      <div className={sass.container}>
        <img src={require("./library.svg").default} alt="library" />

        <ul className={sass.container__ul}>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
