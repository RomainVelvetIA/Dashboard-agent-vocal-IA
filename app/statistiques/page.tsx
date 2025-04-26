'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// KPI Data
const kpiData = [
  {
    title: "Total d'appels",
    value: "1,892",
    change: "+8.2%",
    changeType: "positive",
    changeText: "vs. mois précédent",
  },
  {
    title: "Prospects qualifiés",
    value: "762",
    change: "+12.5%",
    changeType: "positive",
    changeText: "vs. mois précédent",
  },
  {
    title: "RDV planifiés",
    value: "284",
    change: "+15.3%",
    changeType: "positive",
    changeText: "vs. mois précédent",
  },
  {
    title: "Taux de conversion",
    value: "37.3%",
    change: "+3.1%",
    changeType: "positive",
    changeText: "vs. mois précédent",
  },
]

// Données pour le ROI et CA comparatif
const roiData = {
  title: "ROI Agent Vocal",
  value: "215%",
  change: "+43.2%",
  changeType: "positive",
  changeText: "vs. setter humain",
}

// Données pour le graphique comparatif Agent vs Humain
const comparativeData = [
  {
    name: 'Sem 1',
    agent_appels: 180,
    agent_rdv: 24,
    agent_cout: 945,
    agent_ca: 3000,
    agent_roi: 217,
    humain_appels: 175,
    humain_rdv: 23,
    humain_cout: 800,
    humain_ca: 2875,
    humain_roi: 159,
  },
  {
    name: 'Sem 2',
    agent_appels: 195,
    agent_rdv: 27,
    agent_cout: 1022,
    agent_ca: 3375,
    agent_roi: 230,
    humain_appels: 185,
    humain_rdv: 25,
    humain_cout: 800,
    humain_ca: 3125,
    humain_roi: 291,
  },
  {
    name: 'Sem 3',
    agent_appels: 210,
    agent_rdv: 32,
    agent_cout: 1102,
    agent_ca: 4000,
    agent_roi: 263,
    humain_appels: 200,
    humain_rdv: 30,
    humain_cout: 800,
    humain_ca: 3750,
    humain_roi: 369,
  },
  {
    name: 'Sem 4',
    agent_appels: 225,
    agent_rdv: 36,
    agent_cout: 1181,
    agent_ca: 4500,
    agent_roi: 281,
    humain_appels: 210,
    humain_rdv: 33,
    humain_cout: 800,
    humain_ca: 4125,
    humain_roi: 416,
  },
]

// Données pour le graphique à barres empilées
const stackedBarData = [
  {
    name: '13 Mai',
    appels: 65,
    reponses: 45,
    qualifies: 32,
    rdv: 18,
  },
  {
    name: '14 Mai',
    appels: 72,
    reponses: 53,
    qualifies: 38,
    rdv: 21,
  },
  {
    name: '15 Mai',
    appels: 81,
    reponses: 60,
    qualifies: 47,
    rdv: 25,
  },
  {
    name: '16 Mai',
    appels: 75,
    reponses: 52,
    qualifies: 39,
    rdv: 19,
  },
  {
    name: '17 Mai',
    appels: 85,
    reponses: 63,
    qualifies: 52,
    rdv: 28,
  },
  {
    name: '18 Mai',
    appels: 62,
    reponses: 41,
    qualifies: 31,
    rdv: 15,
  },
  {
    name: '19 Mai',
    appels: 58,
    reponses: 37,
    qualifies: 28,
    rdv: 13,
  },
]

// Données pour le graphique linéaire d'évolution
const lineChartData = [
  { name: 'Sem 1', calls: 320, responses: 230, qualified: 170, appointments: 85 },
  { name: 'Sem 2', calls: 350, responses: 240, qualified: 185, appointments: 90 },
  { name: 'Sem 3', calls: 380, responses: 260, qualified: 195, appointments: 95 },
  { name: 'Sem 4', calls: 420, responses: 300, qualified: 210, appointments: 105 },
  { name: 'Sem 5', calls: 390, responses: 275, qualified: 200, appointments: 100 },
  { name: 'Sem 6', calls: 430, responses: 310, qualified: 230, appointments: 115 },
  { name: 'Sem 7', calls: 450, responses: 325, qualified: 245, appointments: 125 },
  { name: 'Sem 8', calls: 470, responses: 345, qualified: 260, appointments: 135 },
]

