import PropTypes from 'prop-types';
import './section.css';

const Section = ({ children, className = '' }) => {
const sectionClass = `section ${className}`.trim();

  return <section className={sectionClass}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;