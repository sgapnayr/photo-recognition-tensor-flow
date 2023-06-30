import React from 'react'

const BaseHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8">
      <h1 className="text-3xl text-center font-semibold italic">
        <span
          className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradientAnimation 5s ease infinite',
          }}
        >
          Real-Time Body Part Recognition:
        </span>
      </h1>
      <br />
      <span className="text-gray-800 text-xl font-light pb-2 -mt-4 whitespace-pre" style={{ opacity: 0.8 }}>
        Advancing Human-Computer Interaction
      </span>
    </div>
  )
}

export default BaseHeader
