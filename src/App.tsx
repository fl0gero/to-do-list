import { useState } from 'react';
import { TaskType } from './components/Task/Task';
import TaskList from './components/TaskList/TaskList';
import AddIcon from '@mui/icons-material/Add';
import './index.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function addTask() {
    if (!newItem || newItem.trim().length === 0) {
      alert('You need to enter the item');
    } else {
      const task = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setTasksList((oldList) => [...oldList, task]);
      setNewItem('');
    }
  }

  function deleteTask(id: number) {
    const removeItem = tasksList.filter((item) => {
      return item.id !== id;
    });
    setTasksList(removeItem);
  }

  function onSave(newTask: TaskType) {
    setTasksList(
      tasksList.map((task) => (task.id === newTask.id ? newTask : task)),
    );
  }

  return (
    <div className="h-full bg-orange-100 pt-20">
      <div className="w-8/12 mx-auto">
        <header className="flex items-center mb-2">
          <AddIcon className="text-[2.1rem]" />
          <h1 className="text-3xl w-auto">Add new task</h1>
        </header>
        <div className="flex">
          <input
            className="w-5/6 h-16 p-4 text-3xl bg-orange-100 border-solid border-4 border-orange-950 rounded-3xl placeholder-black focus-visible:outline-none"
            type="text"
            placeholder="Write here"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="h-16 w-16 mr-24 ml-8 border-solid border-4 border-orange-950 rounded-full justify-center"
            onClick={addTask}
          >
            <AddIcon className="text-[3rem]" />
          </button>
        </div>
        <TaskList
          tasksList={tasksList}
          deleteTask={deleteTask}
          onSave={onSave}
        />
      </div>
    </div>
  );
}

export default App;
