import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test de connexion à Supabase
    const { data, error, count } = await supabase
      .from('appels')
      .select('*', { count: 'exact' })
      .limit(1)

    if (error) {
      console.error('Erreur Supabase:', error)
      return NextResponse.json({ 
        success: false, 
        message: 'Erreur de connexion à Supabase',
        error: error.message
      }, { status: 500 })
    }

    // Renvoyer les informations de connexion réussie
    return NextResponse.json({ 
      success: true, 
      message: 'Connexion à Supabase réussie', 
      data: {
        recordCount: count,
        sampleData: data
      }
    })
  } catch (error: any) {
    console.error('Exception:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Exception lors du test de connexion',
      error: error.message 
    }, { status: 500 })
  }
} 