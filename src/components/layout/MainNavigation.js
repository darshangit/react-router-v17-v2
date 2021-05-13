import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Great Quotes</p>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/quotes"> All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/addQuote">Add a Quote</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
