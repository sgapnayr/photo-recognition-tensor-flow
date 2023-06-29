import React from 'react'

export default function BaseModeSelector({ setLiveOrUploadMode, liveOrUploadMode }) {
  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center pt-4">
      <div className="flex items-center justify-center bg-gray-100 pt-2">
        <div
          onClick={() => setLiveOrUploadMode('Live')}
          className={`px-6 py-2 border-2 border-y-2 cursor-pointer hover:opacity-50 ${liveOrUploadMode === 'Live' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Live
        </div>
        <div
          onClick={() => setLiveOrUploadMode('Upload')}
          className={`px-6 py-2 border-r-2 border-y-2 cursor-pointer hover:opacity-50 ${liveOrUploadMode === 'Upload' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Upload
        </div>
      </div>
    </div>
  )
}
