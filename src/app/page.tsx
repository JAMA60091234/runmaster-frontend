'use client';

// Frontend for RunMaster App (Mobile-Friendly React + Tailwind)
// This assumes your backend is hosted at: https://runmaster-backend.onrender.com

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Zap, Activity, Trophy } from 'lucide-react'

export default function HomePage() {
    return (
        <div className="relative min-h-screen">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
            
            <div className="container px-4 py-12 space-y-12">
                {/* Hero section */}
                <div className="space-y-6 text-center">
                    <h1 className="gradient-text">
                        Your AI Running Coach
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get personalized training plans, track your progress, and achieve your running goals with RunMaster.
                    </p>
                    <div className="flex gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/generate-plan">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full">
                            <Link href="https://runmaster-backend.onrender.com/connect-strava">
                                Connect Strava
                                <Activity className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 space-y-2 bg-card/50 backdrop-blur">
                        <Zap className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-semibold">AI-Powered Plans</h3>
                        <p className="text-muted-foreground">
                            Get a customized training plan based on your goals and fitness level.
                        </p>
                    </Card>
                    <Card className="p-6 space-y-2 bg-card/50 backdrop-blur">
                        <Activity className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-semibold">Progress Tracking</h3>
                        <p className="text-muted-foreground">
                            Monitor your runs, calories, and daily achievements.
                        </p>
                    </Card>
                    <Card className="p-6 space-y-2 bg-card/50 backdrop-blur">
                        <Trophy className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-semibold">Goal Setting</h3>
                        <p className="text-muted-foreground">
                            Set and achieve your running goals with structured guidance.
                        </p>
                    </Card>
                </div>

                {/* Quick start section */}
                <Card className="p-8 bg-card/50 backdrop-blur">
                    <h2 className="mb-6">Quick Start Guide</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                            <p className="text-lg">Generate your personalized training plan</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                            <p className="text-lg">Connect with Strava to sync your runs</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                            <p className="text-lg">Follow your daily workouts</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                            <p className="text-lg">Track your progress in the dashboard</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
