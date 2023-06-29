import React from 'react'

const BaseHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-blue-500 py-4 drop-shadow-md">
      <h1 className="text-white text-3xl text-center font-semibold italic">Real-Time Body Part Recognition:</h1>
      <br />
      <span className="text-gray-200 text-2xl font-light pb-2 -mt-4 whitespace-pre">Advancing Human-Computer Interaction</span>
    </div>
  )
}

export default BaseHeader
