import { useState } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import BaseHeader from './BaseHeader'

export default function Example({ currentStep, setCurrentStep, modalOpen, setModalOpen }) {
  const totalSteps = 5

  const handleOpen = () => setModalOpen(!modalOpen)
  const handleNextStep = () => setCurrentStep(currentStep + 1)
  const handlePrevStep = () => setCurrentStep(currentStep - 1)
  const handleSkipToApp = () => setCurrentStep(totalSteps)

  return (
    <>
      {modalOpen && (
        <div className="flex justify-center items-center h-screen">
          <div
            onClick={currentStep === totalSteps ? handleOpen : handleNextStep}
            className={`fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50 overflow-scroll pb-4 transition-opacity ${
              currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
          >
            <div className="w-[85%] max-w-[960px] md:max-w-[720px] bg-gray-100 rounded-xl p-4 transition-all shadow-xl top-8 md:top-1/4 absolute overflow-scroll">
              <DialogHeader className="text-2xl font-bold text-center text-gray-800">
                <div className="flex flex-col justify-center items-center w-full">
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
                </div>
              </DialogHeader>
              <DialogBody divider className={`text-gray-700 ${currentStep === 0 ? 'hidden' : 'block'}`}>
                {currentStep === 1 && (
                  <>
                    <h2 className="text-xl font-bold text-gray-800">Introduction</h2>
                    <p className="text-lg">
                      The Body Part Recognition Application analyzes and identifies various body parts shown on a webcam using Tensorflow, React, and other advanced technologies.
                      It provides real-time feedback on detected body parts, their confidence levels, and allows adjustment of the recognition threshold.
                    </p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-xl font-bold text-gray-800">Components</h2>
                    <p className="text-lg">The application consists of the following key components:</p>
                    <ul className="list-disc ml-4 text-gray-700 text-lg">
                      <li>
                        <strong>Webcam Integration:</strong> Captures live video feed to analyze and detect body parts.
                      </li>
                      <li>
                        <strong>Color Matching and Detection:</strong> Identifies body parts by comparing video feed colors with predefined profiles.
                      </li>
                    </ul>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <h2 className="text-xl font-bold text-gray-800">Components</h2>
                    <p className="text-lg">The application consists of the following key components:</p>
                    <ul className="list-disc ml-4 text-gray-700 text-lg">
                      <li>
                        <strong>Confidence Calculation:</strong> Determines confidence levels of recognized body parts based on matching scores and user-defined threshold.
                      </li>
                      <li>
                        <strong>Threshold Adjustment:</strong> Allows users to customize the recognition threshold for sensitivity control.
                      </li>
                    </ul>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <h2 className="text-xl font-bold text-gray-800">Technologies Used</h2>
                    <p className="text-lg">The Body Part Recognition Application utilizes state-of-the-art technologies including:</p>
                    <ul className="list-disc ml-4 text-gray-700 text-lg">
                      <li>
                        <strong>Tensorflow:</strong> Open-source machine learning framework for real-time analysis of webcam video feed.
                      </li>
                      <li>
                        <strong>React:</strong> JavaScript library for building interactive interfaces to view and interact with detected body parts.
                      </li>
                    </ul>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <h2 className="text-xl font-bold text-gray-800">Technologies Used</h2>
                    <p className="text-lg">The Body Part Recognition Application utilizes state-of-the-art technologies including:</p>
                    <ul className="list-disc ml-4 text-gray-700 text-lg">
                      <li>
                        <strong>Stripe:</strong> Payment processing integration for donations.
                      </li>
                      <li>
                        <strong>Computer Vision:</strong> Employs algorithms to identify body parts from the video feed.
                      </li>
                    </ul>
                  </>
                )}
              </DialogBody>
              <DialogFooter className="flex justify-between w-full">
                {currentStep < totalSteps && (
                  <Button variant="text" onClick={handleNextStep} className="text-lg">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Next</span>
                  </Button>
                )}
                {currentStep === totalSteps && (
                  <Button variant="text" onClick={handleSkipToApp} className="text-lg">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Skip to App</span>
                  </Button>
                )}
              </DialogFooter>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
