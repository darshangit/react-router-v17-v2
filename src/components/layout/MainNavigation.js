import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Great Quotes</p>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/quotes"> All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/addQuote">Add a Quote</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
