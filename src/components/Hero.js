import { Carousel, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="justify-content-center">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://static1.colliderimages.com/wordpress/wp-content/uploads/slice_inception_movie_poster_banner_01.jpg?q=50&fit=contain&w=1500&h=&dpr=1.5"
              alt="First slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="../image/static/actor2.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="../image/static/actor3.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="../image/static/actor4.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="../image/static/actor5.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Hero
