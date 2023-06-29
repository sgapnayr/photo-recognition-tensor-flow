import React from 'react'

const ResultDisplay = ({ results }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Image Recognition Results</h2>
      {results.map((result, index) => (
        <div key={index} className="bg-gray-100 p-4 my-2">
          <p className="text-lg font-medium">{result.label}</p>
          <p className="text-gray-600">Confidence: {result.confidence}</p>
        </div>
      ))}
    </div>
  )
}

export default ResultDisplay
