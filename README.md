# Kanbanyanihan

**Kanbanyanihan** (a blend of "Kanban" and the Filipino spirit of communal unity, "Bayanihan") is a real-time, collaborative task management board. It allows multiple users to organize, drag, and drop tasks across different columns with instantaneous synchronization across all connected clients.

## Features

- **Real-Time Collaboration:** Changes made by one user are instantly broadcasted to all other connected users via WebSockets.
- **Drag-and-Drop Interface:** Smooth, accessible, and highly performant drag-and-drop task management.
- **Modern UI:** Styled entirely with Tailwind CSS for a responsive and clean user experience.
- **Single Source of Truth:** Centralized state management handled by a Node.js backend.

## Tech Stack

**Frontend:**
- React (via Vite)
- Tailwind CSS for styling
- @hello-pangea/dnd for drag-and-drop mechanics
- Socket.io-client for real-time WebSocket communication

**Backend:**
- Node.js & Express
- Socket.io for WebSocket server architecture
- CORS for cross-origin resource sharing

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have Node.js installed (v16 or higher recommended).

### 1. Clone the Repository
    git clone https://github.com/yourusername/kanbanyanihan.git
    cd kanbanyanihan

### 2. Set Up the Backend
Open a terminal and navigate to the backend folder:
    cd backend
    npm install
    npm run dev

*The WebSocket server will start running on http://localhost:3001.*

### 3. Set Up the Frontend
Open a **new** terminal window and navigate to the frontend folder:
    cd frontend
    npm install
    npm run dev

*The React application will start running on http://localhost:5173.*

## How to Test Real-Time Functionality

1. Open `http://localhost:5173` in your primary web browser.
2. Open the exact same link in a **secondary browser window** or an **Incognito/Private window**.
3. Place the windows side-by-side.
4. Drag a card from the "To Do" column and drop it into "Doing" or "Done". You will see the card move instantly in the other window!
