import React, { useState, useEffect } from 'react'

export default function StartStopButton({ playButton, setPlayButton, bodyParts }) {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (playButton) {
      setShowLoader(true)

      const timer = setTimeout(() => {
        if (bodyParts) {
          setShowLoader(false)
        }
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [playButton])

  return (
    <div
      onClick={() => setPlayButton(!playButton)}
      className={`${
        playButton
          ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
      } text-white font-bold py-2 px-4 rounded w-[300px] active:scale-90 transition cursor-pointer text-center my-4 shadow-md ${showLoader ? 'bg-gray-500' : ''}`}
    >
      {showLoader && (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      )}
      {!showLoader && <span> {playButton ? 'Pause' : 'Analyze'}</span>}
    </div>
  )
}
