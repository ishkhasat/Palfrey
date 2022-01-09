﻿import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/" role="heading" aria-level="1">
        <i className="fas fa-dove">Palfrey</i>
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            🛠️ <strong>ProductDetails</strong>
          </Link>
          <Link className="nav-item nav-link active" to="ProductOverview">
            📱 <strong>ProductOverview</strong>
          </Link>
        </div>
      </nav>



    





    </React.Fragment>
  );
}
export default NavBar;
