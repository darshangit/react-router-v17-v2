import QuoteList from "../quotes/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "dash",
    text: "Awesome 1",
  },
  {
    id: "q2",
    author: "dash-2",
    text: "Awesome 2",
  },
];
const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
