import "/src/components/blogCard/blogCard.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import { article } from "framer-motion/client";

const BlogCard = ({ title, description, date, url, img, isLarge }) => {
  const { t } = useTranslation()
  const navigate = useNavigate();

  const more =t('blog.navigation.more')
  
  return (
   <article className="card-blog-article"  onClick={() => navigate( url )}>
      <div className={isLarge ? `large-container` : `medium-container `}>
        <picture className="img-container">
          {isLarge ? (
            <img src={img} alt="blog" />
          ) : (
            <img src={img} alt="blog" />
          )}
        </picture>

        <div className={isLarge ? `large-content` : `medium-content`}>
          <h2 className="title-card-article-blog">{title}</h2>

          {isLarge && (
            <p>{description}</p>
          )}

          <div className="date-more-container">
            <p className="date">{date}</p>
            <span className="view-more">
              {more}
            </span>
          </div>
        </div>
      </div>
   </article>
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
