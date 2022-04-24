import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAllProducts } from "../hooks/useAllProducts";
import SingleProductModal from "./SingleProductModal";
import Product from "./Product";

const AllProducts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [passId, setPassId] = useState();

  const onSuccess = (data) => {
    console.log(data);
  };

  const onError = (error) => {
    console.log(error);
  };

  const { isLoading, data, isError, error, isFetching } = useAllProducts(
    onSuccess,
    onError
  );

  console.log(isFetching);

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
    <div className="all-products-container">
      <h2>All products</h2>
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

export default AllProducts;
