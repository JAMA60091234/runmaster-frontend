'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProgressBar } from '@/components/ui/progress-bar'
import { Calendar, ListChecks, Link2, Settings, Sun, BarChart2, Users, BookOpen } from 'lucide-react'

// Mock data - replace with actual API call
const planData = {
  name: 'Oxford Half Marathon Plan',
  race: {
    name: 'Oxford Half Marathon',
    date: 'OCT 13, 2024',
    distance: '13.1',
  },
  progress: {
    weeksCompleted: 3,
    totalWeeks: 11,
    distanceCompleted: 153,
    totalDistance: 584,
  },
  estimatedTime: {
    range: '1:30:00-1:34:00',
    weekRange: '5-11 Aug',
  },
  currentWeek: {
    number: 1,
    days: Array.from({ length: 7 }, (_, i) => ({
      number: i + 1,
      completed: i === 0,
    })),
  },
}

export default function PlanPage() {
  const [plan] = useState(planData)

  return (
    <div className="container px-4 py-6 max-w-2xl mx-auto bg-white">
      {/* Header with profile and notifications */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <h1 className="text-xl font-semibold">Your Plan</h1>
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-black rounded"></div>
        </div>
      </div>

      {/* Plan Title with Badge */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold">{plan.name}</h2>
        <div className="bg-black text-white rounded-lg px-3 py-1 flex items-center">
          <span className="text-sm">{plan.race.distance}</span>
        </div>
      </div>

      {/* Race Details with Progress Bar */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="space-y-1 mb-3">
          <p className="text-sm">Your Race: <span className="text-red-500">{plan.race.name}</span></p>
          <p className="text-sm">Your Race Date: {plan.race.date}</p>
        </div>
        
        <ProgressBar total={11} completed={3} className="mb-3" />
        
        <div className="flex justify-between text-sm">
          <div>
            <span className="text-gray-500">Weeks completed</span>
            <p className="font-semibold">{plan.progress.weeksCompleted}/{plan.progress.totalWeeks}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-500">Distance</span>
            <p className="font-semibold">{plan.progress.distanceCompleted}/{plan.progress.totalDistance} km</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col items-center">
          <Button variant="outline" className="w-14 h-14 rounded-full bg-red-100 hover:bg-red-200 border-none">
            <Calendar className="h-6 w-6 text-red-500" />
          </Button>
          <span className="text-xs mt-2 text-center">Current Week</span>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="outline" className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 border-none">
            <ListChecks className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs mt-2 text-center">Rearrange Workouts</span>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="outline" className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 border-none">
            <Link2 className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs mt-2 text-center">Connected Apps</span>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="outline" className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 border-none">
            <Settings className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs mt-2 text-center">Manage Plan</span>
        </div>
      </div>

      {/* Estimated Time */}
      <div className="bg-white rounded-xl border mb-8">
        <div className="flex items-center justify-between p-4 bg-red-500 text-white rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="bg-black rounded-lg p-1">
              <span className="text-xs">{plan.race.distance}</span>
            </div>
            <h3 className="font-semibold">Estimated Half Marathon Time</h3>
          </div>
          <span className="text-xs">ⓘ</span>
        </div>
        <div className="p-4 text-center">
          <p className="text-xs text-gray-500 mb-2">IN 16 WEEKS</p>
          <p className="text-2xl font-semibold mb-2">{plan.estimatedTime.range}</p>
          <p className="text-sm text-gray-500">{plan.estimatedTime.weekRange}</p>
          <Button variant="ghost" className="mt-4 text-sm font-semibold">
            SEE MORE ▼
          </Button>
        </div>
      </div>

      {/* Current Week */}
      <div className="mb-24">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500">{plan.estimatedTime.weekRange}</p>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Week 1</span>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        <ProgressBar total={7} completed={5} className="mb-4" />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Sun className="h-5 w-5 text-gray-500" />
            <span className="text-xs">Today</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-xs">Plan</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <BarChart2 className="h-5 w-5 text-gray-500" />
            <span className="text-xs">Activities</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5 text-gray-500" />
            <span className="text-xs">Community</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5 text-gray-500" />
            <span className="text-xs">Support</span>
          </Button>
        </div>
      </nav>
    </div>
  )
} 