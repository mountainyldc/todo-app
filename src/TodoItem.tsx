import { useState } from 'react';
import { Todo } from './types';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(todo.id), 300);
  };

  return (
    <li
      className={`flex items-center justify-between p-3 transition-opacity duration-300 ${isDeleting ? 'opacity-0' : 'opacity-100'
        } hover:bg-gray-50`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        ×
      </button>
    </li>
  );
}