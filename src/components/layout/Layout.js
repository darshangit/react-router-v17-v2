import { Redirect, Route, Switch } from "react-router";
import AddQuote from "../pages/AddQuote";
import AllQuotes from "../pages/AllQuotes";
import NotFound from "../pages/NotFound";
import QuoteDetail from "../pages/QuoteDetail";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/addQuote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetail />
          </Route>
          <Route path='*'>
              <NotFound/>
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Layout;
