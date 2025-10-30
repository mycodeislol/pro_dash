import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useProductStore = create(persist((set)=>({ products: [], setProducts: (p)=> set({products:p}) }), {name:'pro_products_v2'}))
export default useProductStore
