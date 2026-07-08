import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialData = {
  todo: [
    { id: 'task-1', content: 'Set up Vite and React' },
    { id: 'task-2', content: 'Install Drag and Drop library' },
  ],
  doing: [
    { id: 'task-3', content: 'Build the Kanban UI' },
  ],
  done: [],
};

function App() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const column = [...columns[source.droppableId]];
      const [removed] = column.splice(source.index, 1);
      column.splice(destination.index, 0, removed);
      setColumns({ ...columns, [source.droppableId]: column });
    } else {
      const sourceCol = [...columns[source.droppableId]];
      const destCol = [...columns[destination.droppableId]];
      const [removed] = sourceCol.splice(source.index, 1);
      destCol.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      });
    }
  };

  return (
    <div className="p-10 font-sans bg-gray-900 min-h-screen text-white">
      <h1 className="text-center mb-10"> Kanbanyanihan Board</h1>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {Object.entries(columns).map(([columnId, tasks]) => (
            <div key={columnId} style={{ backgroundColor: '#2a2a40', padding: '15px', borderRadius: '8px', width: '300px' }}>
              <h2 style={{ textTransform: 'capitalize', marginTop: '0', borderBottom: '2px solid #444', paddingBottom: '10px' }}>
                {columnId}
              </h2>
              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: '200px' }}>
                    {tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              padding: '15px',
                              margin: '0 0 10px 0',
                              backgroundColor: snapshot.isDragging ? '#4b4b7a' : '#3b3b5a',
                              borderRadius: '4px',
                              boxShadow: snapshot.isDragging ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
                              ...provided.draggableProps.style,
                            }}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;