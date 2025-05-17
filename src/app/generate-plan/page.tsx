'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { LoaderCircle } from 'lucide-react'

interface PlanResponse {
  text: string
}

export default function GeneratePlanPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    age: '',
    goal: '',
    level: 'beginner',
  })
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState<PlanResponse | null>(null)

  const generatePlan = async () => {
    setLoading(true)
    setPlan(null)
    try {
      const res = await axios.post('https://runmaster-backend.onrender.com/generate-plan', form)
      setPlan(res.data)
      router.push('/plan')
    } catch (err) {
      console.error('Failed to generate plan:', err)
    }
    setLoading(false)
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold">Generate Your Plan</h1>
      <p className="mt-2 text-muted-foreground">
        Tell us about yourself and your running goals.
      </p>

      <div className="mt-8 space-y-4">
        <Input
          type="number"
          placeholder="Your age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <Input
          placeholder="Your goal (e.g., Run 5k in 4 weeks)"
          value={form.goal}
          onChange={(e) => setForm({ ...form, goal: e.target.value })}
        />

        <Select
          value={form.level}
          onValueChange={(value) => setForm({ ...form, level: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="w-full"
          onClick={generatePlan}
          disabled={loading || !form.age || !form.goal}
        >
          {loading ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Plan'
          )}
        </Button>
      </div>

      {plan && (
        <Card className="mt-6 p-4">
          <pre className="whitespace-pre-wrap text-sm">{plan.text}</pre>
        </Card>
      )}
    </div>
  )
} 