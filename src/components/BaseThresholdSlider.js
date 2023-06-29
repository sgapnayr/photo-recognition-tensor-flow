import React, { useState } from 'react'

const Slider = ({ threshold, setThreshold, min, max, step, onChange }) => {
  function handleSlider(event) {
    const newThreshold = event.target.value
    setThreshold(newThreshold)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-x-2 items-center">
        <span className="opacity-50 font-bold text-sm">Accuracy: </span>
        <span className={`font-bold text-sm ${threshold <= 33 ? 'text-red-500' : threshold > 33 && threshold <= 66 ? 'text-orange-400' : 'text-green-500'}`}>
          {threshold <= 33 ? 'Least' : threshold > 33 && threshold <= 66 ? 'Medium' : 'Most'}
        </span>
      </div>
      <div className="flex gap-x-2">
        <div className="text-red-500 font-bold">Least</div>
        <input type="range" min={min} max={max} step={step} value={threshold} onChange={handleSlider} />
        <div className="text-green-500 font-bold">Most</div>
      </div>
    </div>
  )
}

export default Slider
