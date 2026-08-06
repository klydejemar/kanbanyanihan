#  Kanbanyanihan

**Kanbanyanihan** (a blend of "Kanban" and the Filipino spirit of communal unity, "Bayanihan") is a real-time, collaborative task management board. It allows multiple users to organize, drag, and drop tasks across different columns with instantaneous synchronization across all connected clients.

##  Features

- **Real-Time Collaboration:** Changes made by one user are instantly broadcasted to all other connected users via WebSockets.
- **Drag-and-Drop Interface:** Smooth, accessible, and highly performant drag-and-drop task management.
- **Modern UI:** Styled entirely with Tailwind CSS for a responsive and clean user experience.
- **Single Source of Truth:** Centralized state management handled by a Node.js backend.

##  Tech Stack

**Frontend:**
- [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) for drag-and-drop mechanics
- [Socket.io-client](https://socket.io/) for real-time WebSocket communication

**Backend:**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/) for WebSocket server architecture
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) for cross-origin resource sharing

##  Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/kanbanyanihan.git](https://github.com/yourusername/kanbanyanihan.git)
cd kanbanyanihan
