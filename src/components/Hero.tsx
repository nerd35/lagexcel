import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import HeroBackground from '../assets/banner-two-bg-1.png'
import HeroBackground1 from '../assets/banner-two-bg-2.png'
import HeroBackground2 from '../assets/banner-two-bg-3.png'

interface Props {

}
const carouselItems = [
    {
      image: HeroBackground,
      captionTitle: 'BEST TRAVEL AGENCY',
      captionSubTitle: 'The world with us!',
      captionBold: 'EXPLORE',
      captionText: 'Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events',
    },
    {
      image: HeroBackground1,
      captionTitle: 'TRUSTED TRAVEL AGENCY',
      captionSubTitle: 'The world with us!',
      captionBold: 'DISCOVER',
      captionText: 'Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events',
    },
    {
      image: HeroBackground2,
      captionTitle: 'GET EXCLUSIVE TOUR',
      captionSubTitle: 'The world with us!',
      captionBold: 'ADVENTURE',
      captionText: 'Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events',
    },
  ];

const Hero = (props: Props) => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: '100vh' }}
        className='carol_height'
        indicators={false} // Remove indicators
      >
        {carouselItems.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100 carol_height" src={item.image} alt={`Slide ${idx}`} />
            <Carousel.Caption className='text-start img_hero' style={{ position: 'absolute', top: '50%',transform: 'translateY(-50%)', width: '60%', }}>
              <p className='hero_small_title mb-0 '>{item.captionTitle}</p>
              <p className='hero_large_title mb-0 '>{item.captionBold}</p>
              <p className='hero_small_title1 mb-0 '>{item.captionSubTitle}</p>
              <p className='hero_text mb-0 ' style={{marginTop: "-60px !important"}}>{item.captionText}</p>
              <div className='mt-3 gap-3'>
                  <Link to="/" className="btn btn-hero px-3 me-3 py-2">Discover an agent</Link>
                  <Link to="/" className="btn btn-hero1 px-3 py-2">Know more</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
}

export default Hero
