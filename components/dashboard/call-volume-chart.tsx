import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CallData {
  from_number: string;
  to_number: string;
  summary: string;
  appointment_booked: boolean;
  created_at?: string;
}

export function CallVolumeChart() {
  const [callData, setCallData] = useState<CallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCallData = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('calls')
          .select('from_number, to_number, summary, appointment_booked, created_at')
          .order('created_at', { ascending: false });

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

  // Préparation des données pour le graphique
  const processDataForChart = () => {
    // Grouper les appels par jour
    const groupedByDay = callData.reduce((acc, call) => {
      const date = call.created_at ? new Date(call.created_at).toLocaleDateString('fr-FR') : 'Date inconnue';
      
      if (!acc[date]) {
        acc[date] = { date, totalCalls: 0, appointmentsBooked: 0 };
      }
      
      acc[date].totalCalls += 1;
      if (call.appointment_booked) {
        acc[date].appointmentsBooked += 1;
      }
      
      return acc;
    }, {} as Record<string, { date: string; totalCalls: number; appointmentsBooked: number }>);
    
    // Convertir en tableau pour le graphique
    return Object.values(groupedByDay).slice(-7); // Dernier 7 jours
  };

  const chartData = processDataForChart();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Volume d'appels</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-64">Chargement des données...</div>
        ) : error ? (
          <div className="text-red-500 h-64 flex items-center justify-center">{error}</div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalCalls" name="Total appels" fill="#8884d8" />
              <Bar dataKey="appointmentsBooked" name="Rendez-vous pris" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
} 