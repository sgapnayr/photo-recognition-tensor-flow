import React, { useState, useEffect } from 'react'

export default function StartStopButton({ playButton, setPlayButton, bodyParts, letLoad }) {
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
      onClick={letLoad ? () => console.log('Loading...') : () => setPlayButton(!playButton)}
      className={`${
        playButton
          ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
      } text-white font-bold py-4 px-6 mx-6 rounded-lg w-full max-w-[340px] active:scale-95 transition cursor-pointer text-center my-6 shadow-md ${
        letLoad ? 'bg-gradient-to-r from-gray-500 to-gray-400 cursor-not-allowed hover:opacity-50 animate-pulse' : ''
      }`}
    >
      {letLoad ? 'Initializing...' : ''}
      {showLoader && !letLoad && (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-middle motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!showLoader && !letLoad && <span> {playButton ? 'Pause' : 'Analyze'}</span>}
    </div>
  )
}