// Données pour le graphique circulaire
const pieChartData = [
  { name: 'Qualifiés', value: 762, color: '#8b5cf6' },
  { name: 'Non qualifiés', value: 485, color: '#e11d48' },
  { name: 'Sans réponse', value: 645, color: '#94a3b8' },
]

// Données pour la heatmap de performance
const heatmapData = {
  hours: ['9h', '10h', '11h', '12h', '14h', '15h', '16h', '17h'],
  days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
  data: [
    [35, 45, 55, 30, 50, 45, 35, 25], // Lundi
    [40, 60, 65, 35, 55, 50, 40, 30], // Mardi
    [50, 70, 75, 40, 60, 55, 45, 35], // Mercredi
    [45, 65, 70, 35, 55, 50, 40, 30], // Jeudi
    [35, 50, 60, 30, 45, 40, 30, 20], // Vendredi
  ],
}

// Composant pour afficher la heatmap
const Heatmap = ({ data, hours, days }: { data: number[][], hours: string[], days: string[] }) => {
  const maxValue = Math.max(...data.flat())
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-[80px_repeat(8,1fr)] gap-1">
        <div className="text-xs text-muted-foreground">&nbsp;</div>
        {hours.map((hour) => (
          <div key={hour} className="text-center text-xs text-muted-foreground">
            {hour}
          </div>
        ))}
        
        {days.map((day, dayIndex) => (
          <>
            <div key={day} className="text-xs text-muted-foreground flex items-center">
              {day}
            </div>
            {data[dayIndex].map((value, hourIndex) => {
              const intensity = (value / maxValue) * 100
              return (
                <div
                  key={`${day}-${hours[hourIndex]}`}
                  className="h-10 rounded-md relative group"
                  style={{
                    backgroundColor: `rgba(139, 92, 246, ${intensity / 100})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}%
                  </div>
                </div>
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}

// Tooltip personnalisé pour les graphiques
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/90 backdrop-blur-sm p-3 border border-border/50 rounded-lg shadow-md">
        <p className="font-medium text-sm text-primary-foreground mb-1">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: entry.color || entry.fill }}
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

export default function StatistiquesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Statistiques</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Cette semaine</SelectItem>
              <SelectItem value="month">Ce mois</SelectItem>
              <SelectItem value="quarter">Ce trimestre</SelectItem>
              <SelectItem value="year">Cette année</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="default">
            Exporter
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="overflow-hidden border-t-4 border-t-primary/40 hover:border-t-primary transition-colors duration-300">
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${kpi.changeType === 'positive' ? 'bg-emerald-400/10 text-emerald-500' : 'bg-rose-400/10 text-rose-500'}`}>
                {kpi.change}
              </span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
                {kpi.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {kpi.changeText}
              </p>
            </CardContent>
          </Card>
        ))}
        
        {/* Nouvelle carte pour le ROI */}
        <Card className="overflow-hidden border-t-4 border-t-green-500/40 hover:border-t-green-500 transition-colors duration-300">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {roiData.title}
            </CardTitle>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${roiData.changeType === 'positive' ? 'bg-emerald-400/10 text-emerald-500' : 'bg-rose-400/10 text-rose-500'}`}>
              {roiData.change}
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400">
              {roiData.value}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {roiData.changeText}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1 overflow-hidden border-t-4 border-t-purple-500/20">
          <CardHeader>
            <CardTitle>Répartition des appels (7 derniers jours)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stackedBarData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.3)" 
                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="appels" name="Appels effectués" stackId="a" fill="#8884d8" />
                  <Bar dataKey="reponses" name="Réponses" stackId="a" fill="#6366f1" />
                  <Bar dataKey="qualifies" name="Qualifiés" stackId="a" fill="#0ea5e9" />
                  <Bar dataKey="rdv" name="RDV planifiés" stackId="a" fill="#a855f7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 overflow-hidden border-t-4 border-t-blue-500/20">
          <CardHeader>
            <CardTitle>Évolution hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={lineChartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.3)" 
                    tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.6)' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="calls"
                    name="Appels"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="responses" name="Réponses" stroke="#6366f1" />
                  <Line type="monotone" dataKey="qualified" name="Qualifiés" stroke="#0ea5e9" />
                  <Line type="monotone" dataKey="appointments" name="RDV" stroke="#a855f7" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="overflow-hidden border-t-4 border-t-indigo-500/20">
          <CardHeader>
            <CardTitle>Répartition par statut</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    formatter={(value, entry) => (
                      <span className="text-xs text-muted-foreground">{value}</span>
                    )}
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-t-4 border-t-violet-500/20">
          <CardHeader>
            <CardTitle>Performance par jour/heure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full flex items-center justify-center">
              <Heatmap
                hours={heatmapData.hours}
                days={heatmapData.days}
                data={heatmapData.data}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Nouvelle section pour la comparaison agent vocal vs humain */}
      <Card className="overflow-hidden border-t-4 border-t-green-500/20">
        <CardHeader>
          <CardTitle>Comparaison Agent Vocal vs Humain</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparativeData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.3)" 
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)" 
                  tick={{ fill: 'rgba(255,255,255,0.6)' }} 
                  yAxisId="left"
                  label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.6)' }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)" 
                  tick={{ fill: 'rgba(255,255,255,0.6)' }} 
                  yAxisId="right"
                  orientation="right"
                  label={{ value: 'CA (€)', angle: -90, position: 'insideRight', fill: 'rgba(255,255,255,0.6)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="agent_roi" 
                  name="ROI Agent Vocal (%)" 
                  yAxisId="left" 
                  fill="#10b981" 
                />
                <Bar 
                  dataKey="humain_roi" 
                  name="ROI Humain (%)" 
                  yAxisId="left" 
                  fill="#6366f1" 
                />
                <Bar 
                  dataKey="agent_ca" 
                  name="CA Agent Vocal (€)" 
                  yAxisId="right" 
                  fill="#22c55e" 
                />
                <Bar 
                  dataKey="humain_ca" 
                  name="CA Humain (€)" 
                  yAxisId="right" 
                  fill="#818cf8" 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden border-t-4 border-t-green-500/20">
        <CardHeader>
          <CardTitle>Détails de rentabilité</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-foreground/90">Agent Vocal</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Coût par minute</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">0,35 €</p>
                  </div>
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Appels par heure</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">8</p>
                  </div>
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Taux conversion RDV</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">13,5%</p>
                  </div>
                  <div className="rounded-lg bg-emerald-400/10 p-4 border border-emerald-400/20">
                    <p className="text-sm text-muted-foreground">ROI moyen</p>
                    <p className="text-lg font-semibold text-emerald-500 mt-1">215%</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-foreground/90">Setter Humain</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Coût par heure</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">20 €</p>
                  </div>
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Appels par heure</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">8</p>
                  </div>
                  <div className="rounded-lg bg-card/60 p-4 border border-border/20">
                    <p className="text-sm text-muted-foreground">Taux conversion RDV</p>
                    <p className="text-lg font-semibold text-primary-foreground mt-1">13,5%</p>
                  </div>
                  <div className="rounded-lg bg-indigo-400/10 p-4 border border-indigo-400/20">
                    <p className="text-sm text-muted-foreground">ROI moyen</p>
                    <p className="text-lg font-semibold text-indigo-500 mt-1">150%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg bg-card/60 p-4 border border-border/20">
              <p className="text-sm font-medium">Analyse financière</p>
              <p className="text-xs text-muted-foreground mt-2">
                L'agent vocal présente un ROI supérieur grâce à une structure de coûts optimisée pour le volume d'appels. 
                Bien que le coût par heure soit légèrement plus élevé (21€ vs 20€), la capacité à maintenir une performance constante 
                et à s'adapter aux pics d'activité sans coûts additionnels de formation ou d'intégration compense largement cet écart. 
                Pour un rendez-vous qui génère en moyenne 125€ de CA (25% × 500€), l'agent vocal présente une marge bénéficiaire supérieure de 43,2%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-1">
        <div className="text-xs text-muted-foreground/60">
          Dernière mise à jour: {new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
} 