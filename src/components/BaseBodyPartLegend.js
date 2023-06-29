import React, { useEffect } from 'react'

const BaseBodyPartLegend = ({ colorsOnScreen, scores = '0.0', threshold, onThresholdChange }) => {
  const bodyPartByColor = {
    rightElbow: [255, 140, 56],
    rightEar: [143, 61, 178],
    leftEar: [110, 64, 170],
    rightWrist: [194, 219, 64],
    leftWrist: [217, 193, 49],
    rightShoulder: [255, 78, 125],
    leftShoulder: [210, 62, 167],
    chestTorso: [175, 240, 91],
    rightArm: [239, 166, 46],
    rightOuterArm: [255, 140, 56],
    leftArm: [255, 115, 75],
    leftOuterArm: [255, 94, 99],
    rightCalf: [33, 176, 213],
    rightShin: [47, 150, 224],
    rightFoot: [84, 101, 214],
    rightThigh: [96, 247, 96],
    leftCalf: [64, 125, 224],
    leftShin: [27, 198, 193],
    leftFoot: [194, 219, 64],
    leftThigh: [40, 234, 141],
  }

  const toTitleCase = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add a space between lowercase and uppercase letters
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const getBodyPart = (color) => {
    const matchingParts = Object.entries(bodyPartByColor).reduce((parts, [part, partColor]) => {
      const colorString = partColor.join(', ')
      if (colorString === color) {
        parts.push(part)
      }
      return parts
    }, [])

    if (matchingParts.length > 0) {
      return matchingParts.map((part, idx) => <div key={idx}>{toTitleCase(part)}</div>)
    } else {
      return null
    }
  }

  const bodyPart = colorsOnScreen.map((color, idx) => {
    const parts = getBodyPart(color)
    if (parts) {
      return <div key={idx}>{parts}</div>
    }
    return null
  })

  useEffect(() => {
    // Call the provided onThresholdChange callback whenever the threshold prop changes
    if (typeof onThresholdChange === 'function') {
      onThresholdChange(threshold)
    }
  }, [threshold, onThresholdChange])

  return (
    <div className="flex flex-col text-center">
      <p className="opacity-20">Confidence: ~{scores * 100}%</p>
      <h3 className="text-lg font-bold underline opacity-50">Body Parts Seen on WebCam</h3>
      <div className="font-[700] text-xl drop-shadow-sm">{bodyPart}</div>
    </div>
  )
}

export default BaseBodyPartLegend
