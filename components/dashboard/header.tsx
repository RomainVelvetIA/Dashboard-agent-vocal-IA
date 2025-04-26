"use client"

import { useState } from "react"
import { ChevronDownIcon, CalendarIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline"

export function DashboardHeader() {
  const [period, setPeriod] = useState("Cette semaine")
  
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
      <div>
        <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
          Tableau de bord
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Vue d'ensemble des performances de votre assistant vocal IA
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="flex items-center justify-between gap-2 py-2 px-4 text-sm font-medium rounded-md bg-secondary/80 text-primary-foreground hover:bg-secondary transition-colors min-w-[160px]"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span>{period}</span>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <button className="flex items-center gap-2 py-2 px-4 text-sm font-medium rounded-md bg-primary/90 text-primary-foreground hover:bg-primary transition-colors">
          <ArrowDownTrayIcon className="h-4 w-4" />
          <span>Télécharger</span>
        </button>
      </div>
    </div>
  )
} 