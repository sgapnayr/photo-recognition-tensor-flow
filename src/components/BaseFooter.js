import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold italic">
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
        <span className="text-gray-100 text-xl font-light pb-2 -mt-4 whitespace-pre" style={{ opacity: 0.8 }}>
          Advancing Human-Computer Interaction
        </span>
        <p className="text-sm mt-8">© {new Date().getFullYear()} Tensorflotorecognition. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
