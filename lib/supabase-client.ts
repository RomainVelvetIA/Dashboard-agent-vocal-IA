import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Type pour les données d'appels
export interface Appel {
  id?: number;
  name: string;
  date: string;
  time: string;
  duration: string;
  status: string;
  result: string;
  created_at?: string;
}

// Création du client Supabase pour les composants côté client
export const createClient = () => createClientComponentClient()

// Exemple de fonction pour récupérer des données d'appels avec filtres
export async function getAppels({ 
  searchTerm = '', 
  status = '', 
  startDate = '', 
  endDate = '',
  page = 1,
  pageSize = 10
} = {}) {
  const supabase = createClient()
  
  let query = supabase
    .from('appels')
    .select('*', { count: 'exact' })
  
  // Ajout des filtres
  if (searchTerm) {
    query = query.ilike('name', `%${searchTerm}%`)
  }
  
  if (status && status !== 'tous') {
    query = query.eq('status', status)
  }
  
  if (startDate) {
    query = query.gte('date', startDate)
  }
  
  if (endDate) {
    query = query.lte('date', endDate)
  }
  
  // Pagination
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  
  const { data, error, count } = await query
    .order('date', { ascending: false })
    .range(from, to)
  
  return { data, error, count }
}

// Fonction pour ajouter un nouvel appel
export async function addAppel(appelData: Appel) {
  const supabase = createClient()
  return await supabase.from('appels').insert(appelData)
}

// Fonction pour mettre à jour un appel existant
export async function updateAppel(id: number, appelData: Partial<Appel>) {
  const supabase = createClient()
  return await supabase.from('appels').update(appelData).eq('id', id)
}

// Fonction pour supprimer un appel
export async function deleteAppel(id: number) {
  const supabase = createClient()
  return await supabase.from('appels').delete().eq('id', id)
} 