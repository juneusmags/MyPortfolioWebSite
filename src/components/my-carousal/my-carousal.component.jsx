import React from 'react';
import './my-carousal.style.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/resimler/macbook.jpg'
import Slide2 from '../../assets/resimler/studio.jpeg'
import Slide3 from  '../../assets/resimler/cameralens.jpg';



const MyCarousal = () => {
    return (
     <div id="home">
     <Carousel controls={false} indicators interval={4790} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-img "
          src={Slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-img "
          src={Slide2}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-img "
          src={Slide3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
   
     </div>
    )
}

export default MyCarousal;