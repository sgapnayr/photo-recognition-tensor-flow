import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import BaseBodyPartLegend from '../components/BaseBodyPartLegend'
import BaseStartStopButton from '../components/BaseStartStopButton'
import BaseWebCam from '../components/BaseWebCam'
import BaseThresholdSlider from '../components/BaseThresholdSlider'

export default function PageLive({ liveOrUploadMode }) {
  const [bodyParts, setBodyParts] = useState([])
  const [playButton, setPlayButton] = useState(false)
  const [colorsOnScreen, setColorsOnScreen] = useState([])
  const [threshold, setThreshold] = useState(50)
  const [letLoad, setLetLoad] = useState(false)
  const [webCamVisible, setWebCamVisible] = useState(true)

  const handleThresholdChange = (newThreshold) => {
    setThreshold(newThreshold)
  }

  useEffect(() => {
    setLetLoad(true)
    setTimeout(() => {
      setLetLoad(false)
    }, 2500)
  }, [])

  const toggleWebCamVisibility = () => {
    setWebCamVisible(!webCamVisible)
  }

  return (
    <div className="App min-h-screen flex flex-col justify-start items-center">
      <div className="relative w-full flex justify-center items-center flex-col">
        {!webCamVisible ? (
          <AiOutlineEyeInvisible className="text-2xl cursor-pointer opacity-50" onClick={toggleWebCamVisibility} />
        ) : (
          <AiOutlineEye className="text-2xl cursor-pointer opacity-50" onClick={toggleWebCamVisibility} />
        )}
        {playButton && webCamVisible && <span className="opacity-50 absolute mt-8 text-sm">(Scroll down if you can't see results)</span>}
      </div>
      <div className={webCamVisible ? '' : 'invisible absolute'}>
        <BaseWebCam playButton={playButton} setColorsOnScreen={setColorsOnScreen} setBodyParts={setBodyParts} letLoad={letLoad} />
      </div>
      <BaseThresholdSlider threshold={threshold} setThreshold={setThreshold} />
      <BaseStartStopButton playButton={playButton} setPlayButton={setPlayButton} bodyParts={bodyParts} letLoad={letLoad} />
      <BaseBodyPartLegend colorsOnScreen={colorsOnScreen} scores={bodyParts} threshold={threshold} setThreshold={setThreshold} onThresholdChange={handleThresholdChange} />
    </div>
  )
}
