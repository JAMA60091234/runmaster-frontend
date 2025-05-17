'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Moon, Sun, Power } from 'lucide-react'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  const disconnectStrava = () => {
    // TODO: Implement Strava disconnect logic
    console.log('Disconnecting from Strava...')
  }

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="mt-8 space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Appearance</h2>
          <div className="mt-4 flex gap-4">
            <Button
              variant={theme === 'light' ? 'default' : 'outline'}
              onClick={() => setTheme('light')}
              className="flex-1"
            >
              <Sun className="mr-2 h-4 w-4" />
              Light
            </Button>
            <Button
              variant={theme === 'dark' ? 'default' : 'outline'}
              onClick={() => setTheme('dark')}
              className="flex-1"
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold">Connected Services</h2>
          <div className="mt-4">
            <Button
              variant="destructive"
              onClick={disconnectStrava}
              className="w-full"
            >
              <Power className="mr-2 h-4 w-4" />
              Disconnect Strava
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
} 