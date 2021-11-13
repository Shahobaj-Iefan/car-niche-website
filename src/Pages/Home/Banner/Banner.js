import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/941M4Xn/banner-2.jpg'
            alt='toyota'
          />
          <Carousel.Caption>
            <h3>Toyota</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/FD70ZJ6/banner-3.jpg'
            alt='mer'
          />

          <Carousel.Caption>
            <h3>Marcidies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/HGxqSbG/banner-1.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Hundey</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
