import React, { useEffect } from 'react'
import '../App.css'

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="loading-screen">
      <h1>Welcome to IKAG Auto Solutions</h1>
      <p>DFW LOCAL. VETERAN OWNED. FAMILY OPERATED.</p>
      <div className="loader" />
    </div>
  )
}

export default LoadingScreen
