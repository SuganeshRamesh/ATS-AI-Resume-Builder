import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export function ScoreTracker({
  history
}: {
  history: number[];
}) {
  const data = history.map((score, index) => ({
    name: index === 0 ? 'Original' : `Enhancement ${index}`,
    score: score
  }));
  const initialScore = history[0];
  const currentScore = history[history.length - 1];
  const improvement = currentScore - initialScore;
  const improvementPercentage = initialScore > 0 ? (improvement / initialScore * 100).toFixed(1) : 0;
  return <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 mb-2">
        ATS Score Improvement
      </h3>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
        <div>
          <p className="text-sm text-gray-600">Initial Score</p>
          <p className="text-lg font-bold text-gray-800">{initialScore}%</p>
        </div>
        <div className="flex items-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-600">Current Score</p>
          <p className="text-lg font-bold text-blue-600">{currentScore}%</p>
        </div>
        <div className="bg-green-100 px-3 py-1 rounded-full">
          <p className="text-sm font-medium text-green-800">
            +{improvement}% ({improvementPercentage}%)
          </p>
        </div>
      </div>
      <div className="h-[150px] bg-white p-2 rounded-lg border border-gray-200">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{
            fontSize: 12
          }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{
            fontSize: 12
          }} axisLine={false} tickLine={false} width={30} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} dot={{
            stroke: '#3b82f6',
            strokeWidth: 2,
            r: 4,
            fill: 'white'
          }} activeDot={{
            r: 6,
            stroke: '#1e40af',
            strokeWidth: 2,
            fill: '#3b82f6'
          }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
}