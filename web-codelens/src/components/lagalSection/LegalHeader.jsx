import React from 'react'
import PropTypes from "prop-types";

const LegalHeader = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
LegalHeader.propTypes={
  title: PropTypes.string,
}

export default LegalHeader
