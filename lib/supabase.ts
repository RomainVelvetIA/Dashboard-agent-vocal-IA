import { createClient } from '@supabase/supabase-js'

// Ces variables d'environnement devront être configurées dans un fichier .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Création du client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 