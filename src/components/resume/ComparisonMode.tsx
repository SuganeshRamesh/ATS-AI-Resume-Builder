import React from 'react';
import { PreviewPane } from './PreviewPane';
import { ArrowRightIcon } from 'lucide-react';
export function ComparisonMode({
  originalData,
  enhancedData,
  selectedTemplate
}: {
  originalData: any;
  enhancedData: any;
  selectedTemplate: number;
}) {
  return <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800">
        Before & After Comparison
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-gray-100 p-2 text-center rounded-t-lg border border-gray-200 border-b-0">
            <span className="text-sm font-medium text-gray-700">
              Original Resume
            </span>
          </div>
          <div className="border border-gray-200 rounded-b-lg">
            <PreviewPane resumeData={originalData} templateId={selectedTemplate} />
          </div>
        </div>
        <div className="relative">
          <div className="bg-blue-100 p-2 text-center rounded-t-lg border border-blue-200 border-b-0">
            <span className="text-sm font-medium text-blue-700">
              Enhanced Resume
            </span>
          </div>
          <div className="border border-blue-200 rounded-b-lg">
            <PreviewPane resumeData={enhancedData} templateId={selectedTemplate} />
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="bg-blue-500 rounded-full p-2 shadow-lg">
              <ArrowRightIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <h4 className="text-sm font-medium text-blue-800 mb-2">
          Improvements Made:
        </h4>
        <ul className="space-y-1">
          <li className="text-sm text-blue-700 flex items-start">
            <span className="mr-2">•</span>
            Added more relevant keywords to increase ATS compatibility
          </li>
          <li className="text-sm text-blue-700 flex items-start">
            <span className="mr-2">•</span>
            Restructured experience descriptions to highlight achievements
          </li>
          <li className="text-sm text-blue-700 flex items-start">
            <span className="mr-2">•</span>
            Improved formatting for better readability
          </li>
          <li className="text-sm text-blue-700 flex items-start">
            <span className="mr-2">•</span>
            Added quantifiable results to demonstrate impact
          </li>
        </ul>
      </div>
    </div>;
}