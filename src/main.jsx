import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Lenis from '@studio-freight/lenis'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

if (typeof window !== 'undefined') {
  const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position='top-right' />
    </QueryClientProvider>
  </React.StrictMode>
)
