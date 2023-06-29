import React, { useState } from 'react'
import BaseHeader from './components/BaseHeader'
import BaseModeSelector from './components/BaseModeSelector'
import PageLive from './pages/PageLive'
import PageAbout from './pages/PageAbout'
import BaseModal from './components/BaseModal'

function App() {
  const [liveOrUploadMode, setLiveOrUploadMode] = useState('Live')

  return (
    <>
      <BaseHeader />
      <BaseModeSelector setLiveOrUploadMode={setLiveOrUploadMode} liveOrUploadMode={liveOrUploadMode} />
      <BaseModal />
      {liveOrUploadMode === 'Live' && <PageLive liveOrUploadMode={liveOrUploadMode} />}
      {liveOrUploadMode === 'About' && <PageAbout />}
    </>
  )
}

export default App
