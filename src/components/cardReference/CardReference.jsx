import './cardReference.css';
import PropTypes from 'prop-types';

const CardReference = ({ logo, businessName, personFullname, content, siteUrl }) => {
    return (
        <article className="card-reference">
            <div className="card-reference-header">
               <picture className='logo-container'>
                <img src={logo} alt={businessName} className="client-logo" />
               </picture>
                <div className="client-info">
                    <h3 className="business-name">{businessName}</h3>
                    <p className="person-name">{personFullname}</p>
                </div>
            </div>
            <div className="card-reference-content">
                <picture className='quote-container'>
                    <img src="/icons/quote.svg" alt="quote" className="quote-img quote-left" />
                </picture>
                <p className="testimonial-text">{content}</p>
                <picture className='quote-container'>
                    <img src="/icons/quote.svg" alt="quote" className="quote-img quote-rigth" />
                </picture>
            </div>
            <div className="card-reference-footer">
                <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="client-site-link">
                   Link
                </a>
            </div>
        </article>
    );
};

CardReference.propTypes = {
    logo: PropTypes.string.isRequired,
    businessName: PropTypes.string.isRequired,
    personFullname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired
};

export default CardReference;