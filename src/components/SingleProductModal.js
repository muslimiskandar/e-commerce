import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSingleProduct } from "../hooks/useSingleProduct";
import AddtoCartButton from "../utils/AddtoCartButton";
import ReactStars from "react-stars";
import { BiPackage } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

function SingleProductModal(props) {
  const { isLoading, data, isError, error } = useSingleProduct(props.passId);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Footer>
        <IoIosClose onClick={props.onHide} size={40} />
      </Modal.Footer>
      <div className="single-product-container">
        {/* <div className="single-main-product-container"> */}
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
            <ReactStars
              value={data?.data?.rating?.rate}
              edit={false}
              size={20}
            />
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
    </Modal>
  );
}

export default SingleProductModal;
