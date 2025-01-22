import React from 'react';
import './blog.css';
import { Hero } from '../../components/hero/Hero';

const Blog = () => {
  return (
    <Hero 
      media={{
        type: 'image',
        src: '/hero/hero-blog.webp',
      }}
    >
      <div className="blog-hero-content">
        <h1 className="blog-title">
          Bienvenido a Nuestro Blog
        </h1>
        <h2 className="blog-subtitle">Tu fuente de información en tecnología y desarrollo web</h2>
        <p className="blog-description">
          Descubre las últimas noticias, tendencias, y consejos sobre innovación tecnológica, desarrollo web, y cómo potenciar tu negocio con soluciones digitales.
        </p>
      </div>
    </Hero>
  );
}

export default Blog;