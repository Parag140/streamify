Here’s a detailed `README.md`-ready **project description** for your app, tailored for a technical audience and including relevant aspects of your stack, features, architecture, and development philosophy:

# Streamify – A MERN Stack Real-Time Chat & Friendship Platform

**Streamify** is a modern fullstack web application that enables users to connect, chat in real-time, manage friendships, and collaborate using advanced UI and robust backend infrastructure. The project leverages the MERN stack (MongoDB, Express, React, and Node.js), with real-time communication powered by **Stream Chat** and a highly modular, scalable codebase.

## Key Features

- **User Authentication & Onboarding:**  
  Secure signup, login, and session management with JWT-based authentication, cookies, and onboarding flow to personalize language preferences and user profiles.

- **Friends System:**  
  - Send, accept, or reject friend requests.
  - Real-time notifications for requests, with a UI to review sent, received, and accepted requests.
  - Displays a "Friends" page showcasing all connections with profile pictures and language details.

- **Chat/Messaging:**  
  - **Real-time 1-to-1 chat** with support for text, threads, emoji, and more.
  - Integration of **Stream Chat API** for highly scalable, production-ready messaging.
  - Persistent message history, "last message" preview, unread badge, and typing indicators.
  - In-chat **video call** link generation.

- **Notifications:**  
  Centralized notification center for friend requests and upcoming chat events.

- **UI/UX:**  
  - Responsive and mobile-friendly, built using **React** with **Tailwind CSS**.
  - Sidebar and Navbar navigation, modern cards, avatars, theme support (light/dark), and smooth state transitions.
  - Uses Vite for extremely fast dev build/reload cycles.

## Technical Stack & Architecture

| Layer           | Technology                          |
|-----------------|-------------------------------------|
| Frontend        | React (with Vite), Tailwind CSS     |
| State Mgmt      | React Query (Tanstack), useState    |
| Auth            | JWT, cookies, role-based access     |
| Backend         | Node.js, Express                    |
| Database        | MongoDB (Mongoose ODM)              |
| Realtime/Chat   | Stream Chat API & SDK               |
| Dev Tools       | ESLint, Prettier, Autoprefixer      |
| Env Mgmt        | dotenv                              |

**Dev Experience:**  
- Structure optimized for teamwork, with well-separated modules/hooks/components.
- All code adheres to best practices, linting, and formatting standards.
- Beginner-friendly Hinglish (Hindi+English) documentation and guides for onboarding new contributors[1][2].

## How It Works

1. **User joins Streamify:**  
   Registers and customizes their profile, including native and learning language.

2. **Discover friends:**  
   The AI-powered recommendation system suggests new friends based on profile and mutual interests.

3. **Make connections:**  
   Expansive friend management – send requests, accept connections, and maintain your network.

4. **Start chatting:**  
   Seamless transition to real-time private chats, with advanced features via Stream Chat (secure websocket connections, offline support, message status etc.).

5. **Stay in sync:**  
   All activities reflected instantly across tabs/devices thanks to real-time updates and robust state management.

## Folder Structure

```
/src
  /components    # Shared UI and logic: Navbar, Sidebar, FriendCard, etc.
  /hooks         # Custom hooks for logic reuse (e.g., Auth, Logout)
  /lib           # API handlers, Stream Chat integration
  /pages         # Route-level pages: HomePage, FriendsPage, NotificationsPage, ChatHomePage, StreamChatPage
  /store         # Zustand stores for theme management, etc.
  /assets        # Static files, images & icons
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (Atlas or local)
- Stream Chat account (for API key/secret)
- [Optional] Notion for documentation (custom educational integration)[3]

### Installation

```bash
git clone https://github.com/yourusername/streamify.git
cd streamify
cp .env.example .env   # Fill in your own credentials for MongoDB, Stream Chat etc.
npm install
npm run dev            # Starts both backend and frontend (see package.json scripts)
```

### Backend API Structure

- RESTful routes for users, authentication, friendships, notifications, and chat
- Chat API endpoints integrate with Stream for token generation and message routing

