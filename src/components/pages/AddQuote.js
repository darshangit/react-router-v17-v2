import QuoteForm from "../quotes/QuoteForm";

const AddQuote = (props) => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
