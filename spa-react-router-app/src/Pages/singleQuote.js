import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../Components/Comments/Comments";
const SingleQuote = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>single Quote</h1>
      <p>{params.quoteId}</p>
      <Route path={`/welcome/Quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default SingleQuote;
