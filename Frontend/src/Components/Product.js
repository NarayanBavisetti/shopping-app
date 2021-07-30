import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function Product(props) {
  const [product, setProduct] = useState("");
  const history = useHistory();
  const { id } = useParams();

   const deleteProduct = async() => {
    await axios.delete(`/products/${id}`)
    history.push("/products")
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/products/${id}`);
      console.log(res.data);
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
        <Col lg={6} md={12}>
          <Card style={{ width: "21rem" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.desc}</Card.Text>
              <Card.Title>&#8377;{product.price}</Card.Title>{" "}
              <Button className="mb-2 me-2" variant="primary">
                <Link to={`/products/${product.id}`}>Buy Now </Link>
              </Button>
              <Button className="mb-2 me-2" variant="success">
                <Link to={`/products/${product.id}`}>Add to cart </Link>
              </Button>
              <Button className="mb-2 me-2" variant="info">
                <Link to={`/products/${product.id}/edit`}>Edit</Link>
              </Button>
              <Button onClick={deleteProduct} className="mb-2 me-2" variant="danger">
                <Link to={`/products/${product.id}`}>Delete </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <h2>Leave a review</h2>
        </Col>
      </Row>
    </div>
  );
}
