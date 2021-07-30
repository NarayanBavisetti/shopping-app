import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function New() {

  const [name ,setProductName] = useState('')
  const [img ,setImageUrl] = useState('')
  const [price ,setPrice] = useState('')
  const [desc ,setDescription] = useState('')
const history = useHistory();
  const getHandler = async(e) => {
    e.preventDefault();
    const data= {
      name,
      img,
      price,
      desc
    }

    await axios.post("/products",data);
    history.push("/product")
    console.log(data)
  }
  return (
    <div>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Form onSubmit={getHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" onChange={(e) =>setProductName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image-Url</Form.Label>
              <Form.Control type="text" placeholder="Image-Url" onChange={(e) =>setImageUrl(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" onChange={(e) =>setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) =>setDescription(e.target.value)}/>
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
