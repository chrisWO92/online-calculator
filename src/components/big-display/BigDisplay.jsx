import React from 'react'
import './big-display.css'

const BigDisplay = ({data, result}) => {
  return (
    <div id='big-display'>
        <div className="formulaScreen">
            {result}
          </div>
          <div id="display" className="outputScreen">
            {data}
          </div>      
    </div>
  )
}

export default BigDisplay
