import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useSingleProduct";
import { Spinner } from "react-bootstrap";
import AddtoCartButton from "../utils/AddtoCartButton";
import { BiPackage } from "react-icons/bi";
import ReactStars from "react-stars";

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
      <div className="single-product-left">
        <div className="single-product-img-container">
          <div>
            <img
              src={data?.data?.image}
              width="300px"
              height="300px"
              alt={data?.data?.title}
            />
          </div>
        </div>
      </div>
      <div className="single-product-right">
        <h2>{data?.data?.title}</h2>
        <div className="feedback-container">
          <ReactStars value={data?.data?.rating?.rate} edit={false} size={20} />
          <div>({data?.data?.rating?.rate} rate)</div>
          <div className="orders-count">
            {data?.data?.rating?.count} orders
            <span>
              <BiPackage color="#ffd000" size={20} />
            </span>
          </div>
        </div>
        <div className="single-product-description">
          <h5>Description</h5>
          <p>
            <i>{data?.data?.description}</i>
          </p>
        </div>

        <h4>
          {"$"}
          {data?.data?.price}
        </h4>
        <AddtoCartButton />
        <p id="safe-secure">Safe and Secure Checkout </p>
      </div>
    </div>
  );
};

export default SingleProduct;
