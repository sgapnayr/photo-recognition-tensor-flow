import React, { useState } from 'react'
import BaseHeader from './components/BaseHeader'
import BaseModeSelector from './components/BaseModeSelector'
import PageLive from './pages/PageLive'
import PageUpload from './pages/PageUpload'

function App() {
  const [liveOrUploadMode, setLiveOrUploadMode] = useState('Live')

  return (
    <>
      <BaseHeader />
      <BaseModeSelector setLiveOrUploadMode={setLiveOrUploadMode} liveOrUploadMode={liveOrUploadMode} />
      {liveOrUploadMode === 'Live' && <PageLive />}
      {liveOrUploadMode === 'Upload' && <PageUpload />}
    </>
  )
}

export default App
