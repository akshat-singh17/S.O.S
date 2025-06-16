
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Shield, Clock, User, History, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">SOS AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <Info className="w-4 h-4 mr-2" />
                About
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <History className="w-4 h-4 mr-2" />
                Chat History
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              Your AI Therapist is Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant, compassionate mental health support with SOS AI. Our advanced AI therapist provides personalized guidance, active listening, and professional advice whenever you need it most.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4"
            >
              Begin Your Conversation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
            <p className="text-gray-600">
              Always available when you need someone to talk to. No appointments, no waiting - just instant support.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Completely Private</h3>
            <p className="text-gray-600">
              Your conversations are completely confidential and secure. Share your feelings without judgment.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Instant Response</h3>
            <p className="text-gray-600">
              Get immediate responses and personalized advice tailored to your specific concerns and feelings.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center space-y-6 bg-white rounded-2xl p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900">
            Ready to Start Feeling Better?
          </h3>
          <p className="text-lg text-gray-600">
            Join thousands who have found comfort and guidance with SOS AI.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-12 py-4"
          >
            Start Your Journey
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
