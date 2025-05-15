TcapyAI — Multifunctional AI Platform for Vietnamese Users
Overview
TcapyAI is a versatile AI platform designed to empower Vietnamese users with advanced AI tools such as Chat AI, Image Generation, Music Creation, Document Processing, and more. Our mission is to provide a stable, user-friendly, and feature-rich AI experience that supports creativity and productivity.

Key Features
Landing Page: Introduction, features overview, pricing plans, and free credit info.

Authentication: Secure user registration and login with JWT tokens.

Dashboard: Central workspace with Chat AI, credit management, and user settings.

Chat AI: Interactive chat interface supporting real-time AI responses.

Credit Management: Track credit balance and usage history with notifications.

Future Extensions: AI-based image and music generation, advanced document processing, video/audio creation.

Technology Stack
Frontend: React, TypeScript, Vite, Tailwind CSS, React Router, Axios

Backend: Node.js with Express or NestJS, JWT authentication

State Management: React Context API, scalable to Redux or Zustand

Containerization: Docker and Docker Compose

Security: HTTPS, JWT-based auth and role-based access control

Project Structure (Frontend)
css
Sao chép
Chỉnh sửa
src/
  assets/
  components/
    common/
    landing/
    auth/
    dashboard/
  context/
  hooks/
  layouts/
  pages/
  services/
  utils/
  App.tsx
  main.tsx
  index.css
Getting Started
Backend Setup
bash
Sao chép
Chỉnh sửa
cd backend
npm install
npm run dev
Server runs at http://localhost:5000

Frontend Setup
bash
Sao chép
Chỉnh sửa
cd frontend
npm install
npm run dev
Frontend runs at http://localhost:5173

Development Roadmap
MVP: Complete landing page, authentication, basic dashboard with Chat AI and credit management.

Expansion: Add AI image/music creation, advanced document processing, multi-platform integration.

Optimization: Enhance UI/UX, responsiveness, security, and performance.

Synchronization: Robust API communication, error handling, and state management.

Contributing
Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request.

License
All rights reserved by the TcapyAI development team. Permission required for copying or distribution.
