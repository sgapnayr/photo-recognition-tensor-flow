import React, { useState } from 'react'
import { Slider } from '@material-tailwind/react'

const BaseSlider = ({ threshold, setThreshold, min, max, step, onChange, playButton }) => {
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
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
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
        <span className="opacity-50 font-bold text-lg">Accuracy: </span>
        <span className="font-bold text-lg" style={getLabelStyle(threshold <= 33 ? 'Least' : threshold > 33 && threshold <= 66 ? 'Medium' : 'Most')}>
          {threshold <= 33 ? 'Least' : threshold > 33 && threshold <= 66 ? 'Medium' : 'Most'}
        </span>
      </div>
      <div className="flex gap-x-2">
        <div style={getLabelStyle('Least')} className="font-bold text-lg">
          Least
        </div>
        <div className="w-48 flex mt-2">
          <Slider size="lg" value={threshold} onChange={handleSlider} />
        </div>
        <div style={getLabelStyle('Most')} className="font-bold text-lg">
          Most
        </div>
      </div>
    </div>
  )
}

export default BaseSlider
