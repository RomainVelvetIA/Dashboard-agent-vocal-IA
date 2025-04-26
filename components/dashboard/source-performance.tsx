"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell
} from 'recharts'

const data = [
  {
    name: 'Google Ads',
    appels: 452,
    rdv: 86,
  },
  {
    name: 'Meta Ads',
    appels: 386,
    rdv: 67,
  },
  {
    name: 'Site Web',
    appels: 298,
    rdv: 48,
  },
  {
    name: 'LinkedIn',
    appels: 184,
    rdv: 29,
  },
  {
    name: 'CRM',
    appels: 142,
    rdv: 21,
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/80 backdrop-blur-sm p-3 border border-border/50 rounded-lg shadow-md">
        <p className="font-medium text-sm text-primary-foreground">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <p className="text-xs">
                <span className="text-muted-foreground">{entry.name}: </span>
                <span className="font-medium text-primary-foreground">{entry.value} appels</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function SourcePerformance() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} 
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: 10, fontSize: 12 }}
            formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
          />
          <Bar 
            dataKey="appels" 
            name="Appels effectués" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-appels-${index}`} 
                fill={`rgba(99, 102, 241, ${0.5 + (index * 0.1)})`} 
              />
            ))}
          </Bar>
          <Bar 
            dataKey="rdv" 
            name="RDV bookés" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-rdv-${index}`} 
                fill={`rgba(139, 92, 246, ${0.5 + (index * 0.1)})`} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 