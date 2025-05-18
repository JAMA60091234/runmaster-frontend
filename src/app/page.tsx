'use client';

// Frontend for RunMaster App (Mobile-Friendly React + Tailwind)
// This assumes your backend is hosted at: https://runmaster-backend.onrender.com

import { Calendar, ClipboardList, Link as LinkIcon, Settings, ChevronDown } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'
import { ActionButton } from '@/components/action-button'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with profile and notifications */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="h-8 w-8 rounded-full bg-white border shadow-sm flex items-center justify-center">
                        <span className="sr-only">Notifications</span>
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                    </div>
                </div>
                <h1 className="text-xl font-bold">Your Plan</h1>
                <div className="w-8" /> {/* Spacer for alignment */}
            </div>

            <div className="space-y-6 p-4">
                {/* Current Plan Card */}
                <Card className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Oxford Half Marathon Plan</h2>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <span>Your Race:</span>
                                <span className="text-red-500 font-medium">Oxford Half Marathon</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Your Race Date: OCT 13, 2024
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-black text-white font-bold">
                            13.1
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Weeks completed</span>
                                <span>3/11</span>
                            </div>
                            <ProgressBar total={11} completed={3} />
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">Distance</span>
                                <span>153/584 km</span>
                            </div>
                            <ProgressBar total={10} completed={3} />
                        </div>
                    </div>
                </Card>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-4">
                    <ActionButton
                        icon={Calendar}
                        label="Current Week"
                        variant="primary"
                    />
                    <ActionButton
                        icon={ClipboardList}
                        label="Rearrange Workouts"
                        variant="secondary"
                    />
                    <ActionButton
                        icon={LinkIcon}
                        label="Connected Apps"
                        variant="outline"
                    />
                    <ActionButton
                        icon={Settings}
                        label="Manage Plan"
                        variant="outline"
                    />
                </div>

                {/* Estimated Time Card */}
                <Card className="bg-red-500 text-white p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">Estimated Half Marathon Time</h3>
                        <ChevronDown className="h-5 w-5" />
                    </div>
                    <div className="text-center">
                        <div className="text-sm opacity-75 mb-1">IN 16 WEEKS</div>
                        <div className="text-2xl font-bold">1:30:00-1:34:00</div>
                    </div>
                </Card>

                {/* Week Schedule */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <div className="text-sm text-muted-foreground">5-11 Aug</div>
                            <h3 className="text-lg font-bold">Week 1</h3>
                        </div>
                        <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div
                                key={i}
                                className="min-w-[100px] p-4 rounded-lg bg-white border shadow-sm flex flex-col items-center gap-2"
                            >
                                <span className="text-sm font-medium">Day {i + 1}</span>
                                <div className="h-8 w-8 rounded-full bg-gray-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
