import { Carousel, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="justify-content-center">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/slice_inception_movie_poster_banner_01.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5"
              alt="First slide"
              width={1000}
              height={300}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://miro.medium.com/proxy/1*h8boORPeJG-t9Y3kEDiGzg.png"
              alt="Second slide"
              width={1000}
              height={300}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.justwatch.com/images/backdrop/176190115/s640/the-promotion"
              alt="Second slide"
              width={1000}
              height={300}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Hero
