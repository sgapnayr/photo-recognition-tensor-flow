import React, { useRef, useState, useEffect } from 'react'
import Header from './components/Header'
import ImageUploader from './components/ImageUploader'
import ResultDisplay from './components/ResultDisplay'
import * as tf from '@tensorflow/tfjs'
import * as bodypix from '@tensorflow-models/body-pix'
import Webcam from 'react-webcam'
import BodyPartLegend from './components/BodyPartLegend'
import ThresholdSlider from './components/ThresholdSlider'
import StartStopButton from './components/StartStopButton'

function App() {
  const webcamRef = useRef()
  const canvasRef = useRef()
  const [bodyParts, setBodyParts] = useState([])
  const [playButton, setPlayButton] = useState(false)
  const [intervalId, setIntervalId] = useState(null)
  const [threshold, setThreshold] = useState(0.0)

  useEffect(() => {
    let net

    const runBodySegment = async () => {
      net = await bodypix.load()
      detect(net)
    }

    runBodySegment()

    return () => {
      if (net) {
        net.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if (playButton) {
      const newIntervalId = setInterval(() => {
        detect()
      }, 100)

      setIntervalId(newIntervalId)
    } else {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [playButton])

  const detect = async () => {
    if (typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video
      const videoHeight = video.videoHeight
      const videoWidth = video.videoWidth

      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      const net = await bodypix.load()
      const person = await net.segmentPersonParts(video)

      const colorBodyPart = bodypix.toColoredPartMask(person)

      bodypix.drawMask(canvasRef.current, video, colorBodyPart, 0.7, 0, false)

      setBodyParts(person.allPoses?.map((pose) => pose.score))

      net.dispose()
    }
  }

  return (
    <>
      <Header />
      <div className="App bg-gray-100 min-h-screen flex flex-col justify-start items-center">
        <div className="flex w-full justify-start items-center flex-col relative my-8 h-[480px]">
          <canvas ref={canvasRef} className="aspect-w-16 aspect-h-9 absolute z-0 invisible rounded-[16px]" />
          <Webcam ref={webcamRef} className="aspect-w-16 aspect-h-9 absolute -z-0 rounded-[16px] drop-shadow-md" />
        </div>
        <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />
        <StartStopButton playButton={playButton} setPlayButton={setPlayButton} />
        <BodyPartLegend scores={bodyParts} threshold={threshold} setThreshold={setThreshold} />
      </div>
    </>
  )
}

export default App
