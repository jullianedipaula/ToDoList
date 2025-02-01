import { v4 as uuidv4 } from "uuid";
import Logo from "./assets/Logo.png";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskCounter from "./components/TaskCounter";
import TaskList from "./components/TaskList";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAdd = (taskText: string) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: uuidv4(), text: taskText, completed: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="h-screen flex flex-col items-center /*bg-gray600*/ bg-[linear-gradient(to_bottom,_#0D0D0D_20%,_#1A1A1A_20%)]">
      <img
        src={Logo}
        alt="ToDo Logo"
        className="flex items-center justify-center w-32 h-12 mt-12"
      />

      <div className="w-full flex flex-col justify-between items-center mt-15">
        <div className="w-full max-w-[640px] gap-2 flex justify-center items-center">
          <TaskInput onAdd={onAdd} />
        </div>

        <div className="flex flex-col items-center w-full max-w-[640px] mx-auto mt-8">
          <TaskCounter
            total={tasks.length}
            completed={tasks.filter((task) => task.completed).length}
          />

          <div className="h-0.5 w-full bg-gray300 border-t my-6"></div>

          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
