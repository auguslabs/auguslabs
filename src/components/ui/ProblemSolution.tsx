import React from 'react';

interface ProblemSolutionItem {
  problem: string;
  solution: string;
}

interface ProblemSolutionProps {
  items: ProblemSolutionItem[];
}

export function ProblemSolution({ items }: ProblemSolutionProps) {
  return (
    <div className="w-full space-y-8">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
        >
          <div className="mb-4">
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: '#07549b' }}
            >
              {item.problem}
            </h3>
          </div>
          <div className="pl-4 border-l-4" style={{ borderColor: '#9b4f07' }}>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium" style={{ color: '#9b4f07' }}>Our solution:</span>{' '}
              {item.solution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

