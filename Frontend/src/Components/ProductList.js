import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios"

class ProductList extends Component {
    
async componentDidCatch(){
    const res = await axios.get("/hi");
    console.log(res);
}

  state = {
    products: [
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amagzing product",
      },
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amagzing product",
      },
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amagzing product",
      },
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1588476376802-9e96f9d967f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amagzing product",
      },
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amagin colorfull project",
      },
      {
        name: "narayan",
        price: 5000,
        img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
        desc: "amazed",
      },
    ],
  };

  render() {
    const products = this.state.products.map((product) => {
      return (
        <Col md={6} lg={3}>
          <Product
            name={product.name}
            price={product.price}
            desc={product.desc}
            img={product.img}
          />
        </Col>
      );
    });
    return (
      <div>
        <Row>{products}</Row>
      </div>
    );
  }
}
export default ProductList;
