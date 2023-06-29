import React from 'react'

export default function StartStopButton({ playButton, setPlayButton }) {
  return (
    <div
      onClick={() => setPlayButton(!playButton)}
      className={`${
        playButton ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
      } text-white font-bold py-2 px-4 rounded w-[300px] active:scale-90 transition cursor-pointer text-center my-4 shadow-md`}
    >
      {playButton ? 'Pause' : 'Start'}
    </div>
  )
}
