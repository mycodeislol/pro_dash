import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function ProductCard({product}){
  return (
    <motion.article whileHover={{ scale:1.02 }} className="card rounded-2xl p-4 shadow-md border">
      <div className="flex items-start gap-4">
        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{product.category} • ⭐ {product.rating}</p>
          <p className="mt-2 text-sky-600 font-bold">${product.price}</p>
        </div>
        <div className="text-right">
          <p className={product.stock>10? 'text-green-600 text-sm':'text-red-600 text-sm'}>{product.stock} in stock</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/products/${product.id}`} className="text-sky-600 hover:underline">Details →</Link>
        <button className="px-3 py-1 bg-sky-50 text-sky-700 rounded-lg text-sm">Add</button>
      </div>
    </motion.article>
  )
}
