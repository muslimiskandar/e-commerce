import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAllProducts } from "../hooks/useAllProducts";

const AllProducts = () => {
  // const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products`).then((res) => {
  //     setData(res.data);
  //     setIsLoading(false);
  //   });
  // }, []);

  // const localData = localStorage.getItem("Cart");

  // var localData2 = JSON.parse(localData);

  // console.log("x", localData.length);
  // useEffect(() => {
  // console.log("Data changed");
  // const localData = localStorage.getItem("Cart");
  // const counts = {};
  // const sampleArray = ["a", "a", "b", "c"];
  // sampleArray.forEach(function (x) {
  //   counts[x] = (counts[x] || 0) + 1;
  // });
  // }, [localStorage.getItem("Cart").length]);

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

  // console.log(localStorage.getItem("Cart"));

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

  // useEffect(() => {
  // const localData = localStorage.getItem("Cart");
  // const counts = {};
  // const sampleArray = ["a", "a", "b", "c"];
  // sampleArray.forEach(function (x) {
  //   counts[x] = (counts[x] || 0) + 1;
  // });
  // console.log(counts);
  // }, [localStorage.getItem("Cart")]);

  return (
    <div className="products-container">
      {data?.data.map((x) => (
        <Card style={{ width: "18rem" }} key={x.id}>
          <Link to={`/products/${x.id}`}>
            <Card.Img
              variant="top"
              src={x.image}
              width="250px"
              height="300px"
            />
          </Link>
          <Card.Body>
            <Link to={`/products/${x.id}`} className="product-title-link">
              <Card.Title>{x.title}</Card.Title>
            </Link>
            <Card.Text>
              <b>
                {"$"}
                {x.price}
              </b>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                cart.push(x.id);
                // console.log(x);
                localStorage.setItem("Cart", cart);
                // const getCart = localStorage.getItem("Cart");
                // console.log(typeof getCart);
                // localStorage.setItem("Cart", x.title);
                // if (cart) {
                // localStorage.setItem("Cart", cart.push());
                // localStorage.setItem();
                // }
              }}
            >
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllProducts;
