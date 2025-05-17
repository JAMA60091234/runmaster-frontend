'use client';

// Frontend for RunMaster App (Mobile-Friendly React + Tailwind)
// This assumes your backend is hosted at: https://runmaster-backend.onrender.com

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

interface PlanResponse {
    text: string;
}

export default function RunMasterApp() {
    const [form, setForm] = useState({ age: "", goal: "", level: "beginner" });
    const [loading, setLoading] = useState(false);
    const [plan, setPlan] = useState<PlanResponse | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const generatePlan = async () => {
        setLoading(true);
        setPlan(null);
        try {
            const res = await axios.post("https://runmaster-backend.onrender.com/generate-plan", form);
            setPlan(res.data);
        } catch (err) {
            console.error("Failed to fetch plan", err);
        }
        setLoading(false);
    };

    const connectStrava = () => {
        window.location.href = "https://runmaster-backend.onrender.com/connect-strava";
    };

    return (
        <main className="min-h-screen bg-white dark:bg-black p-4 flex flex-col gap-4 items-center text-center">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">🏃‍♂️ RunMaster</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                Enter your info to get a custom AI running plan and calorie guide.
            </p>

            <div className="w-full max-w-xs flex flex-col gap-3">
                <Input
                    placeholder="Age"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    type="number"
                />
                <Input
                    placeholder="Goal (e.g., 5k in 4 weeks)"
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                />
                <select
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    className="p-2 rounded-lg border border-gray-300"
                >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <Button onClick={() => generatePlan()} disabled={loading}>
                    {loading ? <LoaderCircle className="animate-spin" /> : "Generate Plan"}
                </Button>
                <Button onClick={connectStrava} variant="outline">
                    Connect Strava
                </Button>
            </div>

            {plan && (
                <Card className="mt-4 w-full max-w-xs bg-gray-100 dark:bg-gray-800">
                    <CardContent className="text-left text-sm whitespace-pre-wrap p-4">
                        <strong>Training Plan:</strong>
                        <p>{plan.text}</p>
                    </CardContent>
                </Card>
            )}
        </main>
    );
}
