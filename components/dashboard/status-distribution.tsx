"use client"

import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'

const data = [
  { name: 'Qualifiés', value: 385 },
  { name: 'Non qualifiés', value: 418 },
  { name: 'Sans réponse', value: 431 },
]

const COLORS = ['#8b5cf6', '#3b82f6', '#475569']

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/80 backdrop-blur-sm p-3 border border-border/50 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: payload[0].payload.fill }}
          />
          <p className="font-medium text-sm text-primary-foreground">{payload[0].name}</p>
        </div>
        <p className="mt-1 font-bold text-xs text-primary">
          {payload[0].value} appels <span className="text-muted-foreground ml-1">({(payload[0].percent * 100).toFixed(0)}%)</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  if (percent < 0.1) return null;
  
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function StatusDistribution() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={CustomLabel}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="rgba(0,0,0,0.1)"
                strokeWidth={3}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            formatter={(value, entry) => <span className="text-xs text-muted-foreground">{value}</span>}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
} 