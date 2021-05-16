import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const AddQuote = React.lazy(() => import("../pages/AddQuote"));
const QuoteDetail = React.lazy(() => import("../pages/QuoteDetail"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const AllQuotes = React.lazy(() => import("../pages/AllQuotes"));

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
