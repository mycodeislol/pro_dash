import { useQuery } from '@tanstack/react-query'
import { fetchProducts, fetchProductById, fetchAnalytics } from '../api/productApi'
export const useProducts = () => useQuery(['products'], fetchProducts, { staleTime:1000*60*5 })
export const useProduct = (id) => useQuery(['product', id], () => fetchProductById(id), { enabled: !!id })
export const useAnalytics = () => useQuery(['analytics'], fetchAnalytics, { staleTime:1000*60 })
