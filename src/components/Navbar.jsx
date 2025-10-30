import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAuth from '../store/useAuth'
import useTheme from '../store/useTheme'

export default function Navbar(){
  const loc = useLocation()
  const { user, logout } = useAuth()
  const { theme, toggle } = useTheme()
  return (
    <motion.header initial={{ y:-30, opacity:0 }} animate={{ y:0, opacity:1 }} className="sticky top-0 z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-xl text-sky-700 dark:text-sky-300">ProDash</Link>
        <nav className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
          <Link to="/" className={loc.pathname==='/'? 'text-sky-600 font-medium':'hover:text-sky-500'}>Home</Link>
          <Link to="/products" className={loc.pathname.startsWith('/products')? 'text-sky-600 font-medium':'hover:text-sky-500'}>Products</Link>
          <Link to="/profile" className={loc.pathname==='/profile'? 'text-sky-600 font-medium':'hover:text-sky-500'}>Account</Link>
          <Link to="/settings" className={loc.pathname==='/settings'? 'text-sky-600 font-medium':'hover:text-sky-500'}>Settings</Link>
          <button onClick={toggle} className="px-2 py-1 rounded bg-sky-50 dark:bg-sky-800 text-sky-700 dark:text-white text-xs">Toggle {theme==='dark'?'Light':'Dark'}</button>
          <Link to="/auth" className="px-3 py-1 bg-sky-600 text-white rounded-lg">{user? 'Account':'Login'}</Link>
          {user && <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300">Logout</button>}
        </nav>
      </div>
    </motion.header>
  )
}
