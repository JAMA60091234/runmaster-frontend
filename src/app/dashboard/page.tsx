'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dumbbell, Flame, Route } from 'lucide-react'

interface DailyLog {
  runCompleted: boolean
  calories: string
  notes: string
}

const mockStats = {
  weeklyDistance: '32.5 km',
  weeklyCalories: '2,450',
  activeDays: '5/7',
}

export default function DashboardPage() {
  const [dailyLog, setDailyLog] = useState<DailyLog>({
    runCompleted: false,
    calories: '',
    notes: '',
  })

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <Card className="p-4">
          <Route className="h-6 w-6 text-primary" />
          <p className="mt-2 text-2xl font-bold">{mockStats.weeklyDistance}</p>
          <p className="text-sm text-muted-foreground">Distance</p>
        </Card>
        <Card className="p-4">
          <Flame className="h-6 w-6 text-primary" />
          <p className="mt-2 text-2xl font-bold">{mockStats.weeklyCalories}</p>
          <p className="text-sm text-muted-foreground">Calories</p>
        </Card>
        <Card className="p-4">
          <Dumbbell className="h-6 w-6 text-primary" />
          <p className="mt-2 text-2xl font-bold">{mockStats.activeDays}</p>
          <p className="text-sm text-muted-foreground">Active Days</p>
        </Card>
      </div>

      {/* Daily Checklist */}
      <Card className="mt-8 p-6">
        <h2 className="text-xl font-semibold">Daily Checklist</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={dailyLog.runCompleted}
              onCheckedChange={(checked) =>
                setDailyLog({ ...dailyLog, runCompleted: checked as boolean })
              }
            />
            <span>Completed today's run</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Calories eaten</label>
            <Input
              type="number"
              placeholder="Enter calories"
              value={dailyLog.calories}
              onChange={(e) =>
                setDailyLog({ ...dailyLog, calories: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Notes / Mood</label>
            <Input
              placeholder="How did you feel today?"
              value={dailyLog.notes}
              onChange={(e) => setDailyLog({ ...dailyLog, notes: e.target.value })}
            />
          </div>

          <Button className="w-full">Save Daily Log</Button>
        </div>
      </Card>
    </div>
  )
} 