import React from 'react';
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from 'lucide-react';
export function ATSScoreDisplay({
  score
}: {
  score: number;
}) {
  let scoreColor = 'text-red-500';
  let scoreBackground = 'bg-red-100';
  let scoreMessage = 'Poor ATS Compatibility';
  let scoreIcon = AlertTriangleIcon;
  if (score >= 80) {
    scoreColor = 'text-green-500';
    scoreBackground = 'bg-green-100';
    scoreMessage = 'Excellent ATS Compatibility';
    scoreIcon = CheckCircleIcon;
  } else if (score >= 60) {
    scoreColor = 'text-blue-500';
    scoreBackground = 'bg-blue-100';
    scoreMessage = 'Good ATS Compatibility';
    scoreIcon = InfoIcon;
  } else if (score >= 40) {
    scoreColor = 'text-yellow-500';
    scoreBackground = 'bg-yellow-100';
    scoreMessage = 'Fair ATS Compatibility';
    scoreIcon = AlertTriangleIcon;
  }
  // Generate random improvement suggestions based on score
  const generateSuggestions = () => {
    const allSuggestions = ['Add more keywords related to the job description', 'Use standard section headings', 'Remove graphics and tables', 'Ensure proper formatting for dates', 'Use bullet points for achievements', 'Include metrics and quantifiable results', 'Remove uncommon fonts', 'Simplify your layout', 'Ensure consistent formatting', 'Include relevant certifications', 'Use active voice in descriptions', 'Focus on achievements rather than responsibilities'];
    // Select random suggestions based on score
    const numSuggestions = score >= 80 ? 1 : score >= 60 ? 3 : 5;
    const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numSuggestions);
  };
  const suggestions = generateSuggestions();
  return <div className="bg-white border rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-800 mb-3">
        ATS Compatibility Score
      </h3>
      <div className="flex items-center mb-4">
        <div className={`relative w-full h-6 ${scoreBackground} rounded-full overflow-hidden`}>
          <div className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out" style={{
          width: `${score}%`
        }}></div>
        </div>
        <span className="ml-3 text-xl font-bold text-gray-800">{score}%</span>
      </div>
      <div className={`flex items-center p-3 ${scoreBackground} rounded-md mb-4`}>
        <scoreIcon className={`h-5 w-5 ${scoreColor} mr-2`} />
        <span className={`text-sm font-medium ${scoreColor}`}>
          {scoreMessage}
        </span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Areas for Improvement:
        </h4>
        <ul className="space-y-1">
          {suggestions.map((suggestion, index) => <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              {suggestion}
            </li>)}
        </ul>
      </div>
    </div>;
}