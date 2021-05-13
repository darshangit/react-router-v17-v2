import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <button className="btn">
        <Link to="/addQuote">Add a Quote</Link>
      </button>
    </div>
  );
};

export default NoQuotesFound;
