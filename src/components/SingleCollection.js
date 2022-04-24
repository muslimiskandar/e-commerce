import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSingleCollection from "../hooks/useSingleCollection";
import { Spinner } from "react-bootstrap";
import SingleProductModal from "./SingleProductModal";
import Product from "./Product";

const SingleCollection = () => {
  const { collectionName } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [passId, setPassId] = useState();

  const { isLoading, data, isError, error } =
    useSingleCollection(collectionName);

  if (isLoading) {
    return (
      <div className="all-products-container">
        <h2>
          {collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}
        </h2>
        <div className="spinner-icon">
          <Spinner animation="border" variant="secondary" size="xs" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="all-products-container">
      <h2>
        {collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}
      </h2>
      <div className="products-container">
        <Product
          data={data}
          setModalShow={setModalShow}
          setPassId={setPassId}
        />
      </div>
      <SingleProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        passId={passId}
      />
    </div>
  );
};

export default SingleCollection;
