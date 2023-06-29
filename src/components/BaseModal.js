import { useState } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import BaseHeader from './BaseHeader'

export default function Example() {
  const [open, setOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const handleOpen = () => setOpen(!open)
  const handleNextStep = () => setCurrentStep(currentStep + 1)
  const handlePrevStep = () => setCurrentStep(currentStep - 1)

  return (
    <>
      {open && (
        <div className="flex justify-center items-center h-screen">
          <div
            onClick={currentStep === totalSteps ? handleOpen : handleNextStep}
            className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="w-[90%] max-w-md md:max-w-[60%] bg-gray-100 rounded-xl p-4 transition-all shadow-xl">
              <DialogHeader className="text-3xl font-bold text-center text-gray-800">
                <div className="flex flex-col justify-center items-center w-full bg-blue-500 py-4 drop-shadow-md">
                  <h1 className="text-white text-3xl text-center font-semibold italic">Real-Time Body Part Recognition:</h1>
                </div>
              </DialogHeader>
              <DialogBody divider className="text-gray-500">
                {currentStep === 1 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
                    <p>
                      The Body Part Recognition Application analyzes and identifies various body parts shown on a webcam using Tensorflow, React, and other advanced technologies.
                      It provides real-time feedback on detected body parts, their confidence levels, and allows adjustment of the recognition threshold.
                    </p>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800">Components</h2>
                    <p>The application consists of key components:</p>
                    <ul className="list-disc ml-4 text-gray-500">
                      <li>
                        <strong>Webcam Integration:</strong> Interfaces with the user's webcam, capturing live video feed for analysis and detection of body parts.
                      </li>
                      <li>
                        <strong>Color Matching and Detection:</strong> Compares video feed colors with predefined color profiles to identify potential matches and determine the
                        corresponding body parts.
                      </li>
                      <li>
                        <strong>Confidence Calculation:</strong> Calculates confidence levels of recognized body parts based on matching scores and user-defined threshold.
                      </li>
                      <li>
                        <strong>Threshold Adjustment:</strong> Allows users to customize the recognition threshold to control sensitivity of the system.
                      </li>
                    </ul>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800">Technologies Used</h2>
                    <p>The Body Part Recognition Application utilizes state-of-the-art technologies including:</p>
                    <ul className="list-disc ml-4 text-gray-500">
                      <li>
                        <strong>Tensorflow:</strong> Open-source machine learning framework for efficient training and deployment of deep neural networks for real-time analysis of
                        webcam video feed.
                      </li>
                      <li>
                        <strong>React:</strong> JavaScript library for building user interfaces, providing a responsive and interactive interface to view and interact with detected
                        body parts.
                      </li>
                      <li>
                        <strong>Computer Vision:</strong> Employs computer vision techniques including color matching and detection algorithms to identify body parts from the video
                        feed.
                      </li>
                    </ul>
                  </>
                )}

                {/* Rest of the content */}
              </DialogBody>
              <DialogFooter className="flex justify-between w-full">
                {currentStep > 1 && (
                  <Button variant="text" onClick={handlePrevStep} className="text-gray-500 text-lg">
                    <span>Previous</span>
                  </Button>
                )}
                {currentStep < totalSteps && (
                  <Button variant="text" onClick={handleNextStep} className="text-blue-500 text-lg">
                    <span>Next</span>
                  </Button>
                )}
                {currentStep === totalSteps && (
                  <Button variant="text" onClick={handleOpen} className="text-blue-500 text-lg">
                    <span>Go to App</span>
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
