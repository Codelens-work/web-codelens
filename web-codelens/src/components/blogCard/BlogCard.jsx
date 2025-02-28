import React from "react";
import "/src/components/blogCard/blogCard.css";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const BlogCard = ({ title, description, date, url, img, isLarge }) => {
  const navigate = useNavigate();
  
  return (
    <div className={isLarge ? `large-container` : `medium-container `}>
      <div className="img-container">
        {isLarge ? (
          <img src={`public/blog/${img}.svg`} alt="blog" />
        ) : (
          <img src={`public/blog/${img}.svg`} alt="blog" />
        )}
      </div>

      <div className={isLarge ? `large-content` : `medium-content`}>
        <h2>{title}</h2>

        {isLarge && (
          <p>{description}</p>
        )}

        <div className="date-more-container">
          <p className="date">{date}</p>
          <a className="view-more" onClick={() => navigate( url )}>
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isLarge: PropTypes.bool.isRequired,
};

export default BlogCard;
