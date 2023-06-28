import React, { useEffect } from 'react'

const BodyPartLegend = ({ colorsOnScreen, scores, threshold, onThresholdChange }) => {
  const bodyParts = {
    nose: 0.9980533123016357,
    leftEye: 0.9954335689544678,
    rightEye: 0.9995456337928772,
    leftEar: 0.33361077308654785,
    rightEar: 0.9880875945091248,
    leftShoulder: 0.9914394617080688,
    rightShoulder: 0.9823103547096252,
    leftElbow: 0.27302297949790955,
    rightElbow: 0.13327018916606903,
    leftWrist: 0.023343998938798904,
    rightWrist: 0.0351378433406353,
    leftHip: 0.009763401933014393,
    rightHip: 0.0023434110917150974,
    leftKnee: 0.008708992972970009,
    rightKnee: 0.007620042993515253,
  }

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
  }

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
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
      <p className="opacity-20">{scores}</p>
      <h3 className="text-lg font-semibold opacity-50">Body Parts in WebCam: </h3>
      <div className="font-[700] text-xl drop-shadow-sm">{bodyPart}</div>
    </div>
  )
}

export default BodyPartLegend
