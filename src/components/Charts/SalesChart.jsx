import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
export default function SalesChart({data}){
  return (
    <div className='card p-4 rounded-2xl shadow-sm border'>
      <h4 className='font-semibold mb-2'>Sales (12 months)</h4>
      <ResponsiveContainer width='100%' height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='sales' stroke='var(--accent)' strokeWidth={3} dot={{r:2}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
