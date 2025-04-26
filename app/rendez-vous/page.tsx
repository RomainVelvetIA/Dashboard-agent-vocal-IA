import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  CalendarIcon, 
  PlusIcon, 
  ArrowPathIcon 
} from "@heroicons/react/24/outline"

// Données factices pour la démo
const appointmentsData = [
  {
    id: 1,
    name: "Jean Dupont",
    date: "2023-06-15",
    time: "14:30",
    status: "confirmé",
    type: "Présentation produit",
  },
  {
    id: 2,
    name: "Marie Martin",
    date: "2023-06-16",
    time: "10:15",
    status: "à confirmer",
    type: "Démo technique",
  },
  {
    id: 3,
    name: "Pierre Lefebvre",
    date: "2023-06-18",
    time: "16:00",
    status: "annulé",
    type: "Suivi commercial",
  },
  {
    id: 4,
    name: "Sophie Bernard",
    date: "2023-06-20",
    time: "11:30",
    status: "confirmé",
    type: "Première rencontre",
  },
  {
    id: 5,
    name: "Thomas Petit",
    date: "2023-06-20",
    time: "15:45",
    status: "confirmé",
    type: "Signature contrat",
  },
]

const statusColor = {
  confirmé: "bg-emerald-400/10 text-emerald-500",
  "à confirmer": "bg-amber-400/10 text-amber-500",
  annulé: "bg-rose-400/10 text-rose-500",
  replanifié: "bg-blue-400/10 text-blue-500",
}

// Jours du calendrier
const days = [
  'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
]

// Dates du mois
const currentMonth = Array.from({ length: 35 }, (_, i) => {
  // Démarre au 1er jour du mois (pour la démo)
  return i + 1
})

export default function RendezVousPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Rendez-vous</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Synchroniser
          </Button>
          <Button variant="default" size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            Nouveau RDV
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Calendrier - Juin 2023</CardTitle>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">&lt;</Button>
                  <Button variant="outline" size="sm">&gt;</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => (
                  <div key={day} className="text-center py-2 text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {currentMonth.map((date) => {
                  // Trouver si la date a des rendez-vous
                  const hasAppointment = appointmentsData.some(
                    app => app.date.endsWith(`-${date.toString().padStart(2, '0')}`)
                  )
                  
                  return (
                    <div 
                      key={date} 
                      className={`
                        text-center py-3 text-sm rounded-md border border-border/30 
                        hover:bg-accent/30 transition-colors
                        ${hasAppointment ? 'bg-primary/5 border-primary/30' : ''}
                      `}
                    >
                      <span className={hasAppointment ? 'text-primary font-medium' : ''}>
                        {date}
                      </span>
                      {hasAppointment && (
                        <div className="mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto"></div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Agenda connecté</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-border/50 rounded-xl p-4 text-center">
                <div className="text-primary/80 bg-primary/5 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CalendarIcon className="h-8 w-8" />
                </div>
                <h3 className="font-medium">Google Calendar</h3>
                <p className="text-xs text-muted-foreground mt-1">Synchronisé il y a 28 min</p>
                
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <ArrowPathIcon className="h-3 w-3 mr-2" />
                    Actualiser
                  </Button>
                </div>
              </div>
              
              <div className="bg-card/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Aujourd'hui</div>
                <div className="text-xs text-muted-foreground mt-1">2 rendez-vous programmés</div>
              </div>
              
              <div className="bg-card/50 p-3 rounded-lg">
                <div className="text-sm font-medium">Cette semaine</div>
                <div className="text-xs text-muted-foreground mt-1">7 rendez-vous programmés</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Prochains rendez-vous</CardTitle>
            <Select defaultValue="tous">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les rendez-vous</SelectItem>
                <SelectItem value="confirmé">Confirmés</SelectItem>
                <SelectItem value="à confirmer">À confirmer</SelectItem>
                <SelectItem value="annulé">Annulés</SelectItem>
                <SelectItem value="replanifié">Replanifiés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointmentsData.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">{appointment.name}</TableCell>
                  <TableCell>{appointment.date} à {appointment.time}</TableCell>
                  <TableCell>{appointment.type}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusColor[appointment.status as keyof typeof statusColor]}`}>
                      {appointment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Détails</Button>
                      <Button variant="outline" size="sm">Replanifier</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 