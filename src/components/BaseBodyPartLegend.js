import React, { useState, useEffect } from 'react'

import { RiUser3Fill, RiThumbUpFill, RiHeartFill } from 'react-icons/ri'
import { FaThumbsUp, FaHeart } from 'react-icons/fa'

const BaseBodyPartLegend = ({ colorsOnScreen, scores, threshold, onThresholdChange }) => {
  const [Confidence, setConfidence] = useState()

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

  const calculateConfidence = () => {
    const recognizedParts = colorsOnScreen.reduce((count, color, idx) => {
      const part = getBodyPart(color)
      return count + (part ? 1 : 0)
    }, 0)

    const totalParts = colorsOnScreen.length
    const calculatedConfidence = Math.round((recognizedParts / totalParts) * 100)
    setConfidence(calculatedConfidence * (threshold / 100))
  }

  const bodyPart = colorsOnScreen.map((color, idx) => {
    const parts = getBodyPart(color)
    if (parts) {
      const icon = getIconForBodyPart(parts[0]) // Get the appropriate icon for the body part
      const colorStyle = {
        backgroundColor: `rgb(${color})`,
      }
      return (
        <div className="bg-white my-2 px-2 p-1 rounded-xl flex items-center justify-between w-full whitespace-nowrap" key={idx}>
          <div className="flex items-center">
            <div className="flex mr-1">
              {icon ? <icon size={24} /> : <RiUser3Fill size={24} />} {/* Render the icon */}
            </div>
            <div className="tet-gray-500 font-[500] text-sm whitespace-nowrap text-start">{parts}</div>
          </div>
          <div className="body-part-color">
            <div className="w-4 h-4 rounded-full" style={colorStyle} /> {/* Render the color circle */}
          </div>
        </div>
      )
    }
    return null
  })

  function getIconForBodyPart(bodyPart) {
    // Define the mapping between body parts and icons here

    const iconMap = {
      rightElbow: RiThumbUpFill,
      rightEar: RiUser3Fill,
      leftEar: RiUser3Fill,
      rightWrist: RiThumbUpFill,
      leftWrist: RiThumbUpFill,
      rightShoulder: RiUser3Fill,
      leftShoulder: RiUser3Fill,
      chestTorso: RiUser3Fill,
      rightArm: RiUser3Fill,
      rightOuterArm: RiUser3Fill,
      leftArm: RiUser3Fill,
      leftOuterArm: RiUser3Fill,
      rightCalf: FaThumbsUp,
      rightShin: FaThumbsUp,
      rightFoot: FaThumbsUp,
      rightThigh: RiUser3Fill,
      leftCalf: FaHeart,
      leftShin: FaHeart,
      leftFoot: FaHeart,
      leftThigh: RiUser3Fill,
    }

    return iconMap[bodyPart]
  }

  useEffect(() => {
    // Call the provided onThresholdChange callback whenever the threshold prop changes
    if (typeof onThresholdChange === 'function') {
      onThresholdChange(threshold)
    }

    // Calculate confidence when colorsOnScreen or scores change
    calculateConfidence()
  }, [threshold, onThresholdChange, colorsOnScreen, scores])

  return (
    <div className="flex flex-col text-center items-center">
      <p className="opacity-20 text-2xl">Confidence: ~{Confidence === 0 ? '<1' : Confidence}%</p>
      <h3 className="text-2xl font-bold opacity-50">Body Parts</h3>
      <div className="font-[700] text-xl drop-shadow-sm w-full whitespace-nowrap">{bodyPart}</div>
    </div>
  )
}

export default BaseBodyPartLegend
