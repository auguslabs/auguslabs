import React from 'react';

interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  additionalInfo?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-blue-600 opacity-20" style={{ backgroundColor: '#07549b' }}></div>
          
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Circle */}
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-white border-4 shadow-lg"
                  style={{ borderColor: '#07549b' }}
                >
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: '#07549b' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  {step.additionalInfo && (
                    <p className="text-gray-600 text-xs italic leading-relaxed">
                      {step.additionalInfo}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical Line */}
          <div 
            className="absolute left-4 top-0 bottom-0 w-0.5 opacity-20"
            style={{ backgroundColor: '#07549b' }}
          ></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative mb-8 last:mb-0">
              {/* Step Circle */}
              <div 
                className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xl bg-white border-2 shadow-md -ml-10"
                style={{ borderColor: '#07549b' }}
              >
                {step.icon}
              </div>
              
              {/* Step Content */}
              <div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: '#07549b' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                  {step.description}
                </p>
                {step.additionalInfo && (
                  <p className="text-gray-600 text-xs italic leading-relaxed">
                    {step.additionalInfo}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

