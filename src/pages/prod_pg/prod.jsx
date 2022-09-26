import 'react-bootstrap/'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Prod() {
  return (
    <>
      <Container className="mt-3 mb-4">
        <h1>request: categoryName, brand, title</h1>
        <hr />
        <Card>
          <Card.Img variant="top" src="https://www.absoluteincorporated.com/wp-content/uploads/2017/09/700x500.png" />
          <Card.Body>
            <Card.Title>R$: Price request</Card.Title>
            <div className='d-flex align-content-center justify-content-around' style={{ width: '9rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16"
                style={{ margin: '5px', color: 'yellowgreen' }}>
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <p style={{ color: 'yellowgreen' }}>Free delivery</p>
            </div>
            <Link className="d-flex justify-content-between" to="/pg_carrinho" style={{ width: '9rem', color: 'yellowgreen' }}>
              <Button className="d-flex justify-content-between" style={{ width: '9rem', color: '#fff', background: 'yellowgreen', border: 'thin' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                </svg>
                <p>Add to cart</p>
              </Button>
            </Link>
            <hr />
            <Card.Text>
              <Card.Title>Description:</Card.Title>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
    //Perdão pelos brs assinado por:felce kkk
  );
}

