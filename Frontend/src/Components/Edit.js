import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Edit() {
  const [product, setProduct] = useState("");
  const [name, setProductName] = useState("");
  const [img, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDescription] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const getHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      img,
      price,
      desc,
    };

    await axios.patch(`/products/${id}`)
    history.push(`/products/${id}`);
    console.log(data);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/products/${id}`);
      setProduct({
        name: res.data.name,
        img: res.data.img,
        price: res.data.price,
        desc: res.data.desc,
        id: res.data._id,
      });
    }
    fetchData();
  }, []);
  return (
    <div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1>Edit Product</h1>
          <Form onSubmit={getHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setProductName(e.target.value)}
                value={product.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image-Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image-Url"
                onChange={(e) => setImageUrl(e.target.value)}
                value={product.img}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                value={product.price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={product.desc}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
}
