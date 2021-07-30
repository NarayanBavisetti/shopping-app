import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Header"
import New from './New'
import ProductList from './ProductList'
import "./Product.css"
import Product from './Product'
import Edit from './Edit'

export default function Main() {
    return (
<Router>
  <Header />
  <Container className="main-cont">
  <Route exact path="/products" component={ProductList} />
 <Route exact path="/new" component={New} />
 <Route exact path="/products/:id" component={Product} />
 <Route exact path="/products/:id/edit" component={Edit} />
 </Container>
</Router>
    )
}
