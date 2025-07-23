import { FilterType } from './types';

type FilterButtonsProps = {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
};

export default function FilterButtons({
  currentFilter,
  setFilter,
}: FilterButtonsProps) {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center space-x-4 my-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-3 py-1 rounded-md ${currentFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          {filter === 'all' ? '全部' : filter === 'active' ? '未完成' : '已完成'}
        </button>
      ))}
    </div>
  );
}