import React from "react";
import "/src/components/blogCard/blogCard.css";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const BlogCard = ({ title, description, date, url, img, isLarge }) => {
  const navigate = useNavigate()
  isLarge = true  
    return (
    <div className={isLarge ? `large-container` : `medium-container `}>
      <div className="img-container">
        {
            isLarge ? (
                <img src="public/blog/card-large.svg" alt="blog" />
            ) : (
                <img src="public/blog/card-medium.svg" alt="blog" />)
        }
      </div>

      <div className={isLarge ? `large-content` : `medium-content`}>
        <h2>Titulo del articulo</h2>

        {isLarge && (
          <p>
          El posicionamiento con ayuda del SEO en Montreal es una de las
          estrategias más importantes para cualquier negocio.
          </p>
        )}

        <div className="date-more-container">
          <p className="date">01 de enero de 2025</p>
          <a className="view-more" onClick={() => navigate("/")}  > View More </a>
        </div>
      </div>
    </div>
  );
};


BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    description:PropTypes.string,
    date:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    isLarge:PropTypes.bool.isRequired
};


export default BlogCard;
