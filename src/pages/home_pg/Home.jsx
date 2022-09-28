import 'react-bootstrap/'
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import img_0 from '../../assets/imgs/wallpaperflare.com_wallpaper.jpg'
import img_1 from '../../assets/imgs/wallpaperflare.com_wallpaper(1).jpg'
import img_3 from '../../assets/imgs/wallpaperflare.com_wallpaper(3).jpg'
import img_4 from '../../assets/imgs/wallpaperflare.com_wallpaper(4).jpg'

import img_card1 from '../../assets/icon/cartao-modelo.svg'
import img_card2 from '../../assets/icon/mastercard.svg'
import img_card3 from '../../assets/icon/visa.svg'
import ebiticon from '../../assets/icon/ebitlabel.svg'
import img_boletocard from '../../assets/icon/boleto.svg'

import selecaobr from '../../assets/imgs/camisas_adidas.jpg'
import camisasadidas from '../../assets/imgs/adidas.jpg'
import 'react-bootstrap/'

import './Home.css'

export default function Home() {

  return (
    <>
      <Container className="mt-3" style={{ margin: '55px' }}>
        <h1>Home</h1>
        <hr />
        <Carousel >

          <Carousel.Item>
            <img className="d-block w-100 crs_img" src={img_0} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 crs_img" src={img_1} alt="First slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 crs_img" src={img_3} alt="First slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 crs_img" src={img_4} alt="First slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <div className='thumbnailSelecao d-flex justify-contente-center row'>
          <h3>Seleção Brasileira</h3>
          <hr />
          <img className='w-100 crs_img ' src={selecaobr}>
          </img>
        </div>
      </Container>

      <Container className='mt-5 mb-4'>
        <div className='thumbnailSelecao d-flex justify-contente-center row'>
          <h3>Lançamento</h3>
          <hr />
          <img className='w-100 crs_img ' src={camisasadidas}>
          </img>
        </div>
      </Container>
      <Container className='mt-5 mb-4'>
      <h5>Formas de pagamento</h5>
          <hr /><br/>
        <Row className='g-4 justify-content-center row'>
          <Col sm={3} md={4} className='colCards row justify-content-center '>
            <p style={{ textAlign: 'center'}}>Pagamento rapido
              e seguro </p>
            <img src={ebiticon} />
          </Col>
          <Col sm={5} md={4} className='colCards row justify-content-center border' style={{ borderWidth: 1 }}>
            <p style={{ textAlign: 'center'}}>Pacelamento em até 10x
              com cartões de crédito</p>
            <img src={img_card1} />
            <img src={img_card2} />
            <img src={img_card3} />
          </Col>
          <Col sm={3} md={4} className='colCards row justify-content-center '>
            <p style={{ textAlign: 'center'}}>Ou à vista no boleto
              ou Pix</p>
            <img src={img_boletocard} />
          </Col>
        </Row>
      </Container>
    </>
  );
}








