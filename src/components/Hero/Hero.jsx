// src/components/Hero/Hero.jsx
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

// Register Swiper web components
register();

const Hero = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Configure Swiper
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        clickable: true,
      },
      navigation: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className="hero">
      <swiper-container ref={swiperRef} init="false">
        {slides.map((slide, index) => (
          <swiper-slide key={index}>
            <div 
              className="slide" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.button && (
                  <button className="cta-button">{slide.button}</button>
                )}
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
};

export default Hero;