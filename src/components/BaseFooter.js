import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 text-gray-400">
      <div className="container mx-auto text-center">
        <p className="text-sm mt-4">© {new Date().getFullYear()} Tensorflotorecognition. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
