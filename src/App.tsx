import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { FilterType } from './types';

function App() {
  const [filter, setFilter] = useState<FilterType>('all');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
          <TodoForm />
          <FilterButtons currentFilter={filter} setFilter={setFilter} />
          <TodoList filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default App;