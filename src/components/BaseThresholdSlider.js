import React, { useState } from 'react'

const Slider = ({ threshold, setThreshold, min, max, step, onChange, playButton }) => {
  function handleSlider(event) {
    const newThreshold = event.target.value
    setThreshold(newThreshold)
  }

  const getLabelStyle = (label) => {
    if (label === 'Least') {
      return {
        color: playButton ? '#FF4B2B' : '#4F46E5',
      }
    }
    if (label === 'Medium') {
      return {
        background: playButton ? 'linear-gradient(to right, #FF8300, #FFD700)' : 'linear-gradient(to right, #4F46E5, #8C1BAB)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      }
    }
    if (label === 'Most') {
      return {
        color: playButton ? '#6BCD07' : '#8C1BAB',
      }
    }
    return {}
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-x-2 items-center">
        <span className="opacity-50 font-bold text-sm">Accuracy: </span>
        <span className="font-bold text-sm" style={getLabelStyle(threshold <= 33 ? 'Least' : threshold > 33 && threshold <= 66 ? 'Medium' : 'Most')}>
          {threshold <= 33 ? 'Least' : threshold > 33 && threshold <= 66 ? 'Medium' : 'Most'}
        </span>
      </div>
      <div className="flex gap-x-2">
        <div style={getLabelStyle('Least')} className="font-bold">
          Least
        </div>
        <input type="range" min={min} max={max} step={step} value={threshold} onChange={handleSlider} />
        <div style={getLabelStyle('Most')} className="font-bold">
          Most
        </div>
      </div>
    </div>
  )
}

export default Slider
