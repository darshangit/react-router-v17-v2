import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NoQuotesFound from "../quotes/NoQuotesFound";
import { DUMMY_QUOTES } from "./AllQuotes";

const QuoteDetail = (props) => {
  const params = useParams();
  const quoteId = params.id;
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  const match = useRouteMatch();

  console.log(match);

  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            {" "}
            Load Comments{" "}
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
