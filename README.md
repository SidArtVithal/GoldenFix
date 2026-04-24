GoldenRO Enterprise Cloud (v1.2.0 "Argus")

GoldenFIX is a high-performance, cloud-native Service-as-a-Software (SaaS) platform designed for water purifier maintenance networks. It bridges the gap between Clients, Field Technicians (Partners), and Administrators through a real-time, AI-augmented ecosystem.

🌟 Key Features

🛠️ Field Operations (Partner Portal)

AI Diagnostics: Integrated Gemini 2.5 Flash API to provide instant troubleshooting steps based on issue descriptions.

Photo Proof-of-Work: Native camera integration for capturing repair evidence.

Two-Factor Resolution: Service closure requires a client-side generated "Auth PIN," ensuring physical presence and job satisfaction.

🏢 Command Center (Admin Portal)

Cloud CRM: Real-time user onboarding and role management.

Live Ops Feed: Instant visibility into the service lifecycle (Open -> Accepted -> Resolved).

Access Control: Centralized whitelisting and revocation of phone-based access.

📱 Client Experience

One-Tap Reporting: Simplified ticket raising with AI text enhancement for clearer communication.

Live Tracking: Real-time status updates and automated security PIN generation.

🚀 Tech Stack

Frontend: React.js with Tailwind CSS for a premium, responsive UI.

Backend-as-a-Service: Firebase (Firestore & Authentication).

Intelligence: Google Gemini 2.5 Flash API for natural language processing and technical diagnostics.

Icons: Lucide-React.

📦 Getting Started

Prerequisites

A Firebase project with Firestore enabled.

A Google AI (Gemini) API Key.

Deployment

Clone the repository:

git clone [https://github.com/your-repo/golden-ro-enterprise.git](https://github.com/your-repo/golden-ro-enterprise.git)


Environment Configuration:
Ensure __firebase_config and __app_id are defined in your environment or passed via the standard React initialization flow.

🔒 Security Model: The "Argus" Protocol

Named after the all-seeing guardian of myth, this version implements:

Path-Level Security: All data follows the strict /artifacts/{appId}/public/data/ structure.

Whitelisted Auth: Only numbers pre-registered in the Admin Command Center can bypass the OTP gateway.

Verification Loop: Tickets cannot be closed without a client-provided cryptographic PIN.

Developed for GoldenRO Systems. Managed Smarter. Clean Water.
