import { useAnalytics, useProducts } from '../hooks/useProducts'
import AnalyticsCard from '../components/AnalyticsCard'
import SalesChart from '../components/Charts/SalesChart'
import CategoryPie from '../components/Charts/CategoryPie'
import FeaturedProducts from '../components/FeaturedProducts'
export default function HomePage(){
  const { data: analytics } = useAnalytics()
  const { data: products, isLoading } = useProducts()
  const featured = products? products.filter(p=>p.featured):[]
  return (
    <section className='space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        <AnalyticsCard title='Total Revenue' value={analytics? '$'+analytics.totalRevenue.toLocaleString() : '—'} sub='Last 12 months' />
        <AnalyticsCard title='Active Users' value={analytics? analytics.activeUsers : '—'} sub='Currently active' />
        <AnalyticsCard title='Products' value={analytics? analytics.products : '—'} sub='Total listed' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2'><SalesChart data={analytics?.salesSeries || []} /></div>
        <div><CategoryPie data={analytics?.categoryDistribution || []} /></div>
      </div>
      <div className='card p-6 rounded-2xl shadow-sm border'>
        <h2 className='text-lg font-semibold mb-4'>Featured Picks</h2>
        {isLoading? <p className='text-sm text-gray-500'>Loading...</p> : <FeaturedProducts products={featured} />}
      </div>
    </section>
  )
}
