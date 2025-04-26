"use client"

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  ComposedChart
} from 'recharts'

const data = [
  {
    name: 'Lun',
    appels: 89,
    reponses: 65,
    qualifies: 42,
    rdv: 24,
  },
  {
    name: 'Mar',
    appels: 102,
    reponses: 71,
    qualifies: 48,
    rdv: 28,
  },
  {
    name: 'Mer',
    appels: 114,
    reponses: 76,
    qualifies: 52,
    rdv: 31,
  },
  {
    name: 'Jeu',
    appels: 95,
    reponses: 67,
    qualifies: 44,
    rdv: 26,
  },
  {
    name: 'Ven',
    appels: 108,
    reponses: 74,
    qualifies: 50,
    rdv: 29,
  },
  {
    name: 'Sam',
    appels: 67,
    reponses: 48,
    qualifies: 31,
    rdv: 18,
  },
  {
    name: 'Dim',
    appels: 45,
    reponses: 32,
    qualifies: 21,
    rdv: 12,
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
                <span className="font-medium text-primary-foreground">{entry.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function PerformanceChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorAppels" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRDV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255,255,255,0.3)" 
            tick={{ fill: 'rgba(255,255,255,0.6)' }}
          />
          <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ 
              paddingTop: "10px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.6)"
            }} 
          />
          <Area 
            type="monotone" 
            dataKey="appels" 
            fill="url(#colorAppels)" 
            stroke="#8884d8" 
            strokeWidth={2}
            name="Appels effectués"
          />
          <Line 
            type="monotone" 
            dataKey="reponses" 
            stroke="#6366f1" 
            strokeWidth={2}
            name="Réponses"
            dot={{ r: 3, fill: '#6366f1', stroke: '#6366f1', strokeWidth: 1 }}
            activeDot={{ r: 5, fill: '#6366f1', stroke: '#fff', strokeWidth: 1 }}
          />
          <Line 
            type="monotone" 
            dataKey="qualifies" 
            stroke="#0ea5e9" 
            strokeWidth={2}
            name="Qualifiés"
            dot={{ r: 3, fill: '#0ea5e9', stroke: '#0ea5e9', strokeWidth: 1 }}
            activeDot={{ r: 5, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 1 }}
          />
          <Line 
            type="monotone" 
            dataKey="rdv" 
            stroke="#a855f7" 
            strokeWidth={2}
            name="RDV bookés"
            dot={{ r: 3, fill: '#a855f7', stroke: '#a855f7', strokeWidth: 1 }}
            activeDot={{ r: 5, fill: '#a855f7', stroke: '#fff', strokeWidth: 1 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
} 