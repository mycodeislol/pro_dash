import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useTheme = create(persist((set, get) => ({ theme: 'light', toggle: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }) }), { name: 'pro_theme_v2' }))
export default useTheme
