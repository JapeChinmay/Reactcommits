import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>details page</h1>
      <p>{params.pID}</p>
    </Fragment>
  );
};

export default ProductDetail;
