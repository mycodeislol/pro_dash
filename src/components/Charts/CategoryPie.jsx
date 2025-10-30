import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
const COLORS = ['#06b0ff','#7dd3fc','#60a5fa','#38bdf8','#0284c7','#0369a1','#075985','#083344','#0f172a','#94a3b8']
export default function CategoryPie({data}){
  return (
    <div className='card p-4 rounded-2xl shadow-sm border'>
      <h4 className='font-semibold mb-2'>Category Distribution</h4>
      <ResponsiveContainer width='100%' height={220}>
        <PieChart>
          <Pie data={data} dataKey='value' nameKey='name' innerRadius={40} outerRadius={80} label>
            {data.map((entry, index)=>( <Cell key={index} fill={COLORS[index % COLORS.length]} /> ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
