
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Home, Send, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm SOS AI, your personal AI therapist. I'm here to listen and provide support. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(message),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setMessage("");
  };

  const generateAIResponse = (userMessage: string): string => {
    const responses = [
      "I hear you, and I want you to know that your feelings are valid. Can you tell me more about what's been on your mind?",
      "Thank you for sharing that with me. It takes courage to open up. How long have you been feeling this way?",
      "I'm here to support you through this. What do you think might help you feel a bit better right now?",
      "That sounds really challenging. Remember that it's okay to not be okay sometimes. What has helped you cope in the past?",
      "I appreciate you trusting me with your thoughts. Let's explore this together. What would you like to work on today?",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SOS AI Therapist</h1>
                <p className="text-sm text-gray-600">Always here to listen</p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-gray-900"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="h-[70vh] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.isUser
                      ? "bg-gradient-to-r from-green-600 to-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isUser ? "text-green-100" : "text-gray-500"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share what's on your mind..."
                className="flex-1"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>

        {/* Support Info */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Remember: If you're experiencing a mental health emergency, please contact emergency services immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
