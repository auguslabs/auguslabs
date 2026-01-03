import React from 'react';

interface WorkType {
  id: string;
  name: string;
  icon?: string;
}

interface WorkTypesGridProps {
  workTypes: WorkType[];
}

export function WorkTypesGrid({ workTypes }: WorkTypesGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {workTypes.map((workType) => (
        <div
          key={workType.id}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center"
        >
          {workType.icon && (
            <div className="text-4xl mb-3">{workType.icon}</div>
          )}
          <h3 
            className="text-sm font-semibold"
            style={{ color: '#07549b' }}
          >
            {workType.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

