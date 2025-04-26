"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Données et calculs
const voiceAgentCostPerMinute = 0.35;
const voiceAgentCostPerHour = voiceAgentCostPerMinute * 60;
const humanSetterCostPerHour = 20;
const conversionRate = 0.25; // 25% de chance de conversion en vente
const valuePerSale = 500; // 500€ par vente
const callsPerHour = 8; // Nombre d'appels par heure (identique pour les deux)
const voiceAgentConversionPerHour = callsPerHour * 0.135; // 13.5% des appels se convertissent en RDV
const humanSetterConversionPerHour = callsPerHour * 0.135; // Taux identique pour l'humain

// Calcul du ROI
const voiceAgentRevenuePerHour = voiceAgentConversionPerHour * conversionRate * valuePerSale;
const humanSetterRevenuePerHour = humanSetterConversionPerHour * conversionRate * valuePerSale;
const voiceAgentROI = ((voiceAgentRevenuePerHour - voiceAgentCostPerHour) / voiceAgentCostPerHour) * 100;
const humanSetterROI = ((humanSetterRevenuePerHour - humanSetterCostPerHour) / humanSetterCostPerHour) * 100;
const roiDifference = voiceAgentROI - humanSetterROI;

export function CostBenefitAnalysis() {
  return (
    <Card className="overflow-hidden border-t-4 border-t-green-500/20">
      <CardHeader className="pb-2">
        <CardTitle>Analyse Coût-Bénéfice</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-primary-foreground/90">Agent Vocal</p>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Coût horaire:</span>
                <span className="text-xs font-medium">{voiceAgentCostPerHour.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">RDV/heure:</span>
                <span className="text-xs font-medium">{voiceAgentConversionPerHour.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">CA potentiel/h:</span>
                <span className="text-xs font-medium">{voiceAgentRevenuePerHour.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-border/10">
                <span className="text-xs text-muted-foreground">ROI:</span>
                <span className="text-xs font-medium text-emerald-500">{voiceAgentROI.toFixed(0)}%</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-primary-foreground/90">Setter Humain</p>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Coût horaire:</span>
                <span className="text-xs font-medium">{humanSetterCostPerHour.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">RDV/heure:</span>
                <span className="text-xs font-medium">{humanSetterConversionPerHour.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">CA potentiel/h:</span>
                <span className="text-xs font-medium">{humanSetterRevenuePerHour.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-border/10">
                <span className="text-xs text-muted-foreground">ROI:</span>
                <span className="text-xs font-medium text-indigo-500">{humanSetterROI.toFixed(0)}%</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-card/60 p-3 border border-border/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Avantage ROI Agent Vocal</span>
              <span className={`text-xs font-medium ${roiDifference > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {roiDifference > 0 ? '+' : ''}{roiDifference.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-border/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full" 
                style={{ width: `${(voiceAgentROI / (voiceAgentROI + humanSetterROI)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 