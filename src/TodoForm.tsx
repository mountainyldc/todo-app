import { useState } from 'react';
import useTodos from './useTodos';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('表单提交触发'); // 调试语句
    if (input.trim()) {
      console.log('准备添加任务:', input); // 调试语句
      addTodo(input);
      setInput('');
    } else {
      console.log('输入为空'); // 调试语句
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            console.log('输入变化:', e.target.value); // 调试语句
            setInput(e.target.value);
          }}
          placeholder="添加新任务..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => console.log('按钮点击')} // 调试语句
        >
          添加
        </button>
      </div>
    </form>
  );
}