import React, { Fragment } from "react";
import QuoteItem from "./QuoteItem";

const QUOTES = [
  {
    id: "q1",
    autor: "amir",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas impedit, adhvhvk aliquam necessitatibus quibusdam explicabo perferendis est error magnilabore blanditiis laborum consequatur officiis voluptates voluptatibus nemo iure et repellendus.p",
  },
  {
    id: "q2",
    autor: "bagher",
    quote:
      "second quote lagf aeflglabf aef alfebela;fbaebf;anef;aneflbalefb;aebf;kljevba;vbf afuoegaflboglb efogiafeboeafhoe",
  },
  { id: "q3", autor: "nader", quote: "third quote" },
];
const QuoteList = () => {
  console.log("quotelist");
  const quoteItems = QUOTES.map((quote) => {
    return <QuoteItem key={quote.id} autor={quote.autor} quote={quote.quote} />;
  });
  return <Fragment>{quoteItems}</Fragment>;
};

export default QuoteList;
