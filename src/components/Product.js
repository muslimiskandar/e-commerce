import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { data, setModalShow, setPassId } = props;
  return (
    <>
      {data?.data.map((x) => (
        <Card style={{ width: "18rem" }} key={x.id}>
          <MdZoomOutMap
            onClick={() => {
              setModalShow(true);
              setPassId(x.id);
            }}
          />
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
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Product;
