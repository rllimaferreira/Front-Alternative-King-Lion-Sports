import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardCont({ prod }) {
  return (<>
    <Card style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Title>R$: {prod.price}</Card.Title>
        <Card.Text>{prod.brand}</Card.Text>
        <Card.Text>{prod.description}</Card.Text>
        <Link className="link" to="/pg_prod">
          <Button style={{ background: 'yellowgreen', border: 'thin' }}>buy now</Button>
        </Link>
      </Card.Body>
    </Card>
  </>);
} // título*, descrição*, imagem*, avaliação
function CardProd() {
  const [prods, definirProds] = useState([]);
  useEffect(() => {
    fetch('http://52.53.150.144:8081/products')
      .then((respostaDoServidor) => {
        return respostaDoServidor.json();
      })
      .then((resJson) => {
        definirProds(resJson)
      });
  }, []);
  return (<Container className="mt-3 d-flex align-content-center justify-content-center flex-wrap">
    {prods.map((prod, indice) => <CardCont key={indice} prod={prod} />)}
  </Container>
  );
}
export default CardProd;