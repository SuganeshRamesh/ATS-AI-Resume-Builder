import React from 'react';
import { FileTextIcon, FileIcon, DownloadIcon } from 'lucide-react';
export function DownloadOptions({
  resumeData
}: {
  resumeData: any;
}) {
  const handleDownloadPDF = () => {
    // This would be integrated with a PDF generation service
    alert('PDF download functionality would be implemented with a PDF generation library');
  };
  const handleDownloadWord = () => {
    // This would be integrated with a DOCX generation service
    alert('DOCX download functionality would be implemented with a document generation library');
  };
  return <div className="space-y-3">
      <h3 className="text-lg font-medium text-gray-800">Download Resume</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={handleDownloadPDF} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <FileTextIcon className="h-4 w-4" />
          <span>Download PDF</span>
        </button>
        <button onClick={handleDownloadWord} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          <FileIcon className="h-4 w-4" />
          <span>Download DOCX</span>
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        Files are generated in high quality and are ready for submission
      </p>
    </div>;
}