import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";
import {Link, useHistory } from "react-router-dom";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect( () => {
    async function fetchData(){
    const res = await axios.get("/products");
    setProduct(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        {product &&
          product.map((item, indesx) => {
            return (
              <Col md={6} lg={3}>
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.desc.substring(0,100)}...</Card.Text>
                      <Card.Title>&#8377;{item.price}</Card.Title>
                      <Link to={`/products/${item._id}`} >  <Button variant= "outline-primary">Buy Now</Button></Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              
            );
          })}
      </Row>
    </div>
  );
};

export default ProductList;
