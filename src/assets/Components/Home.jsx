import 'react-bootstrap/'
import Container from "react-bootstrap/Container"
import Carousel from 'react-bootstrap/Carousel';
import img_0 from '../imgs/wallpaperflare.com_wallpaper.jpg'
import img_1 from '../imgs/wallpaperflare.com_wallpaper(1).jpg'
import img_3 from '../imgs/wallpaperflare.com_wallpaper(3).jpg'
import img_4 from '../imgs/wallpaperflare.com_wallpaper(4).jpg'
import './Home.css'

export default function Home() {
    return (
        <>
        <Container className="mt-3">
            <h1>Home</h1>
            <hr/>
            <Carousel variant="dark">

      <Carousel.Item>
        <img className="d-block w-100 crs_img" src={img_0} alt="First slide"/>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img className="d-block w-100 crs_img" src={img_1} alt="First slide"/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100 crs_img" src={img_1} alt="First slide"/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100 crs_img" src={img_3} alt="First slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100 crs_img" src={img_4} alt="First slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </Container>    
        </>
    );
}