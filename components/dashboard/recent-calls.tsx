"use client"

import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"
import { PhoneIcon, CheckCircleIcon, XCircleIcon, PhoneXMarkIcon } from "@heroicons/react/24/outline"

interface Call {
  id: string
  customer: string
  phone: string
  status: "qualified" | "not_qualified" | "no_answer"
  callTime: Date
  duration: number
}

const recentCalls: Call[] = [
  {
    id: "call-1",
    customer: "Dupont SARL",
    phone: "+33612345678",
    status: "qualified",
    callTime: new Date(2023, 9, 12, 14, 23),
    duration: 185
  },
  {
    id: "call-2",
    customer: "Martin & Associés",
    phone: "+33698765432",
    status: "not_qualified",
    callTime: new Date(2023, 9, 12, 11, 15),
    duration: 142
  },
  {
    id: "call-3",
    customer: "Bernard Industries",
    phone: "+33687654321",
    status: "qualified",
    callTime: new Date(2023, 9, 11, 16, 52),
    duration: 237
  },
  {
    id: "call-4",
    customer: "Petit Consulting",
    phone: "+33678901234",
    status: "no_answer",
    callTime: new Date(2023, 9, 11, 10, 34),
    duration: 0
  },
  {
    id: "call-5",
    customer: "Durand Technologies",
    phone: "+33634567890",
    status: "not_qualified",
    callTime: new Date(2023, 9, 10, 15, 47),
    duration: 112
  }
]

function formatDuration(seconds: number): string {
  if (seconds === 0) return "0s"
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`
}

function StatusIcon({ status }: { status: Call["status"] }) {
  switch (status) {
    case "qualified":
      return <CheckCircleIcon className="h-5 w-5 text-indigo-500" />
    case "not_qualified":
      return <XCircleIcon className="h-5 w-5 text-violet-500" />
    case "no_answer":
      return <PhoneXMarkIcon className="h-5 w-5 text-slate-500" />
  }
}

export function RecentCalls() {
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground mb-2">
        Derniers appels effectués par votre assistant vocal
      </div>
      <div className="space-y-3">
        {recentCalls.map((call) => (
          <div 
            key={call.id} 
            className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <PhoneIcon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm text-primary-foreground">{call.customer}</div>
                <div className="text-xs text-muted-foreground">{call.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xs text-right">
                <div className="text-primary-foreground/80">{formatDistanceToNow(call.callTime, { addSuffix: true, locale: fr })}</div>
                <div className="text-muted-foreground">{formatDuration(call.duration)}</div>
              </div>
              <StatusIcon status={call.status} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-2">
        <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
          Voir tous les appels →
        </button>
      </div>
    </div>
  )
}