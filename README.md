# Dashboard Assistant Vocal IA

Un tableau de bord interactif, moderne et responsive pour suivre les performances d'un assistant vocal IA qui appelle automatiquement les leads, les qualifie et prend des rendez-vous.

## Fonctionnalités

- **Vue d'ensemble** : Visualisation des KPIs clés et graphiques interactifs
- **Historique des appels** : Transcripts, audio, résumés IA et annotations
- **Planning & Rendez-vous** : Suivi des RDVs générés par l'assistant
- **Facturation & Crédits** : Gestion de l'abonnement et consommation
- **Paramètres & Intégrations** : Configuration et connexion avec d'autres services
- **Recommendations IA** : Insights pour optimiser les performances

## Technologies utilisées

- **Frontend** : Next.js 14, React 18, Tailwind CSS
- **Graphiques** : Recharts, Chart.js
- **UI Components** : Composants UI personnalisés inspirés de shadcn/ui
- **État** : React Hooks
- **Design System** : Interface claire, intuitive avec support du mode sombre

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/yourusername/dashboard-assistant-vocal-ia.git
cd dashboard-assistant-vocal-ia

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Structure du projet

```
/
├── app/              # Structure Next.js App Router
│   ├── page.tsx      # Page d'accueil (Dashboard)
│   ├── appels/       # Section historique des appels
│   ├── rendez-vous/  # Section planning et RDVs
│   └── ...
├── components/       # Composants réutilisables
│   ├── ui/           # Composants UI de base
│   ├── dashboard/    # Composants spécifiques au dashboard
│   └── ...
├── lib/              # Fonctions utilitaires
├── public/           # Ressources statiques
└── ...
```

## Capture d'écran

![Dashboard Assistant Vocal IA](https://example.com/screenshot.png)

## Licence

MIT 