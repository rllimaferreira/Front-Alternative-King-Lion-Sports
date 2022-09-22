import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

function CardCont({prod}) {
  return (<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">buy now!</Button>
      </Card.Body>
    </Card>
    </>);
} // título, descrição, imagem, avaliação
function CardProd() {
    const [prods, definirProds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/products')

            .then((respostaDoServidor) => {
                return respostaDoServidor.json();
            })
            .then((resJson) => {               
                definirProds(resJson.Array)
            });  
    },[]);
    return(<Container className="mt-3">{prods.map((prod, indice) => <CardCont key={indice} prod={prod}/>)}</Container> 
    )
}

export default CardProd;