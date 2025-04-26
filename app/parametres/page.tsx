import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ParametresPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Paramètres</h1>
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm">
            Enregistrer les modifications
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="appels">Configuration appels</TabsTrigger>
          <TabsTrigger value="script">Script & Dialogue</TabsTrigger>
          <TabsTrigger value="ab-testing">Tests A/B</TabsTrigger>
          <TabsTrigger value="api">API & Intégrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="grid gap-6 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Statut de l'agent</CardTitle>
                <CardDescription>Activez ou désactivez votre agent vocal IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="font-medium">État de l'agent</div>
                    <div className="text-sm text-muted-foreground">Lorsqu'il est actif, votre agent peut effectuer et recevoir des appels</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Votre agent est actuellement actif et a passé 28 appels aujourd'hui</h3>
                      <p className="text-xs text-muted-foreground mt-1">Dernière activité il y a 35 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
                <CardDescription>Configurez les informations de base de votre agent</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="agent-name">Nom de l'agent</Label>
                    <Input id="agent-name" defaultValue="Sarah" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="agent-language">Langue principale</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger id="agent-language">
                        <SelectValue placeholder="Sélectionner une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">Anglais</SelectItem>
                        <SelectItem value="es">Espagnol</SelectItem>
                        <SelectItem value="de">Allemand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company-info">Informations de l'entreprise</Label>
                  <Textarea id="company-info" placeholder="Décrivez votre entreprise et vos services..." defaultValue="DigitalWave est une entreprise spécialisée dans les solutions marketing digital pour PME. Nous proposons des services d'optimisation de présence en ligne, de génération de leads et d'automatisation du marketing." className="min-h-[100px]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="appels">
          <div className="grid gap-6 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Horaires d'appel</CardTitle>
                <CardDescription>Définissez les plages horaires pendant lesquelles votre agent peut passer des appels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Lundi</div>
                    <div className="flex items-center gap-2">
                      <Input type="time" className="w-32" defaultValue="09:00" />
                      <span>à</span>
                      <Input type="time" className="w-32" defaultValue="18:00" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Mardi</div>
                    <div className="flex items-center gap-2">
                      <Input type="time" className="w-32" defaultValue="09:00" />
                      <span>à</span>
                      <Input type="time" className="w-32" defaultValue="18:00" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Mercredi</div>
                    <div className="flex items-center gap-2">
                      <Input type="time" className="w-32" defaultValue="09:00" />
                      <span>à</span>
                      <Input type="time" className="w-32" defaultValue="18:00" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Jeudi</div>
                    <div className="flex items-center gap-2">
                      <Input type="time" className="w-32" defaultValue="09:00" />
                      <span>à</span>
                      <Input type="time" className="w-32" defaultValue="18:00" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Vendredi</div>
                    <div className="flex items-center gap-2">
                      <Input type="time" className="w-32" defaultValue="09:00" />
                      <span>à</span>
                      <Input type="time" className="w-32" defaultValue="16:00" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="font-medium">Samedi</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="samedi" />
                        <Label htmlFor="samedi">Désactivé</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Dimanche</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="dimanche" />
                        <Label htmlFor="dimanche">Désactivé</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Configuration de la voix</CardTitle>
                <CardDescription>Personnalisez la voix et le style de parole de votre agent</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="voice-selection">Modèle de voix</Label>
                    <Select defaultValue="alloy">
                      <SelectTrigger id="voice-selection">
                        <SelectValue placeholder="Sélectionner une voix" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alloy">Alloy (équilibrée)</SelectItem>
                        <SelectItem value="shimmer">Shimmer (claire)</SelectItem>
                        <SelectItem value="nova">Nova (professionnelle)</SelectItem>
                        <SelectItem value="echo">Echo (chaleureuse)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="speech-style">Style de discours</Label>
                    <Select defaultValue="friendly">
                      <SelectTrigger id="speech-style">
                        <SelectValue placeholder="Sélectionner un style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="friendly">Amical et détendu</SelectItem>
                        <SelectItem value="professional">Professionnel et formel</SelectItem>
                        <SelectItem value="energetic">Énergique et enthousiaste</SelectItem>
                        <SelectItem value="calm">Calme et posé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" size="sm">
                    Tester la voix
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="script">
          <div className="grid gap-6 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Script principal</CardTitle>
                <CardDescription>Configurez le script que votre agent utilisera lors des appels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="introduction">Introduction</Label>
                    <Textarea id="introduction" placeholder="Texte d'introduction..." defaultValue="Bonjour, je m'appelle Sarah de DigitalWave. Je vous appelle aujourd'hui car nous aidons les entreprises comme la vôtre à améliorer leur présence en ligne. Avez-vous un moment pour discuter des solutions qui pourraient vous aider à attirer plus de clients?" className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pitch">Présentation des services</Label>
                    <Textarea id="pitch" placeholder="Présentation de vos services..." defaultValue="Nous proposons des services sur mesure pour optimiser votre visibilité en ligne, générer des leads qualifiés et automatiser vos campagnes marketing. Notre approche a permis à nos clients d'augmenter leur trafic web de 40% en moyenne et de doubler leur taux de conversion." className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="objections">Réponses aux objections</Label>
                    <Textarea id="objections" placeholder="Comment répondre aux objections..." defaultValue="Je comprends vos préoccupations concernant le budget. Nous proposons différentes formules adaptées à tous les types d'entreprises. Nous pouvons commencer par un audit gratuit pour identifier les opportunités les plus pertinentes pour votre situation." className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="closing">Conclusion et prise de RDV</Label>
                    <Textarea id="closing" placeholder="Comment conclure l'appel..." defaultValue="Afin de vous présenter nos solutions plus en détail et de discuter de votre situation spécifique, je vous propose un rendez-vous avec l'un de nos consultants. Seriez-vous disponible mardi prochain à 14h ou jeudi à 10h?" className="min-h-[100px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Conditions et branches</CardTitle>
                <CardDescription>Créez des règles conditionnelles pour guider la conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border/50 rounded-md">
                    <div className="font-medium mb-2">Si le prospect mentionne...</div>
                    <Input placeholder="ex: prix, budget, coût" defaultValue="budget serré" className="mb-3" />
                    
                    <div className="font-medium mb-2">Alors répondre avec...</div>
                    <Textarea placeholder="Réponse personnalisée" defaultValue="Je comprends tout à fait votre préoccupation concernant le budget. Nous offrons des formules flexibles qui s'adaptent à différents budgets. Nous pouvons commencer par des actions ciblées qui vous donneront un retour sur investissement rapide." className="min-h-[80px]" />
                  </div>
                  
                  <div className="p-4 border border-border/50 rounded-md">
                    <div className="font-medium mb-2">Si le prospect mentionne...</div>
                    <Input placeholder="ex: concurrent, autre prestataire" defaultValue="déjà un prestataire" className="mb-3" />
                    
                    <div className="font-medium mb-2">Alors répondre avec...</div>
                    <Textarea placeholder="Réponse personnalisée" defaultValue="C'est une bonne chose que vous travailliez déjà sur votre présence en ligne. Nous pourrions compléter ce que fait votre prestataire actuel avec nos services spécialisés en génération de leads qualifiés, qui est notre point fort. Beaucoup de nos clients combinent nos services avec d'autres prestataires pour des résultats optimaux." className="min-h-[80px]" />
                  </div>
                  
                  <Button variant="outline" size="sm">
                    Ajouter une nouvelle condition
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="ab-testing">
          <Card>
            <CardHeader>
              <CardTitle>Tests A/B de scripts</CardTitle>
              <CardDescription>Comparez l'efficacité de différentes versions de scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 bg-card/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Script A (Actuel)</h3>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Taux de conversion: 23%
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Introduction</Label>
                    <div className="p-3 bg-muted/30 rounded text-sm">
                      Bonjour, je m'appelle Sarah de DigitalWave. Je vous appelle aujourd'hui car nous aidons les entreprises comme la vôtre à améliorer leur présence en ligne.
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-card/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Script B (Test)</h3>
                    <div className="px-2 py-1 bg-emerald-400/10 text-emerald-500 text-xs rounded-full">
                      Taux de conversion: 27%
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Introduction</Label>
                    <div className="p-3 bg-muted/30 rounded text-sm">
                      Bonjour, c'est Sarah de DigitalWave. J'ai remarqué que votre entreprise pourrait bénéficier de notre expertise en marketing digital qui a permis à des entreprises similaires d'augmenter leur clientèle de 40%.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button variant="outline" size="sm">Créer un nouveau test</Button>
                <Button variant="outline" size="sm">Voir les résultats détaillés</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API et Intégrations</CardTitle>
              <CardDescription>Configurez les connexions API et les webhooks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-key">Votre clé API</Label>
                <div className="flex gap-2">
                  <Input id="api-key" defaultValue="vapi_sk_12345678901234567890123456789012345" type="password" className="font-mono" />
                  <Button variant="outline" size="sm">Copier</Button>
                  <Button variant="outline" size="sm">Régénérer</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Utilisez cette clé pour authentifier les requêtes à notre API</p>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Webhooks</h3>
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">URL de notification</Label>
                  <Input id="webhook-url" placeholder="https://votre-domaine.com/webhook" />
                </div>
                
                <div className="mt-4 space-y-2">
                  <Label>Événements à notifier</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="event-call" defaultChecked />
                      <Label htmlFor="event-call">Appel terminé</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="event-qualified" defaultChecked />
                      <Label htmlFor="event-qualified">Lead qualifié</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="event-appointment" defaultChecked />
                      <Label htmlFor="event-appointment">RDV programmé</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="event-transcription" />
                      <Label htmlFor="event-transcription">Transcription disponible</Label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">Tester le webhook</Button>
                  <Button variant="outline" size="sm">Voir les logs</Button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Intégrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between border rounded-md p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                        <span className="text-sm">CRM</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">HubSpot</div>
                        <div className="text-xs text-muted-foreground">Connecté</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Configurer</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border rounded-md p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                        <span className="text-sm">CAL</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Google Calendar</div>
                        <div className="text-xs text-muted-foreground">Connecté</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Configurer</Button>
                  </div>
                  
                  <div className="flex items-center justify-between border rounded-md p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                        <span className="text-sm">SMS</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Twilio</div>
                        <div className="text-xs text-muted-foreground">Non connecté</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Connecter</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 