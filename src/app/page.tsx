'use client';

// Frontend for RunMaster App (Mobile-Friendly React + Tailwind)
// This assumes your backend is hosted at: https://runmaster-backend.onrender.com

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="container px-4 py-8">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to RunMaster</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Your AI-powered running coach that creates personalized training plans.
            </p>
            
            <div className="mt-8 space-y-4">
                <div className="rounded-lg border bg-card p-6">
                    <h2 className="text-2xl font-semibold">Quick Start Guide</h2>
                    <ol className="mt-4 space-y-3 text-muted-foreground">
                        <li>1. Generate your personalized training plan</li>
                        <li>2. Connect with Strava to sync your runs</li>
                        <li>3. Follow your daily workouts</li>
                        <li>4. Track your progress in the dashboard</li>
                    </ol>
                </div>

                <div className="flex gap-4">
                    <Button asChild className="flex-1">
                        <Link href="/generate-plan">Generate Plan</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                        <Link href="https://runmaster-backend.onrender.com/connect-strava">
                            Connect Strava
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
