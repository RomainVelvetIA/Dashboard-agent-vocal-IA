'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Définition du type pour filterChange event
interface FilterChangeEvent extends CustomEvent {
  detail: {
    searchTerm: string;
    status: string;
    startDate: string;
    endDate: string;
  };
}

// Composant sans props car nous utilisons des événements personnalisés
export function SearchFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSearch = () => {
    // Création d'un événement personnalisé pour communiquer avec d'autres composants
    const filterChangeEvent = new CustomEvent('filterChange', {
      detail: {
        searchTerm,
        status,
        startDate,
        endDate
      }
    }) as FilterChangeEvent;
    
    // Dispatche l'événement à la fenêtre pour que d'autres composants puissent l'écouter
    window.dispatchEvent(filterChangeEvent);
  }

  return (
    <Card>
      <CardHeader className="pb-1">
        <CardTitle className="text-xl">Filtres</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Input 
              placeholder="Rechercher par nom" 
              className="w-full" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les statuts</SelectItem>
                <SelectItem value="qualifié">Qualifié</SelectItem>
                <SelectItem value="non qualifié">Non qualifié</SelectItem>
                <SelectItem value="sans réponse">Sans réponse</SelectItem>
                <SelectItem value="répondu">Répondu</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input 
              type="date" 
              placeholder="Date de début" 
              className="w-full" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <Input 
              type="date" 
              placeholder="Date de fin" 
              className="w-full" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleSearch}>Rechercher</Button>
        </div>
      </CardContent>
    </Card>
  )
} 