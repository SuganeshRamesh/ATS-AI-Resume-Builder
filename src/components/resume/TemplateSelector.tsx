import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const templates = [{
  id: 0,
  name: 'Professional',
  description: 'Clean and minimal design with a professional look',
  preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop'
}, {
  id: 1,
  name: 'Modern',
  description: 'Contemporary design with creative layout elements',
  preview: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500&auto=format&fit=crop'
}, {
  id: 2,
  name: 'Academic',
  description: 'Formal structure ideal for academic and research positions',
  preview: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=500&auto=format&fit=crop'
}];
export function TemplateSelector({
  selectedTemplate,
  onSelect
}: {
  selectedTemplate: number;
  onSelect: (index: number) => void;
}) {
  const nextTemplate = () => {
    onSelect((selectedTemplate + 1) % templates.length);
  };
  const prevTemplate = () => {
    onSelect((selectedTemplate - 1 + templates.length) % templates.length);
  };
  const currentTemplate = templates[selectedTemplate];
  return <div className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="relative">
          <img src={currentTemplate.preview} alt={`${currentTemplate.name} template preview`} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-3">
            <h4 className="text-white font-medium">{currentTemplate.name}</h4>
            <p className="text-white/80 text-xs">
              {currentTemplate.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={prevTemplate} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Previous template">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex space-x-1">
          {templates.map((template, index) => <button key={template.id} onClick={() => onSelect(index)} className={`w-2 h-2 rounded-full ${index === selectedTemplate ? 'bg-blue-600' : 'bg-gray-300'}`} aria-label={`Select ${template.name} template`} />)}
        </div>
        <button onClick={nextTemplate} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Next template">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>;
}