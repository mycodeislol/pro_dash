import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:5000' })
export const fetchProducts = async () => { const res = await API.get('/products'); return res.data }
export const fetchProductById = async (id) => { const res = await API.get(`/products/${id}`); return res.data }
export const fetchAnalytics = async () => { const res = await API.get('/analytics'); return res.data }
