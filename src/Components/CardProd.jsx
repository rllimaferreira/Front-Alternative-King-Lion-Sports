import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { useEffect, useState } from "react";

function CardCont({prod}) {
  return (<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Title>{prod.price}</Card.Title>
        <Card.Text>{prod.brand}</Card.Text>
        <Card.Text>{prod.description}</Card.Text>
        <Button variant="primary">test para link</Button>
      </Card.Body>
    </Card>
    </>);
} // título*, descrição*, imagem*, avaliação
function CardProd() {
    const [prods, definirProds] = useState([]);

    useEffect(() => {
       fetch('http://localhost:9000/products')

            .then((respostaDoServidor) => {
                return respostaDoServidor.json();
            })
            .then((resJson) => {               
                definirProds(resJson)
            });  
    },[]);
    return(<Container className="mt-3">{prods.map((prod, indice) => <CardCont key={indice} prod={prod}/>)}</Container> 
    )
}

export default CardProd;