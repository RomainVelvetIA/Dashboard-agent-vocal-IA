import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Composant pour les graphiques de performance par heure
const HourlyPerformanceChart = () => {
  return (
    <div className="h-[250px] relative">
      {/* Axe Y (vertical) */}
      <div className="absolute top-0 bottom-0 left-0 w-10 flex flex-col justify-between text-xs text-muted-foreground">
        <span>80%</span>
        <span>60%</span>
        <span>40%</span>
        <span>20%</span>
        <span>0%</span>
      </div>
      
      {/* Graphique en barres */}
      <div className="absolute inset-y-0 left-12 right-0 flex items-end justify-between">
        {/* Barres pour chaque heure avec hauteurs variables */}
        {Array.from({ length: 12 }, (_, i) => {
          // Génère des hauteurs variables pour la démo
          const heights = [
            30, 45, 55, 75, 85, 65, 80, 90, 70, 50, 40, 35
          ]
          const height = heights[i]
          
          return (
            <div key={i} className="flex flex-col items-center">
              <div 
                className="w-12 rounded-t-md bg-gradient-to-t from-primary/50 to-primary/70 relative group"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card/90 border border-border/30 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Taux de réponse: {height}%
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {(i + 8) % 12 + (i + 8 >= 12 ? "PM" : "AM")}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Composant pour le graphique de performance par jour
const DailyPerformanceChart = () => {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
  
  return (
    <div className="h-[250px] relative">
      {/* Axe Y (vertical) */}
      <div className="absolute top-0 bottom-0 left-0 w-10 flex flex-col justify-between text-xs text-muted-foreground">
        <span>80%</span>
        <span>60%</span>
        <span>40%</span>
        <span>20%</span>
        <span>0%</span>
      </div>
      
      {/* Graphique en barres */}
      <div className="absolute inset-y-0 left-12 right-0 flex items-end justify-between">
        {/* Barres pour chaque jour avec hauteurs variables */}
        {days.map((day, i) => {
          // Génère des hauteurs variables pour la démo
          const heights = [65, 70, 80, 75, 60, 40, 30]
          const height = heights[i]
          
          return (
            <div key={day} className="flex flex-col items-center">
              <div 
                className="w-16 rounded-t-md bg-gradient-to-t from-indigo-500/50 to-indigo-500/70 relative group"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card/90 border border-border/30 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Taux de réponse: {height}%
                </div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {day}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Données factices pour les suggestions d'IA
const aiSuggestions = [
  {
    id: 1,
    suggestion: "Utiliser des phrases plus courtes en introduction",
    impact: "Pourrait augmenter le taux d'engagement de 12%",
    type: "script",
  },
  {
    id: 2,
    suggestion: "Mettre davantage l'accent sur les résultats chiffrés",
    impact: "Pourrait améliorer le taux de qualification de 8%",
    type: "script",
  },
  {
    id: 3,
    suggestion: "Optimiser les horaires d'appel entre 10h et 11h30",
    impact: "Pourrait augmenter le taux de réponse de 15%",
    type: "horaire",
  },
  {
    id: 4,
    suggestion: "Éviter les jours de fin de mois pour les appels",
    impact: "Pourrait réduire le taux de refus de 10%",
    type: "horaire",
  },
  {
    id: 5,
    suggestion: "Personnaliser davantage l'approche par secteur",
    impact: "Pourrait améliorer le taux de conversion de 18%",
    type: "segmentation",
  },
]

// Types de badges pour les suggestions
const badgeType = {
  script: "bg-purple-400/10 text-purple-500 hover:bg-purple-400/20",
  horaire: "bg-blue-400/10 text-blue-500 hover:bg-blue-400/20",
  segmentation: "bg-emerald-400/10 text-emerald-500 hover:bg-emerald-400/20",
}

// Données pour les tests de scripts A/B
const abTestResults = [
  {
    id: 1,
    name: "Test #1 - Introduction",
    variantA: "Bonjour, je suis Sarah de DigitalWave...",
    variantB: "Bonjour, c'est Sarah de DigitalWave. J'ai remarqué que...",
    resultsA: {
      response: "68%",
      qualification: "42%",
      appointment: "18%",
    },
    resultsB: {
      response: "72%",
      qualification: "47%",
      appointment: "23%",
    },
    winner: "B",
    improvement: "+27% de RDV",
    status: "terminé",
  },
  {
    id: 2,
    name: "Test #2 - Objection prix",
    variantA: "Je comprends votre préoccupation concernant le budget...",
    variantB: "Notre solution s'adapte à tous les budgets avec un ROI prouvé...",
    resultsA: {
      response: "65%",
      qualification: "38%",
      appointment: "15%",
    },
    resultsB: {
      response: "66%",
      qualification: "43%",
      appointment: "19%",
    },
    winner: "B",
    improvement: "+26% de RDV",
    status: "terminé",
  },
  {
    id: 3,
    name: "Test #3 - Proposition de valeur",
    variantA: "Nous aidons les entreprises à augmenter leur visibilité en ligne...",
    variantB: "Nous générons en moyenne 40% de clients en plus pour nos clients...",
    resultsA: {
      response: "-",
      qualification: "-",
      appointment: "-",
    },
    resultsB: {
      response: "-",
      qualification: "-",
      appointment: "-",
    },
    winner: "-",
    improvement: "-",
    status: "en cours",
  },
]

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Insights & Recommandations</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Exporter les données
          </Button>
          <Button variant="default" size="sm">
            Générer de nouvelles recommandations
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="border-t-4 border-t-primary/40">
          <CardHeader>
            <CardTitle>Heures optimales d'appel</CardTitle>
            <CardDescription>Analyse des taux de réponse par plage horaire</CardDescription>
          </CardHeader>
          <CardContent>
            <HourlyPerformanceChart />
            <div className="mt-4 bg-muted/20 p-3 rounded-md">
              <h4 className="text-sm font-medium">Insights clés :</h4>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• Les meilleurs taux de réponse sont entre 10h et 11h</li>
                <li>• Évitez les appels après 16h (taux faible)</li>
                <li>• Le créneau midi (12h-14h) montre des résultats mitigés</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-indigo-500/40">
          <CardHeader>
            <CardTitle>Jours les plus performants</CardTitle>
            <CardDescription>Analyse des taux de réponse par jour de la semaine</CardDescription>
          </CardHeader>
          <CardContent>
            <DailyPerformanceChart />
            <div className="mt-4 bg-muted/20 p-3 rounded-md">
              <h4 className="text-sm font-medium">Insights clés :</h4>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• Le mercredi est le jour le plus performant</li>
                <li>• Les week-ends montrent des taux très faibles</li>
                <li>• Le mardi et le jeudi sont également performants</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recommandations personnalisées (IA)</CardTitle>
          <CardDescription>Suggestions basées sur l'analyse de vos performances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion) => (
              <div 
                key={suggestion.id}
                className="p-4 border border-border/30 rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 mt-1">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 15L15 9.5M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{suggestion.suggestion}</h3>
                      <Badge className={badgeType[suggestion.type as keyof typeof badgeType]}>
                        {suggestion.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="text-emerald-500 font-medium">{suggestion.impact}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button variant="outline" size="sm">
              Appliquer toutes les suggestions
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Résultats des tests A/B</CardTitle>
          <CardDescription>Comparaison des performances entre différentes versions de scripts</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="results" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="results">Résultats</TabsTrigger>
              <TabsTrigger value="ongoing">Tests en cours</TabsTrigger>
              <TabsTrigger value="create">Créer un test</TabsTrigger>
            </TabsList>
            
            <TabsContent value="results">
              <div className="space-y-6">
                {abTestResults.filter(test => test.status === "terminé").map((test) => (
                  <div key={test.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4 border-b bg-muted/10">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{test.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Amélioration:</span>
                          <span className="text-emerald-500 font-medium">{test.improvement}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                      <div className={`p-4 ${test.winner === 'A' ? 'bg-emerald-400/5' : ''}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">Variante A</h4>
                          {test.winner === 'A' && (
                            <Badge className="bg-emerald-400/10 text-emerald-500 hover:bg-emerald-400/20">
                              Gagnant
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 italic">"{test.variantA}"</p>
                        
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">Réponses</div>
                            <div className="font-medium">{test.resultsA.response}</div>
                          </div>
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">Qualifiés</div>
                            <div className="font-medium">{test.resultsA.qualification}</div>
                          </div>
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">RDV</div>
                            <div className="font-medium">{test.resultsA.appointment}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 ${test.winner === 'B' ? 'bg-emerald-400/5' : ''}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium">Variante B</h4>
                          {test.winner === 'B' && (
                            <Badge className="bg-emerald-400/10 text-emerald-500 hover:bg-emerald-400/20">
                              Gagnant
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 italic">"{test.variantB}"</p>
                        
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">Réponses</div>
                            <div className="font-medium">{test.resultsB.response}</div>
                          </div>
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">Qualifiés</div>
                            <div className="font-medium">{test.resultsB.qualification}</div>
                          </div>
                          <div className="p-2 rounded bg-muted/20">
                            <div className="text-xs text-muted-foreground">RDV</div>
                            <div className="font-medium">{test.resultsB.appointment}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/10 border-t text-center">
                      <Button variant="ghost" size="sm">Voir les détails complets</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ongoing">
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 border-b bg-muted/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Test #3 - Proposition de valeur</h3>
                    <Badge className="bg-blue-400/10 text-blue-500">
                      En cours (58% terminé)
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Progression</h4>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '58%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>0 appels</span>
                      <span>58/100 appels</span>
                      <span>100 appels</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded">
                      <h4 className="text-sm font-medium mb-1">Variante A</h4>
                      <p className="text-xs text-muted-foreground italic">
                        "Nous aidons les entreprises à augmenter leur visibilité en ligne..."
                      </p>
                    </div>
                    
                    <div className="p-3 border rounded">
                      <h4 className="text-sm font-medium mb-1">Variante B</h4>
                      <p className="text-xs text-muted-foreground italic">
                        "Nous générons en moyenne 40% de clients en plus pour nos clients..."
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">Arrêter le test</Button>
                    <Button variant="outline" size="sm">Voir les résultats partiels</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="create">
              <div className="p-8 border rounded-lg border-dashed flex flex-col items-center justify-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Créer un nouveau test A/B</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-md">
                  Comparez deux versions de scripts pour déterminer celle qui performe le mieux dans des conditions réelles
                </p>
                <Button variant="default" className="mt-4">
                  Commencer
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 