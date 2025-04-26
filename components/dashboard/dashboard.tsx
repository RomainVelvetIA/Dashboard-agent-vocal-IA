import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CallVolumeChart } from "./call-volume-chart";
import { CallDataTable } from "./call-data-table";

export function DashboardView() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Tableau de bord d'appels</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Vue d'ensemble des appels et des rendez-vous
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Graphique du volume d'appels */}
        <CallVolumeChart />
        
        {/* Autres statistiques importantes pourraient aller ici */}
        <Card>
          <CardHeader>
            <CardTitle>Performances des appels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Taux de conversion
                </p>
                <p className="text-2xl font-bold">
                  {/* Calculer dynamiquement à partir des données */}
                  23%
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Rendez-vous pris
                </p>
                <p className="text-2xl font-bold">
                  {/* À remplacer par des données réelles */}
                  12
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Appels total
                </p>
                <p className="text-2xl font-bold">
                  {/* À remplacer par des données réelles */}
                  52
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Durée moyenne
                </p>
                <p className="text-2xl font-bold">
                  {/* À remplacer par des données réelles */}
                  3m 24s
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tableau de données d'appels */}
      <CallDataTable />
    </div>
  );
} 