import { Route, Switch } from "react-router";
import AddQuote from "../pages/AddQuote";
import AllQuotes from "../pages/AllQuotes";
import QuoteDetail from "../pages/QuoteDetail";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = () => {
  return (
    <div className={styles.main}>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/addQuote">
          <AddQuote />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
