import { useProducts } from '../hooks/useProducts'
import useProductStore from '../store/useProductStore'
import ProductCard from '../components/ProductCard'
import SkeletonCard from '../components/SkeletonCard'
import { useEffect } from 'react'
export default function ProductsPage(){
  const { data: products, isLoading, error } = useProducts()
  const { setProducts, products: stored } = useProductStore()
  useEffect(()=>{ if(products) setProducts(products) }, [products, setProducts])
  const display = products || stored || []
  if(error) return <p className='text-center text-red-500'>Failed to load products.</p>
  return (
    <section className='mt-6'>
      <h1 className='text-2xl font-bold mb-4'>Catalog</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {isLoading? Array.from({length:9}).map((_,i)=><SkeletonCard key={i} />) : display.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
