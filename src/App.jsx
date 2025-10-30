import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import useTheme from './store/useTheme'

const HomePage = lazy(()=> import('./pages/HomePage'))
const ProductsPage = lazy(()=> import('./pages/ProductsPage'))
const ProductDetailPage = lazy(()=> import('./pages/ProductDetailPage'))
const ProfilePage = lazy(()=> import('./pages/ProfilePage'))
const SettingsPage = lazy(()=> import('./pages/SettingsPage'))
const AuthPage = lazy(()=> import('./pages/AuthPage'))

export default function App(){ 
  const { theme } = useTheme()
  useEffect(()=>{
    if(theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[theme])
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="p-6 max-w-7xl mx-auto">
        <Suspense fallback={<LoadingScreen/>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/products/:id" element={<ProductDetailPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
            <Route path="/auth" element={<AuthPage/>} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  )
}
