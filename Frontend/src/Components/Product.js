import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
export default function Product(props) {
 
  return (
    <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>{props.desc}</Card.Text>
                  <Card.Title>{props.price}</Card.Title>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
    </div>
  );
}
