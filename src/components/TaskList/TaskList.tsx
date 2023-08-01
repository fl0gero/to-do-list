import Task, { TaskType } from '../Task/Task';

type TaskListProps = {
  tasksList: TaskType[];
  deleteTask: (id: number) => void;
  onSave: (task: TaskType) => void;
};

function TaskList({ tasksList, deleteTask, onSave }: TaskListProps) {
  const isZeroTasks = tasksList.length === 0;

  return (
    <div className="mx-auto mt-2 w-full">
      {isZeroTasks && <h1 className="text-center">There is no task yet.</h1>}

      {tasksList.map((task) => (
        <Task task={task} deleteTask={deleteTask} onSave={onSave} />
      ))}
    </div>
  );
}

export default TaskList;
