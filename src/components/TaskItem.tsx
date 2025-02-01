import { GoCheckCircleFill } from "react-icons/go";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Task } from "../App";
import { IoTrashOutline, IoTrashSharp } from "react-icons/io5";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskItem({
  task,
  toggleTask,
  deleteTask,
}: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="flex justify-between items-center p-3 rounded-2xl bg-gray500 border border-gray400 ">
      <div className="flex gap-2">
        <button onClick={() => toggleTask(task.id)} className="p-2 rounded">
          {task.completed ? (
            <GoCheckCircleFill size={24} className="text-purple-dark" />
          ) : (
            <MdRadioButtonUnchecked size={24} className="text-blue" />
          )}
        </button>
        <span
          className={`items-center flex text-sm ${
            task.completed ? "text-gray-300 line-through" : ""
          }`}
        >
          {task.text}
        </span>
        <button
          onClick={() => deleteTask(task.id)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-2 relative flex items-center justify-center text-gray300"
        >
          {isHovered ? (
            <IoTrashSharp size={24} />
          ) : (
            <IoTrashOutline size={24} />
          )}
        </button>
      </div>
    </li>
  );
}
