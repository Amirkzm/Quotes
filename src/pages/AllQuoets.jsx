import { Button, Container, Divider } from "@mui/material";
import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const AllQuoets = () => {
  return (
    <Container>
      <Button>Sort Ascending</Button>
      <Divider />
      <QuoteList />
    </Container>
  );
};

export default AllQuoets;
