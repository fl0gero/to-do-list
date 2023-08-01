import DeleteIcon from '@mui/icons-material/Delete';
import SettingIcon from '@mui/icons-material/Create';
import Confirm from '@mui/icons-material/Check';
import { useState } from 'react';

export type TaskProps = {
  task: TaskType;
  deleteTask: (id: number) => void;
  onSave: (task: TaskType) => void;
};

export type TaskType = {
  id: number;
  value: string;
};

function Task({ task, deleteTask, onSave }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isTaskDone, setIsTaskDone] = useState(false);
  const [editingItem, setEditingItem] = useState('');
  function editTask() {
    setEditingItem(task.value);
    setIsEditing(true);
  }
  function setCheckBoxStatus() {
    if (isTaskDone) {
      setIsTaskDone(false);
    } else {
      setIsTaskDone(true);
    }
  }

  function setNewTask() {
    onSave({ ...task, value: editingItem });
    setIsEditing(false);
  }
  return (
    <article className="flex w-6/6 pt-4 items-center">
      <input
        className="appearance-none bg-orange-100 border-solid border-4 border-orange-950 h-10 w-10 mr-8 rounded-full checked:bg-orange-950 flex-shrink-0"
        type="checkbox"
        onClick={setCheckBoxStatus}
      />
      <div
        className="flex h-16 w-5/6 p-4 text-3xl border-solid border-4 border-orange-950 rounded-3xl items-center"
        key={task.id}
      >
        {isEditing ? (
          <input
            type="text"
            className="bg-orange-100 border-b-4 border-orange-950 w-full focus-visible:outline-none"
            value={editingItem}
            onChange={(e) => setEditingItem(e.target.value)}
          />
        ) : (
          <h1
            className={`${
              isTaskDone ? 'line-through text-gray-600' : 'no-underline'
            }`}
          >
            {task.value}
          </h1>
        )}
      </div>
      {isEditing ? (
        <button
          className="w-16 h-16 ml-8 border-solid border-4 border-orange-950 rounded-full flex-shrink-0"
          onClick={setNewTask}
        >
          <Confirm className="text-[3rem]" />
        </button>
      ) : (
        <button
          className="w-16 h-16 ml-8  border-solid border-4 border-orange-950 rounded-full flex-shrink-0"
          onClick={editTask}
        >
          <SettingIcon className="text-[3rem]" />
        </button>
      )}
      <button
        className="w-16 h-16 ml-8 border-solid border-4 border-orange-950 rounded-full flex-shrink-0"
        onClick={() => deleteTask(task.id)}
      >
        <DeleteIcon className="text-[3rem]" />
      </button>
    </article>
  );
}

export default Task;
