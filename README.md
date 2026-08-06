# Kanbanyanihan

**Description:** A collaborative, real-time task management board blending the "Kanban" methodology with the Filipino spirit of communal unity ("Bayanihan"). Users can seamlessly drag and drop tasks, with changes instantly syncing across all connected screens.

**Tech Stack:**
- **Frontend:** React.js (Vite), Tailwind CSS, `@hello-pangea/dnd`
- **Backend:** Node.js, Express.js
- **Real-Time Integration:** Socket.io (WebSockets)

**What I Learned:**
- Mastered **Socket.io** to build a bi-directional, real-time backend that broadcasts state changes to multiple clients instantly.
- Implemented complex **drag-and-drop mechanics** using `@hello-pangea/dnd` while ensuring the React UI state stays perfectly synced with the backend data.
- Handled cross-origin resource sharing (CORS) and connected a separate frontend and backend server in a local development environment.

**How to Run Locally:**
1. Clone the repository.
2. Open a terminal for the backend:
   cd backend
   npm install
   npm run dev
3. Open a second terminal for the frontend:
   cd frontend
   npm install
   npm run dev
4. Open the provided localhost link in two separate browser windows to test the real-time drag-and-drop!
