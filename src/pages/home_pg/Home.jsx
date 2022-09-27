import 'react-bootstrap/'
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img_0 from '../../assets/imgs/wallpaperflare.com_wallpaper.jpg'
import img_1 from '../../assets/imgs/wallpaperflare.com_wallpaper(1).jpg'
import img_3 from '../../assets/imgs/wallpaperflare.com_wallpaper(3).jpg'
import img_4 from '../../assets/imgs/wallpaperflare.com_wallpaper(4).jpg'
import img_card1 from '../../assets/icon/cartao-modelo.svg'
import img_card2 from '../../assets/icon/mastercard.svg'
import img_card3 from '../../assets/icon/visa.svg'
import img_boletocard from '../../assets/icon/boleto.svg'
import selecaobr from '../../assets/imgs/selecaoBr.jpg'
import camisasadidas from '../../assets/imgs/camisas_adidas.jpg'
import ebiticon from '../../assets/icon/ebit-logo-5-1.png'

import './Home.css'

export default function Home() {
  return (
    <>
      <Container className="mt-3">
        <h1>Home</h1>
        <hr />
        <Carousel variant="dark">

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
        <Row className='rowContainer'>
          <Col className='colCard colCard d-flex justify-contente-center row ' sm={3}>
            <p>Pagamento rápido e seguro</p>
            <img className='w-50 ' src={ebiticon}/>
          </Col>
          <Col className='colCard d-flex justify-contente-center row colCardBank' sm={6}>
            <p>Pacelamento em até 10x
              com cartões de crédito</p>
            <div className='imgCardBank d-flex justify-content-center '>
              <img src={img_card1} />
              <img src={img_card2} />
              <img src={img_card3} />
            </div>
          </Col>

          <Col className='colCard cardBoleto colCard d-flex justify-contente-center row  ' sm={3}>
            <p>Ou à vista no boleto
              ou Pix</p>
            <div className='d-flex justify-content-center '>
              <img src={img_boletocard} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className='thumbnailSelecao d-flex justify-contente-center row'>
        <h3>Seleção Brasileira</h3>
        <hr />
       <img className='d-block w-100 crs_img ' src={selecaobr}>
        </img>
        </div>
      </Container>

      <Container>
        <div className='thumbnailSelecao d-flex justify-contente-center row'>
        <h3>Lançamento</h3>
        <hr />
       <img className='d-block w-100 crs_img ' src={camisasadidas}>
        </img>
        </div>
      </Container>
    </>


  );





}




