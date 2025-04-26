import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

// Graphique en donut pour le quota d'utilisation
const QuotaUsageChart = () => {
  // Valeurs de démo pour le quota
  const totalMinutes = 500;
  const usedMinutes = 320;
  const percentUsed = (usedMinutes / totalMinutes) * 100;
  
  // Calcul des valeurs pour le graphique circulaire
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentUsed / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center h-[200px]">
      <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
        {/* Cercle de fond */}
        <circle 
          cx="80" 
          cy="80" 
          r={radius} 
          stroke="currentColor" 
          strokeWidth="12"
          strokeLinecap="round"
          fill="transparent"
          className="text-muted/20"
        />
        
        {/* Cercle d'utilisation */}
        <circle 
          cx="80" 
          cy="80" 
          r={radius} 
          stroke="url(#gradientStroke)" 
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          fill="transparent"
        />
        
        {/* Dégradé pour le cercle */}
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Texte au centre */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
          {percentUsed.toFixed(0)}%
        </span>
        <span className="text-xs text-muted-foreground">
          {usedMinutes} / {totalMinutes} min
        </span>
      </div>
    </div>
  );
}

// Données factices pour l'historique des paiements
const paymentHistory = [
  {
    id: 1,
    date: "2023-06-01",
    amount: "49,90 €",
    method: "Carte bancaire",
    status: "succès",
    invoice: "INV-2023-001"
  },
  {
    id: 2,
    date: "2023-05-01",
    amount: "49,90 €",
    method: "Carte bancaire",
    status: "succès",
    invoice: "INV-2023-002"
  },
  {
    id: 3,
    date: "2023-04-01",
    amount: "49,90 €",
    method: "Carte bancaire",
    status: "succès",
    invoice: "INV-2023-003"
  },
  {
    id: 4,
    date: "2023-03-01",
    amount: "49,90 €",
    method: "PayPal",
    status: "succès",
    invoice: "INV-2023-004"
  },
  {
    id: 5,
    date: "2023-02-01",
    amount: "29,90 €",
    method: "Carte bancaire",
    status: "succès",
    invoice: "INV-2023-005"
  },
]

// Statut des paiements avec couleurs
const statusColor = {
  succès: "bg-emerald-400/10 text-emerald-500",
  échec: "bg-rose-400/10 text-rose-500",
  remboursement: "bg-blue-400/10 text-blue-500",
}

export default function FacturationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Facturation</h1>
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm">
            Ajouter des minutes
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="border-t-4 border-t-primary/40 overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Abonnement actuel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">Business Pro</h3>
                  <p className="text-sm text-muted-foreground">Facturé mensuellement</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Appels illimités</span>
                    <span className="font-medium">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Minutes incluses</span>
                    <span className="font-medium">500 min/mois</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Intégrations CRM</span>
                    <span className="font-medium">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Prochain renouvellement</span>
                    <span className="font-medium">01/07/2023</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" size="sm">
                    Modifier mon abonnement
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <QuotaUsageChart />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-blue-500/40 overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Analyse d'utilisation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border/30 rounded-xl p-3 bg-card/50">
                <div className="text-sm text-muted-foreground">Coût moyen / minute</div>
                <div className="text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">0,10 €</div>
                <div className="mt-2 text-xs text-muted-foreground">-5% vs. mois précédent</div>
              </div>
              
              <div className="border border-border/30 rounded-xl p-3 bg-card/50">
                <div className="text-sm text-muted-foreground">Coût / qualification</div>
                <div className="text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">1,20 €</div>
                <div className="mt-2 text-xs text-muted-foreground text-emerald-500">-12% vs. mois précédent</div>
              </div>
              
              <div className="border border-border/30 rounded-xl p-3 bg-card/50">
                <div className="text-sm text-muted-foreground">Coût / RDV</div>
                <div className="text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">4,30 €</div>
                <div className="mt-2 text-xs text-muted-foreground text-emerald-500">-8% vs. mois précédent</div>
              </div>
              
              <div className="border border-border/30 rounded-xl p-3 bg-card/50">
                <div className="text-sm text-muted-foreground">Minutes restantes</div>
                <div className="text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">180</div>
                <div className="mt-2 text-xs text-muted-foreground">Expire dans 16 jours</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Historique des paiements</CardTitle>
            <Button variant="outline" size="sm">
              Télécharger toutes les factures
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Numéro</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Méthode</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.invoice}</TableCell>
                  <TableCell className="font-medium">{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusColor[payment.status as keyof typeof statusColor]}`}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">PDF</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Packs de minutes supplémentaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-border/30 hover:border-primary/30 rounded-xl p-5 flex flex-col bg-card/50 transition-all hover:shadow-md">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold">Pack Standard</h3>
                <p className="text-muted-foreground text-sm">100 minutes supplémentaires</p>
              </div>
              <div className="text-center my-4">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">19,90 €</span>
              </div>
              <Button variant="outline" className="mt-auto">Choisir ce pack</Button>
            </div>

            <div className="border-2 border-primary/50 rounded-xl p-5 flex flex-col bg-card/50 relative shadow-md">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-2 rounded-bl-md rounded-tr-md">
                POPULAIRE
              </div>
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold">Pack Plus</h3>
                <p className="text-muted-foreground text-sm">300 minutes supplémentaires</p>
              </div>
              <div className="text-center my-4">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">49,90 €</span>
              </div>
              <Button variant="default" className="mt-auto">Choisir ce pack</Button>
            </div>

            <div className="border border-border/30 hover:border-primary/30 rounded-xl p-5 flex flex-col bg-card/50 transition-all hover:shadow-md">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold">Pack Pro</h3>
                <p className="text-muted-foreground text-sm">600 minutes supplémentaires</p>
              </div>
              <div className="text-center my-4">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">89,90 €</span>
              </div>
              <Button variant="outline" className="mt-auto">Choisir ce pack</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 