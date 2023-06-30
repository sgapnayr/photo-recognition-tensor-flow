import React from 'react'

export default function BaseModeSelector({ setLiveOrUploadMode, liveOrUploadMode }) {
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center">
      <div className="flex items-center justify-center bg-gray-100 text-lg">
        <div
          onClick={() => setLiveOrUploadMode('Live')}
          className={`px-6 py-2 cursor-pointer font-semibold rounded-l-xl transition-opacity duration-300 text-gray-800 ${
            liveOrUploadMode === 'Live' ? 'relative opacity-100' : 'hover:opacity-50 opacity-75'
          }`}
        >
          {liveOrUploadMode === 'Live' && <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />}
          Live
        </div>
        <div
          onClick={() => setLiveOrUploadMode('About')}
          className={`px-6 py-2 cursor-pointer font-semibold rounded-r-xl transition-opacity duration-300 text-gray-800 ${
            liveOrUploadMode === 'About' ? 'relative opacity-100' : 'hover:opacity-50 opacity-75'
          }`}
        >
          {liveOrUploadMode === 'About' && <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />}
          About
        </div>
      </div>
    </div>
  )
}
