'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { PlayIcon, DocumentTextIcon, PencilIcon } from "@heroicons/react/24/outline"
import { getAppels, Appel } from "@/lib/supabase-client"

interface AppelsListProps {
  statusColor: {
    [key: string]: string;
  };
}

export function AppelsList({ statusColor }: AppelsListProps) {
  const [calls, setCalls] = useState<Appel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const pageSize = 10
  
  const [filters, setFilters] = useState({
    searchTerm: '',
    status: '',
    startDate: '',
    endDate: ''
  })
  
  useEffect(() => {
    loadAppels()
  }, [currentPage, filters])
  
  async function loadAppels() {
    setLoading(true)
    
    try {
      const { data, error, count } = await getAppels({
        searchTerm: filters.searchTerm,
        status: filters.status,
        startDate: filters.startDate,
        endDate: filters.endDate,
        page: currentPage,
        pageSize
      })
      
      if (error) {
        console.error("Erreur lors du chargement des appels:", error)
        setError("Impossible de charger les données d'appels")
      } else {
        setCalls(data || [])
        setTotalCount(count || 0)
        setError(null)
      }
    } catch (err) {
      console.error("Exception lors du chargement des appels:", err)
      setError("Une erreur est survenue lors du chargement des données")
    } finally {
      setLoading(false)
    }
  }

  // Mettre à jour les filtres depuis le composant parent
  useEffect(() => {
    window.addEventListener('filterChange', ((e: CustomEvent) => {
      setFilters(e.detail)
      setCurrentPage(1) // Reset la pagination lors d'une nouvelle recherche
    }) as EventListener)
    
    return () => {
      window.removeEventListener('filterChange', ((e: CustomEvent) => {
        setFilters(e.detail)
      }) as EventListener)
    }
  }, [])
  
  function nextPage() {
    if (currentPage * pageSize < totalCount) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  if (error) {
    return (
      <Card>
        <CardContent className="py-4">
          <div className="text-center text-red-500">{error}</div>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Card>
      <CardContent className="pt-6">
        {loading ? (
          <div className="text-center p-4">Chargement des données...</div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom prospect</TableHead>
                  <TableHead>Date/Heure</TableHead>
                  <TableHead>Durée</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Résultat</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calls.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4">
                      Aucun appel trouvé
                    </TableCell>
                  </TableRow>
                ) : (
                  calls.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="font-medium">{call.name}</TableCell>
                      <TableCell>{call.date} - {call.time}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusColor[call.status]}`}>
                          {call.status}
                        </span>
                      </TableCell>
                      <TableCell>{call.result}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" title="Écouter">
                            <PlayIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" title="Voir transcription">
                            <DocumentTextIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" title="Ajouter une note">
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                {calls.length > 0 
                  ? `Affichage de ${(currentPage - 1) * pageSize + 1}-${Math.min(currentPage * pageSize, totalCount)} sur ${totalCount} résultats` 
                  : 'Aucun résultat'}
              </div>
              <div className="flex gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  disabled={currentPage === 1}
                  onClick={prevPage}
                >
                  Précédent
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={currentPage * pageSize >= totalCount}
                  onClick={nextPage}
                >
                  Suivant
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
} 