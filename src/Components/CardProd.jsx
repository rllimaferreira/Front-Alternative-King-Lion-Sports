import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from '../Contexts/ProductsContext'

// function CardCont({ prod }) {
//   return (<>
//     <Card style={{ width: '18rem', margin: '0.5rem' }}>
//       <Card.Img src={prod.image} />
//       <Card.Body id={prod.id}>
//         <Card.Title>{prod.categories[0].name} {prod.title}</Card.Title>
//         <Card.Title>R$: {prod.price}</Card.Title>
//         <Card.Text>{prod.brand}</Card.Text>
//         <Card.Text>{prod.description}</Card.Text>
//         <Link className="link" to={`/pg_prod/${prod.id}`}>
//           <Button  style={{ background: 'yellowgreen', border: 'thin' }}>buy now</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   </>);
// } // título*, descrição*, imagem*, avaliação
// function Products() {
//   const [prods, definirProds] = useState([]);
//   useEffect(() => {
//     fetch('http://52.53.150.144:8081/products')
//       .then((respostaDoServidor) => {
//         return respostaDoServidor.json();
//       })
//       .then((resJson) => {
//         definirProds(resJson)
//       });
//   }, []);
//   return (<Container className="mt-3 d-flex align-content-center justify-content-center flex-wrap">
//     {prods.map((prod, indice) => <CardCont key={indice} prod={prod} />)}
//   </Container>
//   );
// }
// export default Products;

export default function Products () {
  const { products, setProducts } = useContext(ProductsContext)
  return (
    <>
    <Container className="mt-3 d-flex align-content-center justify-content-center flex-wrap">
      {products.map((product, index) => {
      
        return (
          <Card key={product.id} style={{ width: '18rem', margin: '0.5rem' }}>
              <Card.Img src={product.image} />
               <Card.Body id={product.id}>
                 <Card.Title>{product.categories[0].name} {product.title}</Card.Title>
                 <Card.Title>R$: {product.price}</Card.Title>
                 <Card.Text>{product.brand}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                 <Link className="link" to={`/pg_prod/${product.id}`}>
                  <Button  style={{ background: 'yellowgreen', border: 'thin' }}>See details</Button>
                </Link>
                </Card.Body>
              </Card>
        )
      })}
    </Container>
    </>
  )
}