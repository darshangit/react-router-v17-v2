import { useEffect } from "react";
import { useHistory } from "react-router";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";
import QuoteForm from "../quotes/QuoteForm";

const AddQuote = (props) => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuote;
