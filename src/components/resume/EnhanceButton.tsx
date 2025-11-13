import React from 'react';
import { SparklesIcon } from 'lucide-react';
export function EnhanceButton({
  onEnhance,
  isEnhancing,
  isEnabled
}: {
  onEnhance: () => void;
  isEnhancing: boolean;
  isEnabled: boolean;
}) {
  return <button onClick={onEnhance} disabled={isEnhancing || !isEnabled} className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all ${isEnabled && !isEnhancing ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
      {isEnhancing ? <>
          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
          <span>Enhancing Resume...</span>
        </> : <>
          <SparklesIcon className="mr-2 h-5 w-5" />
          <span>Enhance with AI</span>
        </>}
    </button>;
}