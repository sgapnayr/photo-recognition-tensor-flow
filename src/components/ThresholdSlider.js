import React, { useState } from 'react'

const Slider = ({ min, max, step, onChange }) => {
  const [threshold, setThreshold] = useState(0)

  function handleSlider(event) {
    const newThreshold = event.target.value
    setThreshold(newThreshold)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      Thresh Hold: {threshold}
      <div className="flex gap-x-2">
        <div>0</div>
        <input type="range" min={min} max={max} step={step} value={threshold} onChange={handleSlider} />
        <div>1</div>
      </div>
    </div>
  )
}

export default Slider
