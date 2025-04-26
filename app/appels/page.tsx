import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import { SearchFilters } from "./search-client"
import { AppelsList } from "./appels-list"

// Définition des couleurs pour les statuts
const statusColor = {
  qualifié: "bg-emerald-400/10 text-emerald-500",
  "non qualifié": "bg-rose-400/10 text-rose-500",
  "sans réponse": "bg-slate-400/10 text-slate-500",
  répondu: "bg-blue-400/10 text-blue-500",
}

export default function HistoriqueAppelsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Historique des appels</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Exporter</Button>
          <Button variant="default" size="sm">Nouvel appel</Button>
        </div>
      </div>
      
      <Suspense fallback={<div>Chargement des filtres...</div>}>
        <SearchFilters />
      </Suspense>

      <Suspense fallback={<div>Chargement des appels...</div>}>
        <AppelsList statusColor={statusColor} />
      </Suspense>
    </div>
  )
} 