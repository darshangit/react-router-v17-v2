import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";

const AddQuote = (props) => {

const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes'); // push we can go back - replace you cant
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
