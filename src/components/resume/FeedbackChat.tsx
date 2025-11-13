import React, { useState } from 'react';
import { SendIcon, BotIcon, UserIcon } from 'lucide-react';
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};
const initialMessages: Message[] = [{
  id: '1',
  text: "Hi there! I've analyzed your resume. Would you like some specific suggestions to improve it, sender, 'ai",
  timestamp: new Date()
}];
export function FeedbackChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const handleSendMessage = () => {
    if (!input.trim()) return;
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsTyping(true);
    // Simulate AI response
    setTimeout(() => {
      const suggestions = ['Try adding more action verbs to your work experience section.', 'Your skills section could benefit from more industry-specific keywords.', 'Consider quantifying your achievements with specific metrics.', 'Your education section looks good, but you could add relevant coursework.', 'I noticed your job titles could be more specific to match industry standards.', 'The layout could be improved for better readability.', 'Consider adding a brief professional summary at the top of your resume.'];
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      const newAiMessage: Message = {
        id: Date.now().toString(),
        text: randomSuggestion,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return <div className="border rounded-lg overflow-hidden flex flex-col h-[300px]">
      <div className="bg-blue-50 border-b border-blue-100 p-3">
        <h3 className="text-sm font-medium text-blue-800 flex items-center">
          <BotIcon className="h-4 w-4 mr-2" />
          Resume Improvement Assistant
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <div className="flex items-center space-x-2 mb-1">
                {message.sender === 'ai' ? <BotIcon className="h-4 w-4 text-blue-600" /> : <UserIcon className="h-4 w-4 text-white" />}
                <span className={`text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.sender === 'ai' ? 'AI Assistant' : 'You'}
                </span>
              </div>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>)}
        {isTyping && <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>}
      </div>
      <div className="border-t p-3">
        <div className="flex items-center space-x-2">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask for specific advice..." className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleSendMessage} disabled={!input.trim()} className={`p-2 rounded-md ${input.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
}