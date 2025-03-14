import "./articleCardSmall.css";


const ArticleCardSmall = ({ image, description }) => {
    return (
      <div className="card">
        <picture>
            <img src={image} alt="" className="card-image" />
        </picture>
        <div className="card-content">
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ArticleCardSmall;