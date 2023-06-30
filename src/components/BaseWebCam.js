import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import '../assets/css/utils.css'
import * as tf from '@tensorflow/tfjs'
import * as bodypix from '@tensorflow-models/body-pix'
import BaseSpinner from '../components/BaseSpinner'

export default function BaseWebCam({ playButton, setColorsOnScreen, setBodyParts, letLoad }) {
  const webcamRef = useRef()
  const canvasRef = useRef()
  const [intervalId, setIntervalId] = useState(null)

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

      // Convert colored part mask to TensorFlow tensor
      const colorTensor = tf.browser.fromPixels(colorBodyPart)

      // Extract the colors from the tensor
      const colors = colorTensor.arraySync()

      // Place colors on set, filter colors so no repeating
      const uniqueColors = new Set()

      colors.forEach((row) => {
        row.forEach((color) => {
          uniqueColors.add(color.join(', '))
        })
      })

      // Convert set to array and update state
      const uniqueColorsArray = Array.from(uniqueColors)
      setColorsOnScreen(uniqueColorsArray)

      // Draw canvas
      bodypix.drawMask(canvasRef.current, video, colorBodyPart, 1, 0, false)

      setBodyParts(person.allPoses?.map((pose) => pose.score))

      net.dispose()
    }
  }

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

  return (
    <div className="flex rounded-xl justify-start items-center flex-col relative overflow-hidden my-4 grow">
      {letLoad && <BaseSpinner />}
      <canvas ref={canvasRef} className={`w-full mx-4 grow invisible rounded-xl scale-90 drop-shadow-lg sm:scale-100 ${letLoad ? 'invisble' : ''}`} />
      <Webcam ref={webcamRef} className={`w-full mx-4 grow  absolute rounded-xl scale-90 drop-shadow-lg sm:scale-100 ${letLoad ? 'invisble opacity-40 animate-pulse' : ''}`} />
    </div>
  )
}
