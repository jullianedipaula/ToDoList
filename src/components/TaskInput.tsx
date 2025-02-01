import { ChangeEvent, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface TaskInputProps {
  onAdd: (taskText: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [taskText, setTaskText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (taskText.trim() !== "") onAdd(taskText);
      setTaskText("");
    }
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      onAdd(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="w-full max-w-[640px] gap-2 flex justify-center">
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        onKeyDown={handleAddText}
        placeholder="Adicione uma nova tarefa"
        className="flex-1 h-14 p-3 text-white bg-gray500 rounded-lg outline-none placeholder-gray300"
      />
      <button
        className="ml-4 w-24 h-14 bg-blue-dark text-white rounded-lg flex items-center justify-center gap-1"
        onClick={handleAddTask}
      >
        Criar
        <CiCirclePlus size={18} />
      </button>
    </div>
  );
}
