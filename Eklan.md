# Eklan

> Eklan is an AI-powered English practice platform that helps healthcare professionals build confident spoken communication through realistic clinical drills, voice and text conversations, pronunciation feedback, live tutor classes, and personalized learning journeys.

## Portfolio Summary

Eklan serves learners, tutors, and administrators through a responsive web application and a companion mobile app. Learners can practice patient, colleague, doctor, family, and interview scenarios; use AI simulation and Free Talk sessions; complete structured drills; attend live classes; and track progress, badges, and streaks. Tutors and administrators manage content, assignments, learners, reviews, classes, and subscriptions.

## Technology

- **Web and API:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and Next.js Route Handlers
- **Mobile:** Expo 54, Expo Router, React Native 0.81, and TypeScript
- **Backend:** Versioned `/api/v1` API, domain services, MongoDB with Mongoose, and server-side validation with Zod
- **Authentication and state:** Better Auth, cookie sessions on web, Bearer-token sessions on mobile, TanStack Query, and Zustand
- **AI and media:** Google Gemini for text and real-time voice practice, OpenAI integrations, Speechace pronunciation scoring, FFmpeg audio processing, and Cloudinary media storage
- **Payments and notifications:** Stripe, Apple In-App Purchases, Firebase Cloud Messaging, web push, and Google Calendar integration
- **Observability:** Sentry, PostHog, and Amplitude

## Platforms and Hosting

- **Web and backend:** Deployed as a Next.js application on Vercel, with the web UI and API hosted together
- **Progressive web app:** The web client supports PWA caching and offline-friendly asset behavior
- **Mobile:** Distributed as an Expo/React Native application with EAS builds and Expo OTA updates for iOS and Android
- **Data:** MongoDB is the persistent data store for users, drills, learning progress, classes, AI session summaries, and subscription-related records

## Architecture

Both clients use the same `/api/v1` backend and shared business rules. The web application provides learner, tutor, and admin experiences, while the mobile application focuses on the learner experience. Role-based access control, subscription gates, localized interfaces, analytics, and error monitoring are built into the platform.
