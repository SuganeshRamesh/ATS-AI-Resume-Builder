import React, { useState } from 'react';
import { ResumeUploader } from './components/resume/ResumeUploader';
import { ResumeForm } from './components/resume/ResumeForm';
import { ATSScoreDisplay } from './components/resume/ATSScoreDisplay';
import { TemplateSelector } from './components/resume/TemplateSelector';
import { PreviewPane } from './components/resume/PreviewPane';
import { DownloadOptions } from './components/resume/DownloadOptions';
import { ComparisonMode } from './components/resume/ComparisonMode';
import { ScoreTracker } from './components/resume/ScoreTracker';
import { FeedbackChat } from './components/resume/FeedbackChat';
import { EnhanceButton } from './components/resume/EnhanceButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/Tabs';
export function App() {
  const [entryMethod, setEntryMethod] = useState<'upload' | 'manual'>('upload');
  const [resumeData, setResumeData] = useState<any>(null);
  const [originalResumeData, setOriginalResumeData] = useState<any>(null);
  const [enhancedResumeData, setEnhancedResumeData] = useState<any>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [scoreHistory, setScoreHistory] = useState<number[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const handleResumeUpload = (data: any) => {
    setResumeData(data);
    setOriginalResumeData(data);
    // Simulate ATS scoring
    const simulatedScore = Math.floor(Math.random() * 40) + 30;
    setAtsScore(simulatedScore);
    setScoreHistory([simulatedScore]);
  };
  const handleFormSubmit = (data: any) => {
    setResumeData(data);
    setOriginalResumeData(data);
    // Simulate ATS scoring
    const simulatedScore = Math.floor(Math.random() * 40) + 30;
    setAtsScore(simulatedScore);
    setScoreHistory([simulatedScore]);
  };
  const handleEnhance = () => {
    setIsEnhancing(true);
    // Simulate enhancement process
    setTimeout(() => {
      const enhancedData = {
        ...resumeData,
        enhanced: true
      };
      setEnhancedResumeData(enhancedData);
      setResumeData(enhancedData);
      const newScore = Math.min(98, (atsScore || 0) + Math.floor(Math.random() * 20) + 10);
      setAtsScore(newScore);
      setScoreHistory([...scoreHistory, newScore]);
      setIsEnhancing(false);
    }, 3000);
  };
  return <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          AI-Powered Resume Builder
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create an ATS-optimized resume with AI assistance. Upload your
          existing resume or build one from scratch.
        </p>
      </header>
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[800px]">
          {/* Left Panel - Input Section */}
          <div className="col-span-1 lg:col-span-2 p-6 border-r border-gray-200">
            <Tabs defaultValue="upload" onValueChange={value => setEntryMethod(value as 'upload' | 'manual')}>
              <TabsList className="mb-6">
                <TabsTrigger value="upload">Upload Resume</TabsTrigger>
                <TabsTrigger value="manual">Manual Entry</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <ResumeUploader onUpload={handleResumeUpload} />
              </TabsContent>
              <TabsContent value="manual">
                <ResumeForm onSubmit={handleFormSubmit} />
              </TabsContent>
            </Tabs>
            {resumeData && !showComparison && <div className="mt-6">
                <EnhanceButton onEnhance={handleEnhance} isEnhancing={isEnhancing} isEnabled={!!resumeData} />
              </div>}
            {enhancedResumeData && <div className="mt-6 flex items-center">
                <span className="mr-3 text-sm font-medium text-gray-700">
                  Comparison Mode
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" checked={showComparison} onChange={() => setShowComparison(!showComparison)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>}
            {showComparison && enhancedResumeData && <div className="mt-6">
                <ComparisonMode originalData={originalResumeData} enhancedData={enhancedResumeData} selectedTemplate={selectedTemplate} />
              </div>}
          </div>
          {/* Right Panel - Preview & Tools */}
          <div className="col-span-1 bg-gray-50 p-6 flex flex-col">
            {atsScore !== null && <ATSScoreDisplay score={atsScore} />}
            {scoreHistory.length > 1 && <div className="mt-6">
                <ScoreTracker history={scoreHistory} />
              </div>}
            {resumeData && <>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Template Style
                  </h3>
                  <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
                </div>
                <div className="mt-6 flex-grow">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    Preview
                  </h3>
                  <PreviewPane resumeData={resumeData} templateId={selectedTemplate} />
                </div>
                {enhancedResumeData && <div className="mt-6">
                    <DownloadOptions resumeData={resumeData} />
                  </div>}
              </>}
            {enhancedResumeData && <div className="mt-6">
                <FeedbackChat />
              </div>}
          </div>
        </div>
      </div>
    </div>;
}