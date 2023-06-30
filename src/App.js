import React, { useState } from 'react'
import BaseHeader from './components/BaseHeader'
import BaseModeSelector from './components/BaseModeSelector'
import PageLive from './pages/PageLive'
import PageAbout from './pages/PageAbout'
import BaseModal from './components/BaseModal'

function App() {
  const [liveOrUploadMode, setLiveOrUploadMode] = useState('Live')
  const [currentStep, setCurrentStep] = useState(1)
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <BaseHeader />
      <BaseModal currentStep={currentStep} setCurrentStep={setCurrentStep} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {currentStep >= 3 && !modalOpen && <BaseModeSelector setLiveOrUploadMode={setLiveOrUploadMode} liveOrUploadMode={liveOrUploadMode} />}
      {liveOrUploadMode === 'Live' && <PageLive liveOrUploadMode={liveOrUploadMode} />}
      {liveOrUploadMode === 'About' && <PageAbout />}
    </div>
  )
}

export default App
