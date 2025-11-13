import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
export function ResumeUploader({
  onUpload
}: {
  onUpload: (data: any) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setIsUploading(true);
      // Simulate file processing
      setTimeout(() => {
        // In a real app, you would parse the resume here
        const mockResumeData = {
          personalInfo: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '(123) 456-7890',
            location: 'New York, NY',
            linkedin: 'linkedin.com/in/johndoe'
          }
          // Other resume sections would be parsed from the file
        };
        onUpload(mockResumeData);
        setIsUploading(false);
      }, 2000);
    }
  }, [onUpload]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled: !!file || isUploading
  });
  const removeFile = () => {
    setFile(null);
  };
  return <div className="space-y-4">
      <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'} ${file || isUploading ? 'opacity-50 pointer-events-none' : ''}`}>
        <input {...getInputProps()} />
        <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm font-medium text-gray-700">
          {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume, or click to browse'}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supports PDF, DOC, and DOCX files (Max 5MB)
        </p>
      </div>
      {file && <div className="flex items-center justify-between p-3 bg-gray-50 border rounded-lg">
          <div className="flex items-center space-x-3">
            <FileIcon className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button onClick={removeFile} className="p-1 rounded-full hover:bg-gray-200 transition-colors" disabled={isUploading}>
            <XIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>}
      {isUploading && <div className="flex items-center justify-center space-x-2 p-4">
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse delay-75"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse delay-150"></div>
          <span className="ml-2 text-sm text-gray-600">
            Processing resume...
          </span>
        </div>}
    </div>;
}