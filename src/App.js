import React, { useState } from 'react'
import BaseHeader from './components/BaseHeader'
import BaseModeSelector from './components/BaseModeSelector'
import PageLive from './pages/PageLive'
import PageAbout from './pages/PageAbout'
import PageUpload from './pages/PageUpload'
import PageDonate from './pages/PageDonate'
import PageElement from './pages/PageElement'
import BaseModal from './components/BaseModal'
import BaseFooter from './components/BaseFooter'

function App() {
  const [liveOrUploadMode, setLiveOrUploadMode] = useState('App')
  const [currentStep, setCurrentStep] = useState(1)
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <BaseHeader />
      <BaseModal currentStep={currentStep} setCurrentStep={setCurrentStep} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {currentStep >= 5 && !modalOpen && <BaseModeSelector setLiveOrUploadMode={setLiveOrUploadMode} liveOrUploadMode={liveOrUploadMode} />}
      {liveOrUploadMode === 'App' && <PageLive liveOrUploadMode={liveOrUploadMode} />}
      {liveOrUploadMode === 'Donate' && <PageElement />}
      {liveOrUploadMode === 'Tech' && <PageAbout />}
      {liveOrUploadMode === 'Upload' && <PageUpload />}
      <BaseFooter />
      <div className="fixed bottom-0 left-0 w-full h-12 bg-gradient-to-b from-gray-100 to-transparent rotate-180"></div>
    </div>
  )
}

export default App
