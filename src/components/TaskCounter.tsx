interface TaskCounterProps {
  total: number;
  completed: number;
}

export default function TaskCounter({ total, completed }: TaskCounterProps) {
  return (
    <div className="w-full flex justify-between px-4 mt-6">
      <span className="font-bold text-blue gap-4">
        Tarefas criadas:{" "}
        <span className="bg-gray400 text-gray200 text-sm rounded-2xl px-2 py-1">
          {total}
        </span>
      </span>
      <span className="font-bold text-purple gap-4">
        Concluídas:{" "}
        <span className="bg-gray400 text-gray200 text-sm rounded-2xl px-2 py-1">
          {total === 0 ? "0" : `${completed} de ${total}`}
        </span>
      </span>
    </div>
  );
}
