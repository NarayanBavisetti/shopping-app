import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Header"
import New from './New'
import ProductList from './ProductList'
import "./Product.css"

export default function Main() {
    return (
<Router>
  <Header />
  <Container className="main-cont">
  <Route exact path="/product" component={ProductList} />
 <Route exact path="/new" component={New} />
  </Container>
</Router>
    )
}
