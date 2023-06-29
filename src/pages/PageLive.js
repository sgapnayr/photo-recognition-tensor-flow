import React, { useEffect, useState } from 'react'
import BaseBodyPartLegend from '../components/BaseBodyPartLegend'
import BaseStartStopButton from '../components/BaseStartStopButton'
import BaseWebCam from '../components/BaseWebCam'
import BaseThresholdSlider from '../components/BaseThresholdSlider'

export default function PageLive() {
  const [bodyParts, setBodyParts] = useState([])
  const [playButton, setPlayButton] = useState(false)
  const [colorsOnScreen, setColorsOnScreen] = useState([])
  const [threshold, setThreshold] = useState(50)
  const [letLoad, setLetLoad] = useState(false)

  const handleThresholdChange = (newThreshold) => {
    setThreshold(newThreshold)
  }

  useEffect(() => {
    setLetLoad(true)
    setTimeout(() => {
      setLetLoad(false)
    }, 2500)
  }, [])

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col justify-start items-center">
      <BaseWebCam playButton={playButton} setColorsOnScreen={setColorsOnScreen} setBodyParts={setBodyParts} letLoad={letLoad} />
      <BaseThresholdSlider threshold={threshold} setThreshold={setThreshold} />
      <BaseStartStopButton playButton={playButton} setPlayButton={setPlayButton} />
      <BaseBodyPartLegend colorsOnScreen={colorsOnScreen} scores={bodyParts} threshold={threshold} setThreshold={setThreshold} onThresholdChange={handleThresholdChange} />
    </div>
  )
}
