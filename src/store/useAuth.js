import { create } from 'zustand'
import axios from 'axios'
import toast from 'react-hot-toast'

const useAuth = create((set)=>({ user: null, loading:false, login: async (email,password)=>{ set({loading:true}); try{ const res = await axios.get('http://localhost:5000/users?email='+encodeURIComponent(email)); const users = res.data; const existing = users.find(u=>u.password===password); if(existing){ set({user: existing, loading:false}); toast.success('Logged in'); return {ok:true, user:existing} } else { set({loading:false}); toast.error('Invalid credentials'); return {ok:false, message:'Invalid credentials'} } }catch(e){ set({loading:false}); toast.error('Network error'); return {ok:false, message:e.message} } }, signup: async (name,email,password)=>{ set({loading:true}); try{ const post = await axios.post('http://localhost:5000/users',{name,email,password}); set({user: post.data, loading:false}); toast.success('Account created'); return {ok:true, user:post.data} }catch(e){ set({loading:false}); toast.error('Signup error'); return {ok:false, message:e.message} } }, logout: ()=> { set({user:null}); toast('Logged out') } }))
export default useAuth
