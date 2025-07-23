import useTodos from './useTodos';
import TodoItem from './TodoItem';
import { FilterType } from './types';

type TodoListProps = {
  filter: FilterType;
};

export default function TodoList({ filter }: TodoListProps) {
  const { todos, filteredTodos, toggleTodo, deleteTodo } = useTodos();
  const filtered = filteredTodos(filter);

  if (todos.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p>暂无任务，添加一个吧！</p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        <p>{filter === 'active' ? '没有未完成的任务' : '没有已完成的任务'}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
}