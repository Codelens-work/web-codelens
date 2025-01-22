import React from 'react'
import PropTypes from "prop-types";

const LegalHeader = ({title}) => {
  return (
    <div className='legal-header'>
      <h2>{title}</h2>
    </div>
  )
}
LegalHeader.propTypes={
  title: PropTypes.string,
}

export default LegalHeader
