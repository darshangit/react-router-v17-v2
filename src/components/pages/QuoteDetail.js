import { Route, useParams } from "react-router";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const QuoteDetail = (props) => {
  const params = useParams();
  const quoteId = params.id;
  return (
    <>
      <HighlightedQuote />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
