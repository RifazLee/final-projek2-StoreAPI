import React from "react";
// import { useDispatch } from "react-redux";
// import { removeItem } from "../features/productsSlice";
import { Form, Button, Row, Col } from "react-bootstrap";

const StockItem = ({ id, image, price, title }) => {
//   const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
        //   onClick={() => {
        //     dispatch(removeItem(id));
        //   }}
        >
          remove
        </button>
      </div>
      <div className="container">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Control type="number" placeholder="Update Stock" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
          <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Row>
      </div>
    </article>
  );
};

export default StockItem;
