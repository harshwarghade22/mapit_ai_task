// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CheckCircle, Users, BarChart3, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Easy Registration",
      description: "Streamlined student onboarding with intelligent ID generation and instant profile creation",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Lightning Check-in",
      description: "Sub-second attendance tracking with smart recognition and automated time logging",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Smart Analytics",
      description: "Advanced insights with predictive analytics, trends analysis, and custom reporting",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "2.5s", label: "Avg Check-in" },
    { number: "10K+", label: "Students" },
    { number: "150+", label: "Institutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`py-20 lg:py-32 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Next-gen attendance system</span>
          </div>
          
          <h1 className="mb-6 text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
            Student Check-in
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          
          <p className="mb-12 text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your institution with AI-powered attendance tracking, 
            real-time analytics, and seamless student management
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={() => window.location.href = '/dashboard'}
            >
              Go to Dashboard
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={() => window.location.href = '/check-in'}
            >
              <Users className="h-5 w-5" />
              Quick Check-in
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="pb-20 lg:pb-32">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to manage student attendance with precision and ease
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 delay-${(index + 1) * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-20`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center pb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              Ready to transform your institution?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of educational institutions already using our platform to streamline their attendance management
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/register'}
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => window.location.href = '/demo'}
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};