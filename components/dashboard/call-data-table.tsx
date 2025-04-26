import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CallData {
  id?: number;
  from_number: string;
  to_number: string;
  summary: string;
  appointment_booked: boolean;
  created_at?: string;
}

export function CallDataTable() {
  const [callData, setCallData] = useState<CallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCallData = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('calls')
          .select('id, from_number, to_number, summary, appointment_booked, created_at')
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) throw error;
        setCallData(data || []);
      } catch (err) {
        setError('Erreur lors du chargement des données d\'appel');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCallData();
  }, []);

  // Formater le numéro de téléphone
  const formatPhoneNumber = (phoneNumber: string) => {
    // Exemple simple de formatage - adaptez selon vos besoins
    if (!phoneNumber) return 'N/A';
    
    // Si le format est international (+33...)
    if (phoneNumber.startsWith('+')) {
      return phoneNumber;
    }
    
    // Formatage pour numéro français (exemple: 06 12 34 56 78)
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
    }
    
    return phoneNumber;
  };

  // Formater la date
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Date inconnue';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Données d'appels récents</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-64">Chargement des données...</div>
        ) : error ? (
          <div className="text-red-500 h-64 flex items-center justify-center">{error}</div>
        ) : callData.length === 0 ? (
          <div className="text-center p-4">Aucune donnée d'appel disponible</div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>De</TableHead>
                  <TableHead>À</TableHead>
                  <TableHead>Résumé</TableHead>
                  <TableHead>Rendez-vous</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {callData.map((call, index) => (
                  <TableRow key={call.id || index}>
                    <TableCell>{formatPhoneNumber(call.from_number)}</TableCell>
                    <TableCell>{formatPhoneNumber(call.to_number)}</TableCell>
                    <TableCell className="max-w-xs truncate" title={call.summary}>
                      {call.summary || 'Pas de résumé'}
                    </TableCell>
                    <TableCell>
                      <Badge variant={call.appointment_booked ? "default" : "secondary"}>
                        {call.appointment_booked ? 'Oui' : 'Non'}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(call.created_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 