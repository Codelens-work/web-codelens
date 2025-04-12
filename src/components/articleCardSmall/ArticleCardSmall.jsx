import "./articleCardSmall.css";


const ArticleCardSmall = ({ image, description, alt }) => {
    return (
      <div className="card">
        <picture>
            <img src={image} alt={alt} className="card-image img-full" />
        </picture>
        <div className="card-content">
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ArticleCardSmall;