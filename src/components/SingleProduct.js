import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useSingleProduct";
import { Spinner } from "react-bootstrap";
import AddtoCartButton from "../utils/AddtoCartButton";

const SingleProduct = () => {
  const { productId } = useParams();
  const { isLoading, data, isError, error } = useSingleProduct(productId);

  if (isLoading) {
    return (
      <div className="spinner-icon">
        <Spinner animation="border" variant="secondary" size="xs" />
      </div>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="single-product-container">
      <div className="single-main-product-container">
        <div className="single-product-left">
          <img
            src={data?.data?.image}
            width="300px"
            height="300px"
            alt={data?.data?.title}
          />
        </div>
        <div className="single-product-right">
          <h2>{data?.data?.title}</h2>
          <p>{data?.data?.rating?.rate} rate</p>
          <p>{data?.data?.rating?.count} orders</p>
          <p>{data?.data?.price}</p>
          {/* <Button>Add to cart</Button> */}
          <AddtoCartButton />
        </div>
      </div>
      <div className="single-product-description">
        <p>{data?.data?.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
