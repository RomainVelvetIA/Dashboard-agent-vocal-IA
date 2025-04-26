"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Données factices pour la démo
const comparativeData = [
  {
    name: 'Sem 1',
    agent: 217,
    humain: 159,
  },
  {
    name: 'Sem 2',
    agent: 230,
    humain: 291,
  },
  {
    name: 'Sem 3',
    agent: 263,
    humain: 369,
  },
  {
    name: 'Sem 4',
    agent: 281, 
    humain: 416,
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
                <span className="font-medium text-primary-foreground">{entry.value}%</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function ROIComparison() {
  return (
    <Card className="overflow-hidden border-t-4 border-t-green-500/20">
      <CardHeader>
        <CardTitle>ROI Agent vs Humain</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[215px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparativeData}
              margin={{
                top: 15,
                right: 20, 
                left: 0,
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
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: 10, fontSize: 12 }}
                formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
              />
              <Bar 
                dataKey="agent" 
                name="ROI Agent Vocal" 
                radius={[4, 4, 0, 0]}
                fill="#10b981"
              />
              <Bar 
                dataKey="humain" 
                name="ROI Setter Humain" 
                radius={[4, 4, 0, 0]}
                fill="#6366f1"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          Rendez-vous: 25% de conversion en vente · Vente moyenne: 500€
        </div>
      </CardContent>
    </Card>
  )
} 