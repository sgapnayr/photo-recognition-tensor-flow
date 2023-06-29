import React, { useState, useEffect } from 'react'

export default function StartStopButton({ playButton, setPlayButton }) {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (playButton) {
      setShowLoader(true)

      const timer = setTimeout(() => {
        setShowLoader(false)
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
        playButton ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
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
      {!showLoader && <span> {playButton ? 'Pause' : 'Start'}</span>}
    </div>
  )
}
