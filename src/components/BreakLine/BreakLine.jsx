/* eslint-disable react/prop-types */
import React from 'react'

const BreakLine = ({ text }) => {
  const line = text.split('\n')

  return (
    <>
      {line.map((linea, index) => (
        <React.Fragment key={index}>
          {linea}
          <br />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export default BreakLine
