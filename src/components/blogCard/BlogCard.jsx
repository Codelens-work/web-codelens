import React from "react";
import "/src/components/blogCard/blogCard.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

const BlogCard = ({ title, description, date, url, img, isLarge }) => {
  const { t } = useTranslation()
  const navigate = useNavigate();

  const more =t('blog.navigation.more')
  
  return (
    <div className={isLarge ? `large-container` : `medium-container `}>
      <div className="img-container">
        {isLarge ? (
          <img src={img} alt="blog" />
        ) : (
          <img src={img} alt="blog" />
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
            {more}
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
