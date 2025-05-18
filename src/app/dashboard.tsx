/* Cursor, use this prompt to generate this file content:
Build a mobile-first frontend for a running app called RunMaster that integrates with a backend API at https://runmaster-backend.onrender.com. The app should be extremely clean, modern, and fully responsive. Make the design beautiful using Tailwind CSS with support for light and dark modes (user can toggle it in settings).

Core Requirements:

User Dashboard Page after login:

Displays upcoming runs from the AI-generated plan.

Daily checklist to track:

Run completed (checkbox ✅)

Calories eaten (text input or selection)

Notes or mood (text box)

Quick stats: total distance, calories this week, etc.

Add navigation bar at bottom (Home, Plan, Dashboard, Settings).

Home Page:

Welcome + quick start guide.

“Generate Plan” form (age, goal, level) — already working, keep this.

“Connect with Strava” button that redirects to:
https://runmaster-backend.onrender.com/connect-strava

Plan Page:

Displays training plan from the backend.

Structured view (week-by-week cards) with the ability to check off each workout.

Settings Page:

Light/Dark mode toggle

Option to update fitness goal or level and regenerate plan

“Disconnect from Strava” option

Keep backend functionality working exactly the same — backend endpoints include:

POST /generate-plan → takes { age, goal, level }

GET /connect-strava → redirects to Strava OAuth

Code using React + Next.js App Router, not Pages Router.

Use useEffect and useState properly in client components only.


Use @/components/ui/* for UI components, and follow the shadcn-ui structure.

Make sure everything works in both mobile view and desktop but prioritize mobile layout.

Design inspiration: Apple Fitness, Strava, Nike Run Club.
*/
