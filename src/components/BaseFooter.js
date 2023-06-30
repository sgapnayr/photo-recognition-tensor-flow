import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 text-gray-400">
      <div className="container mx-auto text-center">
        <span className="text-gray-500 text-xl font-light pb-2 whitespace-pre" style={{ opacity: 0.8 }}>
          Advancing Human-Computer Interaction
        </span>
        <p className="text-sm mt-4">© {new Date().getFullYear()} Tensorflotorecognition. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
