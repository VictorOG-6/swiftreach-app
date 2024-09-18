import React from 'react'

const Slider = ({ value, color}) => {

  return (
    <div className="slider-wrapper">
        <div className="slider-circle start-circle" style={{ background: `${color}`}}/>
        <div
          className="slider"
          style={{
            background: `linear-gradient(to right, ${color} ${value}%, #E0E0E030 ${value}%)`,
          }}
        />
        {value === 100 && <div className="slider-circle end-circle" />}
      </div>
  )
}

export default Slider