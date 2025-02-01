import TaskItem from "./TaskItem";
import { Task } from "../App";
import { PiClipboardText } from "react-icons/pi";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export default function TaskList({
  tasks,
  toggleTask,
  removeTask,
}: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          <span className=" flex items-center justify-center mt-10 mb-4">
            {" "}
            <PiClipboardText size={56} />
          </span>
          <span className="font-bold ">
            Você ainda não tem tarefas cadastradas
          </span>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      ) : (
        tasks.map((task) => (
          <div className="text-gray100">
            <TaskItem
              key={task.id}
              toggleTask={toggleTask}
              task={task}
              deleteTask={removeTask}
            />
          </div>
        ))
      )}
    </ul>
  );
}
