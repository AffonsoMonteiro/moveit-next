import { ChallengesProvider } from '../contexts/challengesContext'
import { useState } from 'react'


import '../styles/global.css'
function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
