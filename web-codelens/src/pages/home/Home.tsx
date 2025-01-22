import React from 'react';
import { Hero } from '../../components/hero/Hero';
import './home.css';
import { RotatingTitle } from '../../components/rotatingTitle/RotatingTiltle';
import LinkButton from '../../components/linkButton/LinkButton';
import { SpanTitleHome } from '../../components/span-title-home/SpanTitleHome';

const Home = () => {
  return (
    <Hero 
      media={{
        type: 'video',
        src: '/hero/Hero.mp4'
      }}
    >
    <div className='hero-content-container'>
        <div className='span-title-container'>
          <SpanTitleHome />
        </div>
        <div className='title-container'>
          <RotatingTitle />
          <div className="hero-button">
            <LinkButton 
            label="CONTACTANOS"
            href="#"
            size="normal"
          />
          </div>
        </div>
     </div>
    </Hero>
  );
}

export default Home;