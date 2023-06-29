import React from 'react'

export default function BaseModeSelector({ setLiveOrUploadMode, liveOrUploadMode }) {
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center pt-4">
      <div className="flex items-center justify-center bg-gray-100 pt-2">
        <div
          onClick={() => setLiveOrUploadMode('Live')}
          className={`px-6 py-2 border-2 border-y-2 cursor-pointer font-semibold rounded-l-xl ${
            liveOrUploadMode === 'Live' ? 'bg-blue-500 text-white shadow-md' : 'bg-white hover:opacity-50'
          }`}
        >
          Live
        </div>
        <div
          onClick={() => setLiveOrUploadMode('About')}
          className={`px-6 py-2 border-r-2 border-y-2 cursor-pointer font-semibold rounded-r-xl ${
            liveOrUploadMode === 'About' ? 'bg-blue-500 text-white shadow-md' : 'bg-white hover:opacity-50'
          }`}
        >
          About
        </div>
      </div>
    </div>
  )
}
