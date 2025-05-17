'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

// Mock data - replace with actual API call
const mockPlan = {
  weeks: [
    {
      weekNumber: 1,
      workouts: [
        {
          day: 'Monday',
          description: '5k easy run',
          completed: false,
        },
        {
          day: 'Wednesday',
          description: 'Interval training: 8x400m',
          completed: false,
        },
        {
          day: 'Saturday',
          description: '8k long run',
          completed: false,
        },
      ],
    },
    {
      weekNumber: 2,
      workouts: [
        {
          day: 'Monday',
          description: '6k easy run',
          completed: false,
        },
        {
          day: 'Wednesday',
          description: 'Tempo run: 20 minutes',
          completed: false,
        },
        {
          day: 'Saturday',
          description: '10k long run',
          completed: false,
        },
      ],
    },
  ],
}

export default function PlanPage() {
  const [plan, setPlan] = useState(mockPlan)

  const toggleWorkout = (weekIndex: number, workoutIndex: number) => {
    const newPlan = { ...plan }
    newPlan.weeks[weekIndex].workouts[workoutIndex].completed = 
      !newPlan.weeks[weekIndex].workouts[workoutIndex].completed
    setPlan(newPlan)
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold">Your Training Plan</h1>
      <p className="mt-2 text-muted-foreground">
        Check off your workouts as you complete them.
      </p>

      <div className="mt-8 space-y-6">
        {plan.weeks.map((week, weekIndex) => (
          <Card key={week.weekNumber} className="p-6">
            <h2 className="text-xl font-semibold">Week {week.weekNumber}</h2>
            <div className="mt-4 space-y-4">
              {week.workouts.map((workout, workoutIndex) => (
                <div
                  key={workout.day}
                  className="flex items-center space-x-4"
                >
                  <Checkbox
                    checked={workout.completed}
                    onCheckedChange={() => toggleWorkout(weekIndex, workoutIndex)}
                  />
                  <div>
                    <p className="font-medium">{workout.day}</p>
                    <p className="text-sm text-muted-foreground">
                      {workout.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 