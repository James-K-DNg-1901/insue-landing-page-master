import { useState } from 'react'
import NavBar from './components/navBar'
import WebIntro from './components/webIntro'
import WebBody from './components/webBody'
import WebFooter from './components/webFooter'

function App() {
  return (
    <>
      <NavBar />
      <WebIntro />
      <WebBody />
      <WebFooter />
    </>
  )
}

export default App
