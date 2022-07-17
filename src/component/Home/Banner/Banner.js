import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://www.afdb.org/sites/default/files/a1-whw-2020.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-dark fw-bold">Welcome to MediClinic</h1>
          <p className="text-dark fw-bold">Laboratory Place
            In Medical Practice
            Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://assets.medpagetoday.net/media/images/88xxx/88550.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-dark fw-bold">
            Finest Patient
          </h1>
          <p className="text-dark fw-bold">
            Care & Amenities
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://www.epsu.org/sites/default/files/styles/article_banner/public/article/image/nurses%20lab%40canStock%20Photo%20950px_0.jpg?itok=u-5N50kR"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="fw-bold">Best Laboratory</h1>
          <p className="fw-bold">Tests Available.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;