import React, { useState, useEffect } from 'react';
import { 
  Home, Search, TrendingUp, PenTool, User, 
  ChevronRight, Bell, Calendar, MapPin, Star, 
  CreditCard, Shield, Camera, Upload, Clock, 
  ChevronLeft, Lock, ShieldCheck,
  Download, AlertCircle, Info, FileText,
  Heart, SlidersHorizontal, X, Package, Truck, CheckCircle2, CheckCircle,
  Settings, Edit3, Plus, Trash2,
  Award, Share2, Users, Gift, HelpCircle, PhoneCall, RefreshCcw, Mail, MessageSquare, ChevronDown
} from 'lucide-react';

// --- MOCK DATA ---
const GOLD_RATES = { k22: "6,850", k24: "7,470", k18: "5,605", updateTime: "10:30 AM Today" };
const USER_DATA = { name: "Sathya Kumar", stars: 1250, kyc: "Verified", phone: "+91 98765 43210", email: "sathya.k@example.com", branch: "Jayanagar" };
const SAVINGS_DATA = { totalGrams: 15.4, amountSaved: 105600, nextDue: "5 Mar 2026", installment: 5000, progress: 65 };

const PRODUCTS = [
  { 
    id: 1, 
    name: "Temple Heritage Necklace", 
    category: "Necklaces",
    weight: 22, 
    purity: "22K", 
    makingChargePct: 15,
    branch: "Jayanagar", 
    image: "https://www.kalyanjewellers.net/blog/wp-content/uploads/2024/08/Blog-Banner_The-timeless-grace-of-temple-jewellery.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1599643478514-4a484ca251d7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  { 
    id: 2, 
    name: "Solitaire Engagement Ring", 
    category: "Rings",
    weight: 4.5, 
    purity: "18K", 
    makingChargePct: 12,
    branch: "MG Road", 
    image: "https://pbs.twimg.com/media/G9azxvsaQAA2ZRC.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1605100804763-247f6612d46e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  { id: 3, name: "Antique Gold Bangles", category: "Bangles", weight: 30, purity: "22K", makingChargePct: 18, branch: "Indiranagar", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400&h=400" },
  { id: 4, name: "Classic Diamond Studs", category: "Earrings", weight: 3, purity: "18K", makingChargePct: 10, branch: "Koramangala", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400&h=400" },
  { id: 5, name: "Peacock Motif Jhumkas", category: "Earrings", weight: 9, purity: "22K", makingChargePct: 14, branch: "Made to Order", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400&h=400" },
  { id: 6, name: "Lakshmi 24K Gold Coin", category: "Custom", weight: 10, purity: "24K", makingChargePct: 0, branch: "Jayanagar", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400&h=400" },
];

const CATEGORIES = ["All", "Rings", "Necklaces", "Bangles", "Earrings", "Custom"];
const BRANCHES = ["All Branches", "Jayanagar", "MG Road", "Indiranagar", "Koramangala", "Whitefield"];

// --- COMPONENTS ---

const TopStatusBar = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-[#F8F4EE]' : 'text-[#990057]';
  const iconBg = isDark ? 'bg-[#F8F4EE]' : 'bg-[#990057]';

  return (
    <div className={`absolute top-0 left-0 right-0 w-full flex justify-between items-center px-6 pt-3 pb-2 font-semibold text-sm z-50 pointer-events-none ${textColor}`}>
      <span className="ml-2 mt-1 font-medium tracking-tight">9:41</span>
      
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 flex items-center justify-end px-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
        <div className="w-2.5 h-2.5 bg-[#111] rounded-full border border-white/10 mr-1"></div>
      </div>

      <div className={`flex items-center space-x-1.5 mr-2 mt-1 ${textColor}`}>
        <div className="flex items-end space-x-[2px] pb-0.5">
           <div className={`w-[3px] h-[4px] rounded-sm ${iconBg}`}></div>
           <div className={`w-[3px] h-[6px] rounded-sm ${iconBg}`}></div>
           <div className={`w-[3px] h-[8px] rounded-sm ${iconBg}`}></div>
           <div className={`w-[3px] h-[10px] rounded-sm ${iconBg}`}></div>
        </div>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
        <svg className="w-[22px] h-[11px] ml-1" viewBox="0 0 24 12" fill="none">
          <rect x="1" y="1" width="20" height="10" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="3" y="3" width="16" height="6" rx="1" fill="currentColor"/>
          <path d="M23 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

const BottomTabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'shop', icon: Search, label: 'Shop' },
    { id: 'invest', icon: TrendingUp, label: 'Invest' },
    { id: 'custom', icon: PenTool, label: 'Atelier' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="absolute bottom-0 w-full bg-[#F8F4EE]/95 backdrop-blur-md border-t border-[#990057]/10 pb-6 pt-3 px-6 rounded-b-[2.5rem] z-50">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === tab.id ? 'text-[#990057]' : 'text-[#990057]/40'}`}
          >
            <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'fill-[#990057]/10' : ''}`} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
            <span className="text-[10px] font-medium font-lora">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="w-1/3 h-1 bg-[#990057]/20 rounded-full mx-auto mt-5"></div>
    </div>
  );
};

// --- SCREENS ---

const SplashScreen = () => (
  <div className="h-full w-full flex items-center justify-center bg-[#990057] overflow-hidden">
    <img 
      src="https://cdn.dribbble.com/userupload/27133394/file/original-89bffa7a12b6513dbff5dfc3595b9c56.gif" 
      alt="Malabar Gold & Diamonds Splash" 
      className="w-full h-full object-cover"
    />
  </div>
);

const IntroScreen = ({ onComplete }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "From a Small Shop to a Global Legacy",
      desc: "It started with a vision in 1993. Mr. M.P. Ahammed, a visionary entrepreneur, dared to dream beyond the conventional spice trade in Kozhikode, Kerala. In a modest 400 sq ft space, with a commitment to pure gold and fair practices, Malabar Gold was born."
    },
    {
      title: "Our Foundation: Trust & Transparency",
      desc: "In a market often shadowed by uncertainty, Malabar chose transparency. We were frontrunners in bringing BIS-hallmarked 916 gold to Kerala, setting new standards for quality. Every piece of jewellery was designed to offer unmatched value, making trust our hallmark."
    },
    {
      title: "Spreading Brilliance Across Borders",
      desc: "Over the last three decades, that single dream has flourished into a global legacy. Today, we are proud to be among the world's largest jewellery retailers, with over 400+ showrooms spanning 14 countries across India, the Middle East, Far East, the USA, the UK, Canada, and Australia."
    }
  ];

  return (
    <div className="h-full w-full bg-transparent relative flex flex-col items-center justify-center text-center text-[#F8F4EE]">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://yt3.googleusercontent.com/yuE_zX5P82SJFcMYfWTLOO9jWMBCdMGq1hzyF9ELBR76_BiTw49ytdo6grCubPmoF5hDw_3Lmw=s900-c-k-c0x00ffffff-no-rj')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Skip Button */}
      <div className="absolute top-16 right-6 z-20">
        <button 
          onClick={onComplete}
          className="text-xs font-bold text-[#990057] uppercase tracking-widest bg-[#F8F4EE] backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
        >
          Skip
        </button>
      </div>

      <div className="relative z-10 px-8 flex flex-col items-center max-w-sm">
        <div className="w-20 h-20 rounded-[2rem] bg-[#F8F4EE] flex items-center justify-center mb-10 shadow-2xl shadow-black/20 p-3 overflow-hidden">
          <img src="https://play-lh.googleusercontent.com/PkWI794Z5qxK_4_kusdxi0_aMF5_XAxD8r-C53chzvsBdrk_4nQ7qFf3_FLljWF2B-M=w240-h480-rw" alt="Malabar Gold & Diamonds Logo" className="w-full h-full object-contain" />
        </div>

        <div className="mb-4">
          <span className="text-[10px] font-bold text-[#FFD406] uppercase tracking-[0.3em]">A Journey of Trust</span>
        </div>

        <div className="min-h-[220px]">
          <h2 className="text-2xl font-playfair font-bold text-[#F8F4EE] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {slides[activeSlide].title}
          </h2>
          <p className="text-[#F8F4EE]/80 text-sm leading-relaxed font-medium italic animate-in fade-in slide-in-from-bottom-4 duration-700">
            "{slides[activeSlide].desc}"
          </p>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-8 mb-10">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#FFD406]' : 'w-2 bg-[#F8F4EE]/20'}`} 
            />
          ))}
        </div>

        <button 
          onClick={() => {
            if (activeSlide < slides.length - 1) setActiveSlide(activeSlide + 1);
            else onComplete();
          }}
          className="w-full bg-[#F8F4EE] text-[#990057] font-bold font-playfair py-4 rounded-2xl shadow-xl shadow-black/20 active:scale-95 transition-transform flex items-center justify-center space-x-2"
        >
          <span>{activeSlide === slides.length - 1 ? "Begin Experience" : "Continue Story"}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin }) => {
  const [step, setStep] = useState('choice'); // 'choice', 'login', 'signup', 'otp'
  const [phone, setPhone] = useState('98765 43210');
  const [name, setName] = useState('');
  const [referral, setReferral] = useState('');

  if (step === 'otp') {
    return (
      <div className="h-full w-full bg-transparent flex flex-col px-6 relative text-[#F8F4EE]">
        <div className="mt-16 mb-8">
          <button 
            onClick={() => setStep(name ? 'signup' : 'login')} 
            className="w-10 h-10 bg-[#F8F4EE] rounded-full shadow-sm flex items-center justify-center text-[#990057] mb-6 active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold font-playfair mb-2">Verify OTP</h1>
          <p className="text-[#F8F4EE]/70">Enter the 4-digit code sent to <br/><span className="font-semibold text-[#F8F4EE]">+91 {phone}</span></p>
        </div>

        <div className="space-y-8 flex-1">
          <div className="flex justify-between px-2">
            {[1, 2, 3, 4].map((digit) => (
              <input 
                key={digit}
                type="text" 
                maxLength="1" 
                className="w-14 h-16 bg-[#F8F4EE]/10 border border-[#F8F4EE]/20 rounded-2xl text-center text-2xl font-bold text-[#F8F4EE] focus:outline-none focus:border-[#FFD406] focus:ring-2 focus:ring-[#FFD406]/20"
                defaultValue={digit === 1 ? "4" : digit === 2 ? "2" : ""}
              />
            ))}
          </div>
          
          <button onClick={onLogin} className="w-full bg-[#FFD406] text-[#990057] font-bold font-playfair py-4 rounded-2xl shadow-lg shadow-black/20 active:scale-95 transition-transform">
            Verify & Proceed
          </button>

          <div className="text-center">
            <p className="text-sm text-[#F8F4EE]/70">
              Didn't receive the code? <button className="font-bold text-[#FFD406] ml-1">Resend in 00:24</button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-transparent flex flex-col px-6 relative text-[#F8F4EE]">
      <div className="mt-20 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#F8F4EE] flex items-center justify-center mb-6 shadow-xl shadow-black/20 p-2 overflow-hidden">
          <img src="https://play-lh.googleusercontent.com/PkWI794Z5qxK_4_kusdxi0_aMF5_XAxD8r-C53chzvsBdrk_4nQ7qFf3_FLljWF2B-M=w240-h480-rw" alt="Malabar Gold & Diamonds Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-3xl font-bold font-playfair mb-2">
          {step === 'choice' ? 'Welcome' : step === 'signup' ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-[#F8F4EE]/70">
          {step === 'choice' ? 'Start your journey with Malabar Gold & Diamonds.' : 'Enter your details to continue.'}
        </p>
      </div>

      <div className="flex-1 space-y-6">
        {step === 'choice' && (
          <div className="flex flex-col space-y-4 pt-10">
            <button 
              onClick={() => setStep('login')}
              className="w-full py-4 bg-[#FFD406] text-[#990057] font-bold font-playfair rounded-2xl shadow-lg active:scale-95 transition-transform"
            >
              Login
            </button>
            <button 
              onClick={() => setStep('signup')}
              className="w-full py-4 bg-[#F8F4EE]/10 text-[#F8F4EE] font-bold font-playfair rounded-2xl border border-[#F8F4EE]/20 active:bg-[#F8F4EE]/20 transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        )}

        {step === 'signup' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <label className="text-xs font-bold text-[#F8F4EE]/70 uppercase mb-2 block px-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-[#F8F4EE]/10 border border-[#F8F4EE]/20 rounded-xl px-4 py-3.5 text-sm font-medium text-[#F8F4EE] placeholder-[#F8F4EE]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#F8F4EE]/70 uppercase mb-2 block px-1">Mobile Number</label>
              <div className="flex bg-[#F8F4EE]/10 border border-[#F8F4EE]/20 rounded-xl p-1 focus-within:ring-2 focus-within:ring-[#FFD406]/50 transition-all">
                <div className="px-4 py-3 border-r border-[#F8F4EE]/20 text-[#F8F4EE] font-bold">+91</div>
                <input 
                  type="tel" 
                  placeholder="98765 43210" 
                  className="flex-1 bg-transparent px-4 font-medium text-[#F8F4EE] placeholder-[#F8F4EE]/40 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-[#F8F4EE]/70 uppercase mb-2 block px-1">Referral Code (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. MGD-SATHYA" 
                className="w-full bg-[#F8F4EE]/10 border border-[#F8F4EE]/20 rounded-xl px-4 py-3.5 text-sm font-medium text-[#F8F4EE] placeholder-[#F8F4EE]/40 focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setStep('otp')}
              disabled={!name || !phone}
              className={`w-full py-4 font-bold font-playfair rounded-2xl shadow-lg mt-4 transition-all ${name && phone ? 'bg-[#FFD406] text-[#990057] active:scale-95' : 'bg-[#F8F4EE]/10 text-[#F8F4EE]/30 cursor-not-allowed'}`}
            >
              Sign Up
            </button>
            <button onClick={() => setStep('choice')} className="w-full text-xs font-bold text-[#F8F4EE]/50 text-center uppercase tracking-wider mt-2">Go Back</button>
          </div>
        )}

        {step === 'login' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
            <div>
              <label className="text-xs font-bold text-[#F8F4EE]/70 uppercase mb-2 block px-1">Mobile Number</label>
              <div className="flex bg-[#F8F4EE]/10 border border-[#F8F4EE]/20 rounded-xl p-1 focus-within:ring-2 focus-within:ring-[#FFD406]/50 transition-all">
                <div className="px-4 py-3 border-r border-[#F8F4EE]/20 text-[#F8F4EE] font-bold">+91</div>
                <input 
                  type="tel" 
                  placeholder="98765 43210" 
                  className="flex-1 bg-transparent px-4 font-medium text-[#F8F4EE] placeholder-[#F8F4EE]/40 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button 
              onClick={() => setStep('otp')}
              className="w-full py-4 bg-[#FFD406] text-[#990057] font-bold font-playfair rounded-2xl shadow-lg mt-4 active:scale-95 transition-transform flex items-center justify-center space-x-2"
            >
              <span>Get OTP</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => setStep('choice')} className="w-full text-xs font-bold text-[#F8F4EE]/50 text-center uppercase tracking-wider mt-2">Go Back</button>
          </div>
        )}
      </div>

      {step !== 'choice' && (
        <div className="mb-12">
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-[#F8F4EE]/20"></div>
            <span className="flex-shrink-0 mx-4 text-[#F8F4EE]/60 text-sm font-medium">or login with</span>
            <div className="flex-grow border-t border-[#F8F4EE]/20"></div>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 py-3 rounded-2xl border border-[#F8F4EE]/20 font-medium text-[#F8F4EE] flex items-center justify-center bg-[#F8F4EE]/10 shadow-sm active:bg-[#F8F4EE]/20 transition-colors">Google</button>
            <button className="flex-1 py-3 rounded-2xl bg-black/50 text-white font-medium flex items-center justify-center shadow-sm active:bg-black/70 transition-colors border border-[#F8F4EE]/10">Apple</button>
          </div>
        </div>
      )}
    </div>
  );
};

const HomeScreen = ({ setActiveTab, currentLocation }) => {
  const [featureTab, setFeatureTab] = useState('Trending');
  const FEATURE_TABS = ['Trending', 'New Arrivals', 'Festive Offers', 'Pre-book'];

  const getGreeting = () => {
    const hr = new Date().getHours();
    if (hr < 12) return 'Good Morning';
    if (hr < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getFeaturedProducts = () => {
    switch(featureTab) {
      case 'Trending': return [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]];
      case 'New Arrivals': return [PRODUCTS[3], PRODUCTS[4], PRODUCTS[0]];
      case 'Festive Offers': return [PRODUCTS[2], PRODUCTS[0], PRODUCTS[3]];
      case 'Pre-book': return [PRODUCTS[4], PRODUCTS[1], PRODUCTS[2]];
      default: return PRODUCTS.slice(0, 3);
    }
  };

  return (
    <div className="h-full w-full bg-transparent overflow-y-auto hide-scrollbar pb-32 text-[#990057]">
      <div className="bg-[#F8F4EE] px-6 pt-14 pb-6 rounded-b-[2rem] shadow-sm">
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="flex items-center space-x-1 mb-2 cursor-pointer active:opacity-70 transition-opacity" onClick={() => setActiveTab('branches')}>
              <MapPin className="w-3.5 h-3.5 text-[#990057]" />
              <button className="text-xs font-bold text-[#990057] bg-[#990057]/5 px-2 py-1 rounded-full flex items-center">
                {currentLocation}
                <ChevronRight className="w-3 h-3 ml-1 transform rotate-90" />
              </button>
            </div>
            <p className="text-sm text-[#990057]/70 font-medium">{getGreeting()},</p>
            <h2 className="text-2xl font-bold font-playfair text-[#990057]">{USER_DATA.name.split(' ')[0]}</h2>
          </div>
          <div className="relative mt-2">
            <button onClick={() => setActiveTab('notifications')} className="w-11 h-11 rounded-full bg-[#990057]/5 text-[#990057] flex items-center justify-center active:scale-95 transition-transform">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-[#F8F4EE] rounded-full"></span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FFD406] to-[#FFD406] p-[2px] rounded-2xl w-full">
          <div className="bg-[#F8F4EE] rounded-[14px] p-4 flex justify-between items-center w-full h-full">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-[#990057]/70 uppercase tracking-wider">Live Gold Rate</span>
              </div>
              <p className="text-[10px] text-[#990057]/60">{GOLD_RATES.updateTime}</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-right">
                <p className="text-[10px] text-[#990057]/70 font-medium uppercase">22K / 1g</p>
                <p className="text-sm font-semibold text-[#990057]">₹{GOLD_RATES.k22}</p>
              </div>
              <div className="text-right border-l border-[#990057]/10 pl-4">
                <p className="text-[10px] text-[#990057]/70 font-medium uppercase">24K / 1g</p>
                <p className="text-sm font-semibold text-[#990057]">₹{GOLD_RATES.k24}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="bg-[#F8F4EE] rounded-3xl p-5 text-[#990057] relative overflow-hidden shadow-lg shadow-black/10 border border-[#990057]/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#990057] opacity-5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD406] opacity-10 rounded-full -ml-8 -mb-8"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center border-b border-[#990057]/10 pb-3 mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#FFD406] font-bold">Active Plan</span>
                <h3 className="text-lg font-bold font-playfair text-[#990057]">Swarna 11-Month</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#990057]/60 font-bold">Maturity Date</span>
                <p className="text-sm font-semibold text-[#990057]">{SAVINGS_DATA.nextDue}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-5">
              <div>
                <p className="text-[#990057]/60 text-[10px] uppercase font-bold mb-0.5">Months Completed</p>
                <p className="font-semibold text-sm">7 of 11 Months</p>
              </div>
              <div>
                <p className="text-[#990057]/60 text-[10px] uppercase font-bold mb-0.5">Total Amount Paid</p>
                <p className="font-semibold text-sm">₹{SAVINGS_DATA.amountSaved.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[#990057]/60 text-[10px] uppercase font-bold mb-0.5">Amount Remaining</p>
                <p className="font-semibold text-sm text-[#990057]">₹20,000</p>
              </div>
              <div>
                <p className="text-[#990057]/60 text-[10px] uppercase font-bold mb-0.5">Gold Accumulated</p>
                <p className="font-semibold text-sm text-[#FFD406]">{SAVINGS_DATA.totalGrams}g</p>
              </div>
            </div>

            <button onClick={() => setActiveTab('invest')} className="w-full bg-[#990057] text-[#FFD406] text-sm font-bold font-playfair py-3 rounded-xl shadow-md active:scale-95 transition-transform">
              Pay Installment (₹{SAVINGS_DATA.installment})
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar pb-2 mb-4">
          {FEATURE_TABS.map(tab => (
            <button 
              key={tab} 
              onClick={() => setFeatureTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${featureTab === tab ? 'bg-[#FFD406] text-[#990057] shadow-md' : 'bg-[#F8F4EE]/10 text-[#F8F4EE] border border-[#F8F4EE]/20'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
          {getFeaturedProducts().map((product, idx) => {
            const rate = product.purity === "22K" ? parseInt(GOLD_RATES.k22.replace(',', '')) : parseInt(GOLD_RATES.k18.replace(',', ''));
            const goldValue = product.weight * rate;
            const makingCharge = goldValue * (product.makingChargePct / 100);
            const total = Math.round(goldValue + makingCharge + ((goldValue + makingCharge) * 0.03));
            
            return (
              <div key={product.id + idx} className="min-w-[300px] w-[300px] snap-start bg-[#F8F4EE] rounded-3xl p-4 shadow-sm border border-[#990057]/5 flex-shrink-0 flex flex-col">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 relative bg-[#990057]/5 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                  <div className="absolute top-3 right-3 bg-[#F8F4EE]/95 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-bold text-[#990057] shadow-sm">
                    {product.purity}
                  </div>
                </div>
                <h4 className="text-base font-bold font-playfair text-[#990057] truncate">{product.name}</h4>
                <p className="text-[11px] text-[#990057]/70 font-medium flex items-center mt-1.5 mb-3 truncate">
                  {product.branch === "Made to Order" ? (
                    <PenTool className="w-3.5 h-3.5 mr-1 text-[#FFD406] flex-shrink-0" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#990057]/70 flex-shrink-0" />
                  )}
                  <span className="truncate">{product.branch === "Made to Order" ? "Made to Order" : `Available in ${product.branch}`}</span>
                </p>
                <div className="flex justify-between items-center border-t border-[#990057]/10 pt-3 mt-auto">
                  <p className="text-sm font-semibold text-[#990057]">₹{total.toLocaleString()}</p>
                  <button onClick={() => setActiveTab('shop')} className="text-xs font-bold font-playfair text-[#FFD406] bg-[#990057] px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
                    {idx === 2 ? "Pre-book" : "Buy Now"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

const ShopScreen = ({ setActiveTab }) => {
  const [activeCat, setActiveCat] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([1, 4]);

  const defaultFilters = {
    purity: [],
    minWeight: '',
    maxWeight: '',
    maxPrice: 500000,
    zeroMaking: false,
    occasion: []
  };

  const [activeFilters, setActiveFilters] = useState(defaultFilters);
  const [tempFilters, setTempFilters] = useState(defaultFilters);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const FilterPanel = () => {
    const togglePurity = (pVal) => {
      setTempFilters(prev => ({
        ...prev,
        purity: prev.purity.includes(pVal) ? prev.purity.filter(x => x !== pVal) : [...prev.purity, pVal]
      }));
    };

    const toggleOccasion = (occ) => {
      setTempFilters(prev => ({
        ...prev,
        occasion: prev.occasion.includes(occ) ? prev.occasion.filter(x => x !== occ) : [...prev.occasion, occ]
      }));
    };

    return (
      <div className="absolute inset-0 z-50 bg-[#F8F4EE] flex flex-col pb-6 overflow-hidden">
        <div className="flex justify-between items-center px-6 pt-14 pb-4 border-b border-[#990057]/10">
          <h2 className="text-xl font-bold font-playfair text-[#990057]">Filters</h2>
          <button onClick={() => setShowFilters(false)} className="w-8 h-8 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Gold Purity</h4>
              <div className="flex space-x-2">
                {["24K (999)", "22K (916)", "18K (750)"].map(p => {
                  const pVal = p.split(' ')[0];
                  const isSelected = tempFilters.purity.includes(pVal);
                  return (
                    <button 
                      key={p} 
                      onClick={() => togglePurity(pVal)}
                      className={`px-4 py-2 border rounded-lg text-xs font-semibold transition-colors ${isSelected ? 'bg-[#990057] text-[#F8F4EE] border-[#990057]' : 'border-[#990057]/20 text-[#990057]/80 focus:bg-[#990057]/5'}`}>
                      {p}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Weight Range (g)</h4>
              <div className="flex items-center space-x-4">
                <input type="number" placeholder="Min" value={tempFilters.minWeight} onChange={e => setTempFilters({...tempFilters, minWeight: e.target.value})} className="w-full bg-[#F8F4EE] border border-[#990057]/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#990057]" />
                <span className="text-[#990057]/40">-</span>
                <input type="number" placeholder="Max" value={tempFilters.maxWeight} onChange={e => setTempFilters({...tempFilters, maxWeight: e.target.value})} className="w-full bg-[#F8F4EE] border border-[#990057]/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#990057]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-bold font-playfair text-[#990057]">Price Range (₹)</h4>
                <span className="text-xs font-bold text-[#FFD406]">Up to ₹{tempFilters.maxPrice.toLocaleString()}</span>
              </div>
              <input type="range" min="10000" max="500000" step="10000" value={tempFilters.maxPrice} onChange={e => setTempFilters({...tempFilters, maxPrice: Number(e.target.value)})} className="w-full accent-[#990057]" />
              <div className="flex justify-between text-xs text-[#990057]/60 mt-2 font-medium">
                <span>₹10K</span>
                <span>₹5L+</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Occasion</h4>
              <div className="flex flex-wrap gap-2">
                {["Wedding", "Daily Wear", "Festive", "Gifting", "Office"].map(occ => {
                  const isSelected = tempFilters.occasion.includes(occ);
                  return (
                    <button 
                      key={occ} 
                      onClick={() => toggleOccasion(occ)}
                      className={`px-4 py-2 border rounded-lg text-xs font-semibold transition-colors ${isSelected ? 'bg-[#990057] text-[#F8F4EE] border-[#990057]' : 'border-[#990057]/20 text-[#990057]/80 focus:bg-[#990057]/5'}`}>
                      {occ}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Making Charges</h4>
              <label className="flex items-center space-x-3 text-sm text-[#990057] font-medium cursor-pointer">
                <input type="checkbox" checked={tempFilters.zeroMaking} onChange={e => setTempFilters({...tempFilters, zeroMaking: e.target.checked})} className="w-4 h-4 accent-[#990057] rounded" />
                <span>Show items with 0% Making Charges</span>
              </label>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 border-t border-[#990057]/10 flex space-x-4">
          <button onClick={() => { setTempFilters(defaultFilters); setActiveFilters(defaultFilters); setShowFilters(false); }} className="flex-1 py-3 text-sm font-bold text-[#990057]/70 bg-[#990057]/5 rounded-xl font-playfair">Clear All</button>
          <button onClick={() => { setActiveFilters(tempFilters); setShowFilters(false); }} className="flex-1 py-3 text-sm font-bold text-[#FFD406] bg-[#990057] rounded-xl shadow-lg font-playfair">Apply Filters</button>
        </div>
      </div>
    );
  };

  const [checkoutItem, setCheckoutItem] = useState(null);
  const [checkoutState, setCheckoutState] = useState('idle');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [bookVisitItem, setBookVisitItem] = useState(null);
  const [visitState, setVisitState] = useState('idle');

  const handleBuy = (product, total) => setCheckoutItem({ ...product, total });
  const handleBookVisit = (product) => setBookVisitItem(product);

  const processPayment = () => {
    setCheckoutState('processing');
    setTimeout(() => setCheckoutState('success'), 2000);
  };

  const closeCheckout = () => {
    setCheckoutItem(null);
    setCheckoutState('idle');
    setSelectedPayment('card');
  };

  const processVisit = () => {
    setVisitState('processing');
    setTimeout(() => setVisitState('success'), 1500);
  };

  const closeVisit = () => {
    setBookVisitItem(null);
    setVisitState('idle');
  };

  // Live filter computation
  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCat !== "All" && p.category !== activeCat) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeFilters.purity.length > 0 && !activeFilters.purity.includes(p.purity)) return false;
    if (activeFilters.minWeight && p.weight < Number(activeFilters.minWeight)) return false;
    if (activeFilters.maxWeight && p.weight > Number(activeFilters.maxWeight)) return false;
    if (activeFilters.zeroMaking && p.makingChargePct > 0) return false;

    // Calculate live price for the price range filter
    const rate = p.purity === "22K" ? parseInt(GOLD_RATES.k22.replace(',', '')) : 
                 p.purity === "24K" ? parseInt(GOLD_RATES.k24.replace(',', '')) : 
                 parseInt(GOLD_RATES.k18.replace(',', ''));
    const goldValue = p.weight * rate;
    const makingCharge = goldValue * (p.makingChargePct / 100);
    const gst = (goldValue + makingCharge) * 0.03;
    const total = Math.round(goldValue + makingCharge + gst);

    if (total > activeFilters.maxPrice) return false;

    return true;
  });

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 relative text-[#990057]">
      {showFilters && <FilterPanel />}
      
      {/* Book Visit Overlay */}
      {bookVisitItem && (
        <div className="absolute inset-0 z-50 bg-[#F8F4EE] flex flex-col">
          <div className="bg-[#F8F4EE] px-6 pt-14 pb-4 border-b border-[#990057]/10 flex items-center space-x-4">
            <button onClick={closeVisit} className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold font-playfair text-[#990057]">Book a Store Visit</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 hide-scrollbar">
            <div className="bg-[#F8F4EE] rounded-3xl p-4 shadow-sm border border-[#990057]/10 flex space-x-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#990057]/5 flex-shrink-0">
                <img src={bookVisitItem.image} alt={bookVisitItem.name} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold font-playfair text-[#990057] leading-tight mb-1">{bookVisitItem.name}</h4>
                <p className="text-xs text-[#990057]/70">{bookVisitItem.weight}g • {bookVisitItem.purity}</p>
                <div className="mt-2 inline-block bg-[#990057]/5 px-2 py-1 rounded-md">
                   <span className="text-xs font-semibold text-[#990057] flex items-center">
                     <MapPin className="w-3 h-3 mr-1"/> {bookVisitItem.branch} Branch
                   </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Select Date</h4>
              <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
                {['Today', 'Tomorrow', 'Wed, 8 Mar', 'Thu, 9 Mar'].map((day, idx) => (
                  <button key={day} className={`px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-colors ${idx === 0 ? 'bg-[#990057] text-[#F8F4EE] border-[#990057]' : 'border-[#990057]/20 text-[#990057]/80 focus:bg-[#990057]/5'}`}>
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Select Time Slot</h4>
              <div className="grid grid-cols-3 gap-3">
                {['11:00 AM', '12:30 PM', '02:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'].map((time, idx) => (
                  <button key={time} className={`py-2.5 rounded-xl border text-xs font-bold transition-colors ${idx === 1 ? 'bg-[#990057] text-[#F8F4EE] border-[#990057]' : 'border-[#990057]/20 text-[#990057]/80 focus:bg-[#990057]/5'}`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-[#FFD406]/10 p-4 rounded-2xl border border-[#FFD406]/20 flex items-start space-x-3 mt-4">
              <Info className="w-5 h-5 text-[#990057] flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#990057]/80 leading-relaxed">
                Booking a visit ensures a dedicated jewelry expert will be available to assist you. The selected item will be prepared for your viewing upon arrival.
              </p>
            </div>
          </div>
          
          <div className="bg-[#F8F4EE] px-6 pt-4 pb-28 border-t border-[#990057]/10 mt-auto">
            <button onClick={processVisit} disabled={visitState !== 'idle'} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Confirm Booking</span>
            </button>
          </div>

          {visitState !== 'idle' && (
            <div className="absolute inset-0 z-50 bg-[#990057]/60 backdrop-blur-sm flex items-center justify-center p-6">
              <div className="bg-[#F8F4EE] w-full max-w-sm rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl transform transition-all border border-[#990057]/10">
                {visitState === 'processing' ? (
                  <>
                     <div className="w-16 h-16 border-4 border-[#990057]/10 border-t-[#990057] rounded-full animate-spin mb-6"></div>
                     <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Scheduling Visit</h3>
                     <p className="text-sm text-[#990057]/70">Checking staff availability at the {bookVisitItem.branch} branch...</p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair text-[#990057] mb-2">Visit Confirmed!</h3>
                    <p className="text-sm text-[#990057]/70 mb-6">We look forward to seeing you, {USER_DATA.name.split(' ')[0]}. Your dedicated expert will be waiting.</p>
                    
                    <div className="w-full bg-[#990057]/5 p-4 rounded-xl border border-[#990057]/10 mb-6 text-left space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-[#990057]/5">
                        <span className="text-xs text-[#990057]/70">Date & Time</span>
                        <span className="text-xs font-semibold text-[#990057]">Today, 12:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-[#990057]/5">
                        <span className="text-xs text-[#990057]/70">Branch</span>
                        <span className="text-xs font-semibold text-[#990057]">{bookVisitItem.branch}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#990057]/70">Item</span>
                        <span className="text-xs font-semibold text-[#990057] truncate ml-4">{bookVisitItem.name}</span>
                      </div>
                    </div>

                    <button onClick={closeVisit} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
                      Done
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {checkoutItem && (
        <div className="absolute inset-0 z-50 bg-[#F8F4EE] flex flex-col">
          <div className="bg-[#F8F4EE] px-6 pt-14 pb-4 border-b border-[#990057]/10 flex items-center space-x-4">
            <button onClick={closeCheckout} className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold font-playfair text-[#990057]">Checkout</h2>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 hide-scrollbar">
            <div className="bg-[#F8F4EE] rounded-3xl p-4 shadow-sm border border-[#990057]/10 flex space-x-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#990057]/5 flex-shrink-0">
                <img src={checkoutItem.image} alt={checkoutItem.name} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold font-playfair text-[#990057] leading-tight mb-1">{checkoutItem.name}</h4>
                <p className="text-xs text-[#990057]/70">{checkoutItem.weight}g • {checkoutItem.purity}</p>
                <p className="text-sm font-semibold text-[#8a181b] mt-2">₹{checkoutItem.total.toLocaleString()}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Delivery Address</h4>
              <div className="bg-[#F8F4EE] rounded-2xl p-4 shadow-sm border border-[#FFD406]/50 bg-[#FFD406]/5 relative">
                <div className="absolute top-4 right-4 w-5 h-5 bg-[#990057] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-[#F8F4EE]" />
                </div>
                <p className="font-bold text-[#990057] text-sm mb-1">{USER_DATA.name}</p>
                <p className="text-xs text-[#990057]/70 leading-relaxed pr-8 italic">Flat 402, Oakwood Apartments, 11th Main Road, Jayanagar 4th Block, Bengaluru, 560011</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-playfair text-[#990057] mb-3">Payment Method</h4>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 bg-[#F8F4EE] rounded-2xl border shadow-sm cursor-pointer transition-colors ${selectedPayment === 'card' ? 'border-[#990057] bg-[#990057]/5' : 'border-[#990057]/10'}`}>
                  <div className="flex items-center space-x-3">
                    <CreditCard className={`w-5 h-5 ${selectedPayment === 'card' ? 'text-[#990057]' : 'text-[#990057]/40'}`} />
                    <span className="text-sm font-semibold text-[#990057]">Credit Card (...4242)</span>
                  </div>
                  <input type="radio" name="payment" checked={selectedPayment === 'card'} onChange={() => setSelectedPayment('card')} className="w-4 h-4 accent-[#990057]" />
                </label>
                <label className={`flex items-center justify-between p-4 bg-[#F8F4EE] rounded-2xl border shadow-sm cursor-pointer transition-colors ${selectedPayment === 'upi' ? 'border-[#990057] bg-[#990057]/5' : 'border-[#990057]/10'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${selectedPayment === 'upi' ? 'bg-[#990057] text-[#F8F4EE]' : 'bg-[#990057]/10 text-[#990057]/50'}`}>UPI</div>
                    <span className="text-sm font-semibold text-[#990057]">UPI / Netbanking</span>
                  </div>
                  <input type="radio" name="payment" checked={selectedPayment === 'upi'} onChange={() => setSelectedPayment('upi')} className="w-4 h-4 accent-[#990057]" />
                </label>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F4EE] px-6 pt-4 pb-28 border-t border-[#990057]/10 mt-auto">
            <button onClick={processPayment} disabled={checkoutState !== 'idle'} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Proceed to Pay ₹{checkoutItem.total.toLocaleString()}</span>
            </button>
          </div>

          {checkoutState !== 'idle' && (
            <div className="absolute inset-0 z-50 bg-[#990057]/60 backdrop-blur-sm flex items-center justify-center p-6">
              <div className="bg-[#F8F4EE] w-full max-w-sm rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl transform transition-all border border-[#990057]/10">
                {checkoutState === 'processing' ? (
                  <>
                     <div className="w-16 h-16 border-4 border-[#990057]/10 border-t-[#990057] rounded-full animate-spin mb-6"></div>
                     <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Processing Payment</h3>
                     <p className="text-sm text-[#990057]/70">Securing your transaction for <span className="font-semibold">₹{checkoutItem.total.toLocaleString()}</span> via {selectedPayment === 'card' ? 'Credit Card' : 'UPI'}...</p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair text-[#990057] mb-2">Order Confirmed!</h3>
                    <p className="text-sm text-[#990057]/70 mb-6">Thank you, {USER_DATA.name.split(' ')[0]}. Your new {checkoutItem.name} will be dispatched soon.</p>
                    
                    <div className="w-full bg-[#990057]/5 p-4 rounded-xl border border-[#990057]/10 mb-6 text-left space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-[#990057]/5">
                        <span className="text-xs text-[#990057]/70">Order ID</span>
                        <span className="text-xs font-semibold text-[#990057]">#ORD-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-[#990057]/5">
                        <span className="text-xs text-[#990057]/70">Method</span>
                        <span className="text-xs font-semibold text-[#990057]">{selectedPayment === 'card' ? 'Credit Card' : 'UPI'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#990057]/70">Est. Delivery</span>
                        <span className="text-xs font-semibold text-green-700">Within 48 Hours</span>
                      </div>
                    </div>

                    <button onClick={() => { closeCheckout(); setActiveTab('orders'); }} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform mb-3">
                      View My Orders
                    </button>
                    <button onClick={closeCheckout} className="w-full text-sm font-bold text-[#990057]/60 active:text-[#990057] pb-2 font-playfair">
                      Continue Shopping
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="bg-[#F8F4EE] px-6 pt-14 pb-4 rounded-b-[2rem] shadow-sm z-10 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold font-playfair text-[#990057]">Catalog</h2>
          <button onClick={() => { setTempFilters(activeFilters); setShowFilters(true); }} className="p-2 bg-[#990057]/5 text-[#990057] rounded-full active:scale-95 transition-transform">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex bg-[#990057]/5 rounded-2xl px-4 py-3 items-center border border-[#990057]/10">
          <Search className="w-5 h-5 text-[#990057]/40" />
          <input 
            type="text" 
            placeholder="Search designs, collections..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent flex-1 ml-3 focus:outline-none font-medium text-[#990057] placeholder-[#990057]/40" 
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${activeCat === cat ? 'bg-[#FFD406] text-[#990057] shadow-md' : 'bg-[#F8F4EE]/10 text-[#F8F4EE] border border-[#F8F4EE]/20'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-10 space-y-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 text-[#990057]/50 font-medium text-sm">No designs found matching your filters.</div>
        ) : filteredProducts.map(product => {
          const rate = product.purity === "22K" ? parseInt(GOLD_RATES.k22.replace(',', '')) : 
                       product.purity === "24K" ? parseInt(GOLD_RATES.k24.replace(',', '')) : 
                       parseInt(GOLD_RATES.k18.replace(',', ''));
          const goldValue = product.weight * rate;
          const makingCharge = goldValue * (product.makingChargePct / 100);
          const gst = (goldValue + makingCharge) * 0.03;
          const total = Math.round(goldValue + makingCharge + gst);
          return (
            <div key={product.id} className="bg-[#F8F4EE] rounded-[2rem] border border-[#990057]/10 p-4 shadow-sm relative overflow-hidden">
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-6 right-6 z-10 w-8 h-8 bg-[#F8F4EE]/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm"
              >
                <Heart className={`w-4 h-4 transition-colors ${wishlist.includes(product.id) ? 'fill-[#990057] text-[#990057]' : 'text-[#990057]/40'}`} />
              </button>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-[#990057]/5 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  <span className="bg-[#F8F4EE]/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#990057] shadow-sm flex items-center">
                    {product.branch === "Made to Order" ? <PenTool className="w-3 h-3 mr-1 text-[#FFD406]"/> : <MapPin className="w-3 h-3 mr-1 text-green-600"/>}
                    {product.branch}
                  </span>
                  <span className="bg-[#F8F4EE]/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[#FFD406] shadow-sm">
                    {product.purity}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-base font-bold font-playfair text-[#990057] leading-tight w-2/3">{product.name}</h4>
                <div className="text-right">
                  <span className="bg-[#990057]/5 text-[#990057]/70 px-2 py-1 rounded-lg text-xs font-bold">{product.weight}g</span>
                </div>
              </div>
              
              <div className="bg-[#FFD406]/10 border border-[#FFD406]/20 p-3 rounded-2xl mb-4">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-[#990057]/70">Gold Value (₹{rate.toLocaleString()}/g)</span>
                  <span className="font-medium text-[#990057]">₹{goldValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-[#990057]/70">Making Charges ({product.makingChargePct}%)</span>
                  <span className="font-medium text-[#990057]">₹{makingCharge.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
                <div className="flex justify-between text-[11px] mb-2 pb-2 border-b border-[#990057]/10">
                  <span className="text-[#990057]/70">GST (3%)</span>
                  <span className="font-medium text-[#990057]">₹{gst.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-[#990057] uppercase tracking-wider">Total Est. Price</span>
                  <span className="text-xl font-semibold text-[#990057]">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button onClick={() => handleBookVisit(product)} className="flex-1 bg-[#990057]/5 text-[#990057] py-3 rounded-xl font-bold text-xs active:scale-95 transition-transform font-playfair border border-[#990057]/10">
                  Book Visit
                </button>
                <button onClick={() => handleBuy(product, total)} className="flex-1 bg-[#990057] text-[#FFD406] py-3 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform flex justify-center items-center font-playfair">
                  Buy Now <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const InvestScreen = () => {
  const [tab, setTab] = useState('active');
  const [showCalc, setShowCalc] = useState(false);
  const [calcAmount, setCalcAmount] = useState(5000);
  const [calcDuration, setCalcDuration] = useState(11);
  const [autoPay, setAutoPay] = useState(true);
  const [acceptedTC, setAcceptedTC] = useState(false);
  const [paymentState, setPaymentState] = useState('idle'); 

  const NEW_PLANS = [
    { id: 1, name: "Swarna 11-Month SIP", desc: "Pay fixed installments for 11 months. Get 100% off on making charges upon maturity.", duration: 11, icon: TrendingUp },
    { id: 2, name: "Dhan 18-Month SIP", desc: "Long-term savings with maximum benefits. 100% off making charges + 5% bonus gold.", duration: 18, icon: Star },
    { id: 3, name: "Flexi Gold Wallet", desc: "No fixed tenure. Buy digital gold anytime starting from ₹100.", duration: 0, icon: ShieldCheck },
  ];

  const k22Rate = parseInt(GOLD_RATES.k22.replace(',', ''));
  const totalInvestment = calcAmount * calcDuration;
  const estimatedGold = (totalInvestment / k22Rate).toFixed(2);

  const handlePayment = () => {
    setPaymentState('processing');
    setTimeout(() => {
      setPaymentState('success');
    }, 2000);
  };

  const closePaymentModal = () => {
    setPaymentState('idle');
    setShowCalc(false);
    setTab('active');
  };

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 relative font-lora text-[#990057]">
      {paymentState !== 'idle' && (
        <div className="absolute inset-0 z-50 bg-[#990057]/60 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-[#F8F4EE] w-full max-w-sm rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl transform transition-all border border-[#990057]/10">
            {paymentState === 'processing' ? (
              <>
                <div className="w-16 h-16 border-4 border-[#990057]/10 border-t-[#990057] rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Processing Payment</h3>
                <p className="text-sm text-[#990057]/70">Please do not close or leave this screen while we securely process your transaction...</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Payment Successful!</h3>
                <p className="text-sm text-[#990057]/70 mb-6">Your transaction of <span className="font-semibold text-[#990057]">₹{calcAmount.toLocaleString()}</span> has been confirmed. Your gold weight will be credited shortly.</p>
                <div className="w-full bg-[#990057]/5 p-4 rounded-xl border border-[#990057]/10 mb-6 text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#990057]/70">Transaction ID</span>
                    <span className="font-semibold text-[#990057]">TXN-90283401</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#990057]/70">Date</span>
                    <span className="font-semibold text-[#990057]">Today, 10:45 AM</span>
                  </div>
                </div>
                <button onClick={closePaymentModal} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="bg-[#F8F4EE] px-6 pt-14 pb-4 shadow-sm rounded-b-[2rem] z-10 relative">
        <h2 className="text-2xl font-bold font-playfair text-[#990057] mb-6">Gold Investment</h2>
        <div className="bg-[#990057]/5 p-1 rounded-xl flex border border-[#990057]/10">
          <button 
            onClick={() => { setTab('active'); setShowCalc(false); }} 
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all shadow-sm ${tab === 'active' ? 'bg-[#F8F4EE] text-[#990057]' : 'text-[#990057]/60 shadow-none'}`}
          >
            Active Plans
          </button>
          <button 
            onClick={() => setTab('new')} 
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all shadow-sm ${tab === 'new' ? 'bg-[#F8F4EE] text-[#990057]' : 'text-[#990057]/60 shadow-none'}`}
          >
            New Plans
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 pt-6">
        {tab === 'active' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#FFD406] to-[#FFD406] rounded-3xl p-6 text-[#990057] shadow-lg relative">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="bg-[#F8F4EE]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">11-Month Plan</span>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#990057]/80" />
              </div>
              
              <p className="text-[#990057]/80 text-sm mb-1 font-medium">Accumulated Weight</p>
              <div className="flex items-end space-x-2">
                <h3 className="text-4xl font-serif font-bold text-[#F8F4EE]">15.40</h3>
                <span className="text-lg mb-1 font-medium text-[#F8F4EE]">grams</span>
              </div>
              
              <div className="mt-8 text-[#990057]">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Month 7 of 11</span>
                  <span>63%</span>
                </div>
                <div className="w-full bg-[#990057]/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#990057] w-[63%] h-full rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F4EE] border border-[#990057]/10 rounded-2xl p-4 flex items-start space-x-3 shadow-sm">
              <Star className="w-5 h-5 text-[#FFD406] flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold font-playfair text-[#990057]">Bonus Calculation Preview</h4>
                <p className="text-xs text-[#990057]/70 mt-1 leading-relaxed">You are on track to unlock <span className="font-bold text-green-700">100% OFF</span> on making charges for up to {SAVINGS_DATA.totalGrams}g of jewelry upon maturity.</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 text-[#F8F4EE]">
                <h3 className="text-lg font-bold font-playfair">Installment History</h3>
                <button className="text-xs font-bold opacity-80">View All</button>
              </div>
              <div className="bg-[#F8F4EE] rounded-2xl p-4 shadow-sm space-y-4">
                {[
                  { month: "February", amount: 5000, rate: 6850, weight: 0.73, status: "Paid" },
                  { month: "January", amount: 5000, rate: 6720, weight: 0.74, status: "Paid" },
                  { month: "December", amount: 5000, rate: 6600, weight: 0.75, status: "Paid" },
                ].map((txn, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-[#990057]/5 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-[#990057]/5 flex items-center justify-center text-[#990057]/70 font-bold text-sm">
                        {txn.month.slice(0,3)}
                      </div>
                      <div>
                        <p className="font-bold text-[#990057]">₹{txn.amount}</p>
                        <p className="text-[10px] text-[#990057]/50 uppercase tracking-wider">Rate: ₹{txn.rate}/g</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <p className="font-bold text-green-600">+{txn.weight}g</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[10px] text-[#990057]/50 uppercase font-bold">{txn.status}</span>
                        <button className="text-[#990057] bg-[#990057]/5 p-1.5 rounded-md active:scale-95 transition-transform" title="Download Receipt">
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 text-center">
                <button className="text-[11px] font-medium text-[#F8F4EE]/60 flex items-center justify-center w-full pb-4 hover:text-[#F8F4EE] transition-colors">
                  <AlertCircle className="w-3 h-3 mr-1" /> Request Early Closure (T&C Apply)
                </button>
              </div>

              <button onClick={() => {setCalcAmount(SAVINGS_DATA.installment); handlePayment();}} className="w-full bg-[#F8F4EE] text-[#990057] text-sm font-bold font-playfair py-4 mt-4 rounded-xl shadow-lg active:scale-95 transition-transform">
                Pay Next Installment (₹{SAVINGS_DATA.installment})
              </button>
            </div>
          </div>
        )}

        {tab === 'new' && !showCalc && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-playfair text-[#F8F4EE] mb-2">Available Plans</h3>
            {NEW_PLANS.map(plan => (
              <div key={plan.id} className="bg-[#F8F4EE] border border-[#990057]/10 rounded-3xl p-5 shadow-sm">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]">
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold font-playfair text-[#990057]">{plan.name}</h4>
                    {plan.duration > 0 ? (
                      <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 mt-0.5">{plan.duration} Months Tenure</p>
                    ) : (
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#FFD406] mt-0.5">Flexible Tenure</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[#990057]/70 mb-5 leading-relaxed">{plan.desc}</p>
                <div className="flex space-x-3">
                  {plan.duration > 0 && (
                    <button 
                      onClick={() => { setCalcDuration(plan.duration); setShowCalc(true); }}
                      className="flex-1 bg-[#990057]/5 text-[#990057] py-3 rounded-xl font-bold font-playfair text-sm border border-[#990057]/10 active:bg-[#990057]/10 transition-colors"
                    >
                      Calculator
                    </button>
                  )}
                  <button 
                    onClick={() => { setCalcDuration(plan.duration > 0 ? plan.duration : 11); setShowCalc(true); }}
                    className="flex-1 bg-[#990057] text-[#FFD406] py-3 rounded-xl font-bold font-playfair text-sm shadow-md active:scale-95 transition-transform"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'new' && showCalc && (
          <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/10">
            <div className="flex items-center space-x-4 mb-6">
              <button onClick={() => setShowCalc(false)} className="w-8 h-8 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-bold font-playfair text-[#990057]">Plan Setup</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#FFD406]/10 p-4 rounded-2xl flex items-start space-x-3 border border-[#FFD406]/20">
                <Info className="w-5 h-5 text-[#FFD406] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#990057]/80 leading-relaxed">
                  <strong className="text-[#990057] block mb-1 text-xs">Swarna {calcDuration}-Month SIP</strong>
                  Pay fixed monthly installments for {calcDuration} months. Your investment is converted to gold weight at the daily rate. Upon maturity, purchase jewelry with zero making charges.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-[#990057]/50 uppercase tracking-wider mb-2 block">Monthly Installment (₹)</label>
                <p className="text-3xl font-bold font-playfair text-[#990057] mb-4">₹{calcAmount.toLocaleString()}</p>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  value={calcAmount} 
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-[#990057] h-2 bg-[#990057]/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#990057]/40 mt-2 font-medium">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

              <div className="bg-[#F8F4EE] rounded-2xl p-5 border border-[#990057]/10 mt-2 shadow-sm">
                <p className="text-sm text-[#990057]/70 mb-1 font-medium">Total Investment over {calcDuration} months</p>
                <p className="text-2xl font-bold font-playfair text-[#990057] mb-4">₹{totalInvestment.toLocaleString()}</p>
                
                <p className="text-sm text-[#990057]/70 mb-1 font-medium">Estimated Gold @ ₹{k22Rate}/g</p>
                <div className="flex items-end space-x-1">
                  <h4 className="text-4xl font-serif font-bold text-[#FFD406] drop-shadow-sm">{estimatedGold}</h4>
                  <span className="text-sm font-bold text-[#FFD406] mb-1">grams</span>
                </div>
                <p className="text-[10px] text-[#990057]/50 mt-3 leading-relaxed">
                  *Calculation is based on today's live 22K gold rate. Actual accumulated gold will vary based on the daily gold rate at the time of each successful installment.
                </p>
              </div>

              <div className="flex items-center justify-between bg-[#F8F4EE] border border-[#990057]/10 p-4 rounded-2xl shadow-sm">
                <div>
                  <h4 className="text-sm font-bold font-playfair text-[#990057]">Auto-Debit (e-Mandate)</h4>
                  <p className="text-[10px] text-[#990057]/50 mt-0.5">Never miss an installment. Cancel anytime.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={autoPay} onChange={(e) => setAutoPay(e.target.checked)} />
                  <div className="w-11 h-6 bg-[#990057]/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[#F8F4EE] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#F8F4EE] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#990057]"></div>
                </label>
              </div>

              <div className="flex items-start space-x-3 px-1">
                <input 
                  type="checkbox" 
                  id="tc" 
                  className="mt-0.5 accent-[#990057] w-4 h-4 cursor-pointer" 
                  checked={acceptedTC} 
                  onChange={(e) => setAcceptedTC(e.target.checked)} 
                />
                <label htmlFor="tc" className="text-[11px] text-[#990057]/70 cursor-pointer leading-tight">
                  I agree to the <span className="font-bold text-[#990057] underline">Terms & Conditions</span>, the <span className="font-bold text-[#990057] underline">Auto-Debit Policy</span>, and understand that early closure may result in loss of bonus benefits.
                </label>
              </div>

              <button 
                onClick={handlePayment}
                className={`w-full font-bold font-playfair py-4 rounded-xl mt-2 active:scale-95 transition-all flex items-center justify-center space-x-2 ${acceptedTC ? 'bg-[#990057] text-[#FFD406] shadow-lg' : 'bg-[#990057]/10 text-[#990057]/40 cursor-not-allowed'}`}
                disabled={!acceptedTC}
              >
                <span>Proceed to Pay ₹{calcAmount.toLocaleString()}</span>
                {acceptedTC && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomizerScreen = () => {
  const [status, setStatus] = useState('idle');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleSubmit = () => {
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  const closeOverlay = () => setStatus('idle');

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar relative font-lora text-[#990057]">
      {status !== 'idle' && (
        <div className="absolute inset-0 z-50 bg-[#990057]/60 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-[#F8F4EE] w-full max-w-sm rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl transform transition-all border border-[#990057]/10">
            {status === 'loading' ? (
              <>
                <div className="w-16 h-16 border-4 border-[#990057]/10 border-t-[#990057] rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Submitting Request</h3>
                <p className="text-sm text-[#990057]/70">Please wait while we securely upload your design and requirements...</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-[#990057] mb-2">Request Submitted!</h3>
                <p className="text-sm text-[#990057]/70 mb-6">Our master goldsmiths will review your sketch and requirements. We will notify you with an estimated quote within 24 hours.</p>
                <div className="w-full bg-[#990057]/5 p-4 rounded-xl border border-[#990057]/10 mb-6 text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#990057]/70">Reference ID</span>
                    <span className="font-bold text-[#990057]">REQ-7782A</span>
                  </div>
                </div>
                <button onClick={closeOverlay} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform">
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="bg-[#F8F4EE] px-6 pt-14 pb-6 shadow-sm rounded-b-[2rem] relative z-10">
        <h2 className="text-2xl font-bold font-playfair text-[#990057] mb-1">The Atelier</h2>
        <p className="text-[#990057]/70 text-sm">Upload a sketch or image, and our master goldsmiths will craft it for you.</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        <div className="bg-[#F8F4EE] border-2 border-dashed border-[#990057]/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-16 h-16 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h4 className="font-bold font-playfair text-[#990057] mb-1">Upload Design Reference</h4>
          <p className="text-xs text-[#990057]/50 mb-4 truncate w-full px-2">{selectedFile ? selectedFile : "PNG, JPG or PDF (Max 5MB)"}</p>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setSelectedFile(e.target.files[0].name);
              }
            }} 
            className="hidden" 
            accept=".png,.jpg,.jpeg,.pdf"
          />
          <button onClick={() => fileInputRef.current.click()} className="bg-[#990057] text-[#F8F4EE] px-6 py-2.5 rounded-full text-sm font-bold font-playfair flex items-center space-x-2 shadow-md active:scale-95 transition-transform">
            <Upload className="w-4 h-4" />
            <span>{selectedFile ? 'Change File' : 'Choose File'}</span>
          </button>
        </div>

        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5 space-y-5">
          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Jewelry Category</label>
            <select className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50">
              <option>Necklace</option>
              <option>Ring</option>
              <option>Bangles</option>
              <option>Earrings</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Metal Purity</label>
              <select className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50">
                <option>22K Gold</option>
                <option>18K Gold</option>
                <option>Platinum</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Est. Weight (g)</label>
              <input type="number" placeholder="e.g. 15" className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50 placeholder-[#990057]/30" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Additional Details</label>
            <textarea rows="3" placeholder="Describe stones, finish, or any specific engraving..." className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-medium text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50 resize-none placeholder-[#990057]/30"></textarea>
          </div>

          <button onClick={handleSubmit} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform mt-2">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

const BranchScreen = ({ onBack, currentLocation, setCurrentLocation }) => {
  const branchesList = [
    { name: "Jayanagar", address: "11th Main Rd, 4th Block, Bengaluru", distance: "2.4 km", open: "10:30 AM - 8:30 PM" },
    { name: "Koramangala", address: "80 Feet Rd, 4th Block, Bengaluru", distance: "4.2 km", open: "10:30 AM - 8:30 PM" },
    { name: "MG Road", address: "14/15, MG Road, near Trinity Metro", distance: "5.1 km", open: "10:30 AM - 8:30 PM" },
    { name: "Indiranagar", address: "100 Feet Rd, HAL 2nd Stage", distance: "7.8 km", open: "10:30 AM - 8:30 PM" },
    { name: "Whitefield", address: "ITPL Main Rd, near Hope Farm", distance: "12.5 km", open: "10:30 AM - 8:30 PM" }
  ];

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora text-[#990057]">
      <div className="bg-[#F8F4EE] px-6 pt-14 pb-6 shadow-sm rounded-b-[2rem] flex items-center space-x-4 mb-6">
        <button onClick={onBack} className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold font-playfair text-[#990057]">Select Store</h2>
      </div>

      <div className="px-6 space-y-4">
        <div className="relative mb-6">
           <Search className="w-5 h-5 text-[#990057]/40 absolute left-4 top-1/2 -translate-y-1/2" />
           <input type="text" placeholder="Search by area or pincode..." className="w-full bg-[#F8F4EE] border border-[#990057]/10 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium text-[#990057] focus:outline-none focus:ring-1 focus:ring-[#FFD406]" />
        </div>

        <h3 className="text-xs font-bold text-[#F8F4EE]/60 uppercase tracking-wider mb-2 px-2">Nearby Branches</h3>

        {branchesList.map((branch, idx) => (
          <div 
            key={idx} 
            onClick={() => {
              setCurrentLocation(branch.name);
              onBack();
            }}
            className={`bg-[#F8F4EE] rounded-3xl p-5 shadow-lg border cursor-pointer active:scale-95 transition-all ${currentLocation === branch.name ? 'border-[#FFD406] ring-1 ring-[#FFD406]/50' : 'border-[#990057]/5'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-playfair text-[#990057] text-lg">{branch.name}</h4>
                  <p className="text-xs text-green-700 font-semibold">{branch.distance} away</p>
                </div>
              </div>
              {currentLocation === branch.name && (
                <div className="bg-[#990057] rounded-full p-1">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD406]" />
                </div>
              )}
            </div>
            <p className="text-sm text-[#990057]/70 leading-relaxed mt-2">{branch.address}</p>
            <div className="flex items-center mt-3 pt-3 border-t border-[#990057]/10 text-xs text-[#990057]/60 font-medium">
              <Clock className="w-3.5 h-3.5 mr-1.5" /> Open today: {branch.open}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileScreen = ({ onLogout, setActiveTab }) => {
  const [view, setView] = useState('main');
  const [deleteStep, setDeleteStep] = useState(0);

  const handleSetView = (newView) => {
    setView(newView);
    setDeleteStep(0);
  };

  const SubHeader = ({ title }) => (
    <div className="bg-[#F8F4EE] px-6 pt-14 pb-6 shadow-sm rounded-b-[2rem] flex items-center space-x-4 mb-6 text-[#990057]">
      <button onClick={() => handleSetView('main')} className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-bold font-playfair">{title}</h2>
    </div>
  );

  const menuGroups = [
    {
      title: "My Account",
      items: [
        { id: "orders", icon: Clock, label: "Order History", val: "" },
        { id: "gold_certificate", icon: Award, label: "Gold Certificates", val: "2" },
        { id: "nominee", icon: Users, label: "Nominee Details", val: "" },
        { id: "address", icon: MapPin, label: "Saved Addresses", val: "2" },
        { id: "kyc", icon: ShieldCheck, label: "PAN / KYC Upload", val: "Verified" },
      ]
    },
    {
      title: "Payments & Offers",
      items: [
        { id: "payment", icon: CreditCard, label: "Payment Methods", val: "" },
        { id: "gift_card", icon: Gift, label: "Gift Cards", val: "₹5,000" },
        { id: "refer", icon: Share2, label: "Refer & Earn", val: "" },
      ]
    },
    {
      title: "Settings & Support",
      items: [
        { id: "security", icon: Lock, label: "Security", val: "" },
        { id: "settings", icon: Settings, label: "Notification Settings", val: "" },
        { id: "support", icon: HelpCircle, label: "Help & Support", val: "" },
        { id: "contact", icon: PhoneCall, label: "Contact Us", val: "" },
      ]
    },
    {
      title: "Legal",
      items: [
        { id: "terms", icon: FileText, label: "Terms & Conditions", val: "" },
        { id: "privacy", icon: Shield, label: "Privacy Policy", val: "" },
        { id: "refund", icon: RefreshCcw, label: "Refund Policy", val: "" },
      ]
    }
  ];

  if (view === 'main') {
    return (
      <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
        <div className="bg-[#F8F4EE] px-6 pt-14 pb-8 rounded-b-[2rem] shadow-sm text-center relative text-[#990057]">
          <button onClick={() => setView('edit')} className="absolute top-14 right-6 w-8 h-8 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95">
            <Edit3 className="w-4 h-4" />
          </button>
          <div className="w-24 h-24 bg-[#F8F4EE] rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#990057]/10 shadow-md">
            <img src={`https://ui-avatars.com/api/?name=${USER_DATA.name.replace(' ', '+')}&background=D1202E&color=F8F4EE&size=200`} alt="Avatar" className="w-full h-full object-cover"/>
          </div>
          <h2 className="text-2xl font-bold font-playfair">{USER_DATA.name}</h2>
          <p className="text-[#990057]/70 font-medium">{USER_DATA.phone}</p>
        </div>
        
        <div className="px-6 mt-6">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="mb-6">
              <h3 className="text-[10px] font-bold text-[#F8F4EE]/60 uppercase tracking-wider mb-2 px-2">{group.title}</h3>
              <div className="bg-[#F8F4EE] rounded-3xl p-2 shadow-sm border border-[#990057]/5">
                {group.items.map((item, idx) => (
                  <div key={idx} onClick={() => item.id === 'orders' ? setActiveTab('orders') : handleSetView(item.id)} className="flex items-center justify-between p-4 border-b border-[#990057]/5 last:border-0 active:bg-[#990057]/5 transition-colors rounded-xl cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-[#990057]">{item.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.val && <span className="text-[10px] font-bold bg-[#990057]/10 text-[#990057] px-2 py-1 rounded-md">{item.val}</span>}
                      <ChevronRight className="w-5 h-5 text-[#990057]/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={onLogout} className="w-full py-4 bg-[#F8F4EE] rounded-3xl text-center font-bold font-playfair text-[#D1202E] shadow-sm mb-6 active:scale-95 transition-transform border border-[#990057]/5">Log Out</button>
        </div>
      </div>
    );
  }

  if (view === 'edit') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Edit Profile" />
      <div className="px-6 space-y-5">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 bg-[#F8F4EE] rounded-full overflow-hidden border-4 border-[#990057]/10 shadow-md">
              <img src={`https://ui-avatars.com/api/?name=${USER_DATA.name.replace(' ', '+')}&background=D1202E&color=F8F4EE&size=200`} alt="Avatar" className="w-full h-full object-cover"/>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#FFD406] text-[#990057] rounded-full flex items-center justify-center border-2 border-[#F8F4EE]">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="bg-[#F8F4EE] p-6 rounded-3xl space-y-5 shadow-lg border border-[#990057]/5">
          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Full Name</label>
            <input type="text" defaultValue={USER_DATA.name} className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50" />
          </div>
          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Mobile Number</label>
            <input type="text" defaultValue={USER_DATA.phone} disabled className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057]/50 cursor-not-allowed" />
          </div>
          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Email Address</label>
            <input type="email" defaultValue={USER_DATA.email} className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50" />
          </div>
          <div>
            <label className="text-xs font-bold text-[#990057]/60 uppercase tracking-wider mb-2 block">Preferred Branch</label>
            <select defaultValue={USER_DATA.branch} className="w-full bg-[#990057]/5 border border-[#990057]/10 rounded-xl px-4 py-3 text-sm font-semibold text-[#990057] focus:outline-none focus:ring-2 focus:ring-[#FFD406]/50">
              {BRANCHES.slice(1).map(branch => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={() => handleSetView('main')} className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg mt-6 active:scale-95 transition-transform">Save Changes</button>
      </div>
    </div>
  );

  if (view === 'gold_certificate') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Gold Certificates" />
      <div className="px-6 space-y-4">
        {[
          { title: "Swarna SIP Maturity", weight: "15.40 Grams", date: "05 Mar 2026", type: "22K Gold" },
          { title: "Dhanteras Special Purchase", weight: "5.00 Grams", date: "10 Nov 2025", type: "24K Gold (999)" }
        ].map((cert, idx) => (
          <div key={idx} className="bg-gradient-to-br from-[#FFD406] to-[#FFD406] rounded-3xl p-6 text-[#990057] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F4EE] opacity-10 rounded-full -mr-10 -mt-10"></div>
            <Award className="w-8 h-8 mb-4 text-[#990057]/80" />
            <h3 className="text-xl font-serif font-bold mb-1 font-playfair">{cert.title}</h3>
            <p className="text-sm font-semibold mb-1">{cert.weight} • {cert.type}</p>
            <p className="text-[10px] text-[#990057]/70 mb-4 uppercase font-bold tracking-widest">Issued: {cert.date}</p>
            <button className="bg-[#F8F4EE] text-[#990057] font-bold py-2 px-4 rounded-xl text-sm flex items-center space-x-2 active:scale-95 transition-transform">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  if (view === 'nominee') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Nominee Details" />
      <div className="px-6 space-y-4">
        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5">
          <div className="flex justify-between items-center mb-6 border-b border-[#990057]/10 pb-4">
            <h4 className="text-sm font-bold text-[#990057] uppercase tracking-wider">Primary Nominee</h4>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-md">Active</span>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-[#990057]/60 mb-0.5">Full Name</p>
              <p className="font-bold text-[#990057] text-lg font-playfair">Priya Kumar</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[#990057]/60 mb-0.5">Relationship</p>
                <p className="font-semibold text-[#990057] text-sm">Spouse</p>
              </div>
              <div>
                <p className="text-xs text-[#990057]/60 mb-0.5">Date of Birth</p>
                <p className="font-semibold text-[#990057] text-sm">14 Aug 1990</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#990057]/60 mb-0.5">Allocation Percentage</p>
              <p className="font-bold text-[#FFD406] text-lg">100%</p>
            </div>
          </div>
          <button className="w-full bg-[#990057]/5 text-[#990057] font-bold py-3 rounded-xl text-sm active:scale-95 transition-transform mt-6">
            Edit Details
          </button>
        </div>
        <button className="w-full bg-transparent border-2 border-dashed border-[#F8F4EE]/30 text-[#F8F4EE] font-bold py-4 rounded-2xl flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Another Nominee</span>
        </button>
      </div>
    </div>
  );

  if (view === 'address') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Saved Addresses" />
      <div className="px-6 space-y-4">
        {[
          { title: "Home Address", text: "Flat 402, Oakwood Apartments, 11th Main Road, Jayanagar 4th Block, Bengaluru, Karnataka, 560011", def: true },
          { title: "Office Workspace", text: "Workspace Hub, 3rd Floor, MG Road, near Trinity Metro Station, Bengaluru, Karnataka, 560001", def: false }
        ].map((addr, idx) => (
          <div key={idx} className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5 relative">
            {addr.def && <span className="absolute top-6 right-6 bg-[#990057] text-[#FFD406] text-[10px] font-bold px-2 py-1 rounded-md">Default</span>}
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold font-playfair text-[#990057] text-lg">{addr.title}</h4>
            </div>
            <p className="text-sm text-[#990057]/70 leading-relaxed pr-12 mb-4">{addr.text}</p>
            <div className="flex space-x-4 border-t border-[#990057]/10 pt-4">
              <button className="text-sm font-bold text-[#990057] flex items-center"><Edit3 className="w-3.5 h-3.5 mr-1"/> Edit</button>
              {!addr.def && <button className="text-sm font-bold text-[#D1202E] flex items-center"><Trash2 className="w-3.5 h-3.5 mr-1"/> Remove</button>}
            </div>
          </div>
        ))}
        <button className="w-full bg-transparent border-2 border-dashed border-[#F8F4EE]/30 text-[#F8F4EE] font-bold py-4 rounded-2xl flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add New Address</span>
        </button>
      </div>
    </div>
  );

  if (view === 'kyc') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="PAN & KYC Vault" />
      <div className="px-6 space-y-6">
        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-green-200/50 flex items-start space-x-4">
          <div className="bg-green-100 rounded-full p-2 mt-0.5">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-lg font-bold font-playfair text-[#990057] mb-1">KYC Fully Verified</h4>
            <p className="text-sm text-[#990057]/70 leading-relaxed">Your account is secured and verified for high-value jewelry purchases and Swarna SIP enrollments.</p>
          </div>
        </div>

        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5">
          <div className="flex justify-between items-center mb-4 border-b border-[#990057]/10 pb-4">
            <h4 className="text-sm font-bold text-[#990057] uppercase tracking-wider">PAN Card</h4>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-md">Verified</span>
          </div>
          <div className="bg-[#990057]/5 border-2 border-dashed border-[#990057]/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
             <FileText className="w-10 h-10 text-[#990057]/40 mb-3" />
             <p className="text-lg font-bold font-playfair text-[#990057] tracking-[0.2em]">ABCDE1234F</p>
             <p className="text-xs text-[#990057]/60 mt-1 font-medium">Verified on 10 Jan 2026</p>
          </div>
        </div>

        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5">
          <div className="flex justify-between items-center mb-4 border-b border-[#990057]/10 pb-4">
            <h4 className="text-sm font-bold text-[#990057] uppercase tracking-wider">Address Proof (Aadhar)</h4>
            <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-2 py-1 rounded-md">Pending</span>
          </div>
          <p className="text-sm text-[#990057]/70 mb-4 leading-relaxed">Upload a valid ID proof. Required only for transactions exceeding ₹2 Lakhs.</p>
          <button className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-3.5 rounded-xl active:scale-95 transition-transform flex items-center justify-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (view === 'payment') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Payment Methods" />
      <div className="px-6 space-y-6">
        <div>
          <h4 className="text-sm font-bold text-[#F8F4EE]/70 uppercase tracking-wider mb-3 px-1">Saved Cards</h4>
          <div className="bg-[#111] rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full border-4 border-white/5"></div>
            <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full border-2 border-[#FFD406]/20"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <CreditCard className="w-8 h-8 text-[#FFD406]" />
                <span className="text-lg font-bold font-playfair italic tracking-widest text-white/90">VISA</span>
              </div>
              <p className="text-2xl tracking-[0.2em] font-playfair mb-3">**** **** **** 4242</p>
              <div className="flex justify-between text-xs text-gray-400 font-medium uppercase tracking-wider">
                <span>Sathya Kumar</span>
                <span>Expires 12/28</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#F8F4EE]/70 uppercase tracking-wider mb-3 px-1">UPI Accounts</h4>
          <div className="bg-[#F8F4EE] rounded-3xl p-5 shadow-lg border border-[#990057]/5 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-100">GPay</div>
              <div>
                <p className="text-base font-bold font-playfair text-[#990057]">Google Pay</p>
                <p className="text-sm text-[#990057]/60">sathya@okicici</p>
              </div>
            </div>
            <button className="text-[#D1202E] p-2"><Trash2 className="w-5 h-5" /></button>
          </div>
        </div>

        <button className="w-full bg-transparent border-2 border-dashed border-[#F8F4EE]/30 text-[#F8F4EE] font-bold py-4 rounded-2xl flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Payment Method</span>
        </button>
      </div>
    </div>
  );

  if (view === 'gift_card') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Gift Cards" />
      <div className="px-6 space-y-6">
        <div className="bg-gradient-to-br from-[#990057] to-[#3a0a10] rounded-3xl p-8 text-[#F8F4EE] shadow-2xl relative overflow-hidden border border-[#FFD406]/30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD406] opacity-5 rounded-full -mr-10 -mt-10"></div>
          <Gift className="w-10 h-10 mb-6 text-[#FFD406]" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#FFD406] mb-1">Available Balance</p>
          <h3 className="text-5xl font-bold font-playfair mb-6">₹5,000</h3>
          
          <div className="bg-[#111]/20 p-4 rounded-2xl mb-6 border border-white/10">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">Festive Gifting Card</span>
              <span className="font-bold text-[#FFD406]">₹5,000</span>
            </div>
            <p className="text-[10px] text-white/60">Valid until 31 Dec 2026</p>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 bg-[#FFD406] text-[#990057] font-bold font-playfair py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform">Buy New Card</button>
            <button className="flex-1 bg-transparent border border-[#FFD406] text-[#FFD406] font-bold font-playfair py-3.5 rounded-xl active:bg-[#FFD406]/10 transition-colors">Redeem Code</button>
          </div>
        </div>
      </div>
    </div>
  );

  if (view === 'refer') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora text-[#F8F4EE]">
      <SubHeader title="Refer & Earn" />
      <div className="px-6 flex flex-col items-center text-center mt-4">
        <div className="w-28 h-28 bg-[#F8F4EE] rounded-full flex items-center justify-center text-[#990057] mb-6 shadow-2xl shadow-black/20">
          <Share2 className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold font-playfair mb-3">Invite & Get Rewarded!</h3>
        <p className="text-sm text-[#F8F4EE]/80 leading-relaxed max-w-xs mb-8">
          Share the legacy of Malabar Gold & Diamonds. When your friends make their first purchase, you both receive <span className="font-bold text-[#FFD406]">0.25g of 22K Gold</span> in your wallet.
        </p>
        
        <div className="w-full bg-[#F8F4EE] rounded-3xl p-6 text-[#990057] shadow-lg mb-6 relative overflow-hidden">
          <p className="text-xs font-bold text-[#990057]/60 uppercase tracking-widest mb-2">Your Unique Code</p>
          <p className="text-3xl font-mono font-bold tracking-widest text-[#990057] mb-4">MGD-SATHYA88</p>
          <div className="flex justify-between items-center border-t border-[#990057]/10 pt-4 mt-2">
            <div className="text-left">
              <p className="text-[10px] text-[#990057]/60 font-bold uppercase">Friends Joined</p>
              <p className="text-xl font-bold font-playfair">3</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#990057]/60 font-bold uppercase">Gold Earned</p>
              <p className="text-xl font-bold font-playfair text-[#FFD406]">0.75g</p>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-[#FFD406] text-[#990057] font-bold font-playfair py-4 rounded-2xl shadow-xl active:scale-95 transition-transform flex items-center justify-center space-x-2">
          <Share2 className="w-5 h-5" />
          <span>Share Code</span>
        </button>
      </div>
    </div>
  );

  if (view === 'support') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Help & Support" />
      <div className="px-6 space-y-6">
        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5">
          <h4 className="text-lg font-bold font-playfair text-[#990057] mb-4 border-b border-[#990057]/10 pb-4">Frequently Asked Questions</h4>
          <div className="space-y-4">
            {[
              { q: "How to track my order?", a: "You can track your order directly from the 'Order History' section in your profile." },
              { q: "Can I cancel my Swarna SIP?", a: "Yes, early closure is possible. However, you may lose the accumulated bonus making-charge benefits." },
              { q: "What is the return policy?", a: "We offer a 14-day hassle-free return policy on all unworn items with original tags." },
              { q: "How is the daily gold rate calculated?", a: "Our rates reflect the standard Bangalore association gold rates, updated daily at 10:30 AM." }
            ].map((faq, i) => (
              <div key={i} className="pb-4 border-b border-[#990057]/5 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-bold text-[#990057]">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-[#990057]/40 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-[#990057]/70 leading-relaxed pr-4">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-[#990057] text-[#FFD406] font-bold font-playfair py-4 rounded-xl shadow-lg active:scale-95 transition-transform flex justify-center items-center space-x-2 border border-[#FFD406]/30">
          <MessageSquare className="w-5 h-5" />
          <span>Chat with our Executive</span>
        </button>
      </div>
    </div>
  );

  if (view === 'contact') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Contact Us" />
      <div className="px-6 space-y-4">
        <div className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5 space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]"><PhoneCall className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-[#990057]/60 uppercase font-bold tracking-wider mb-1">Toll Free Number</p>
              <p className="text-lg font-bold font-playfair text-[#990057]">1800-425-7333</p>
              <p className="text-[10px] text-[#990057]/50 mt-1">Mon-Sun, 9 AM to 9 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]"><Mail className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-[#990057]/60 uppercase font-bold tracking-wider mb-1">Email Support</p>
              <p className="text-base font-bold font-playfair text-[#990057]">care@malabargoldanddiamonds.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057]"><MapPin className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-[#990057]/60 uppercase font-bold tracking-wider mb-1">Corporate Office</p>
              <p className="text-sm font-semibold text-[#990057] leading-relaxed">Malabar Gold & Diamonds Corporate Office, TC 32/204/2, Sitaram Mill Road, Thrissur, Kerala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TextDocView = ({ title, type }) => {
    let content = "";
    if (type === 'privacy') {
      content = (
        <>
          <strong className="text-[#990057] text-base font-playfair block mb-2">1. Data Collection & Trust</strong>
          We value the trust you place in Malabar Gold & Diamonds. We collect standard information such as name, contact details, and location strictly to provide a seamless jewelry purchasing and SIP tracking experience. Your data is encrypted and securely stored.
          <br/><br/>
          <strong className="text-[#990057] text-base font-playfair block mb-2">2. Usage of Information</strong>
          Your KYC details are collected in compliance with government regulations for high-value gold purchases. We never sell your personal data to third-party advertisers.
        </>
      );
    } else if (type === 'terms') {
      content = (
        <>
          <strong className="text-[#990057] text-base font-playfair block mb-2">1. Swarna SIP Terms</strong>
          By enrolling in the Swarna SIP plan, you agree to make regular monthly installments. Failure to pay installments for three consecutive months may result in automatic conversion to a standard digital gold wallet without making-charge benefits.
          <br/><br/>
          <strong className="text-[#990057] text-base font-playfair block mb-2">2. Gold Rate Fluctuations</strong>
          The gold weight accumulated is calculated based on the live 22K or 24K rate precisely at the time the transaction is successfully captured by our banking partners.
        </>
      );
    } else if (type === 'refund') {
      content = (
        <>
          <strong className="text-[#990057] text-base font-playfair block mb-2">1. 14-Day Return Policy</strong>
          We offer a 14-day hassle-free return policy on all unworn jewelry items. The items must be returned with their original packaging, certificates, and un-tampered tags.
          <br/><br/>
          <strong className="text-[#990057] text-base font-playfair block mb-2">2. Custom & Engraved Items</strong>
          Items created via The Atelier (custom designs) or items that have been personalized/engraved are non-refundable and non-exchangeable unless there is a verifiable manufacturing defect.
          <br/><br/>
          <strong className="text-[#990057] text-base font-playfair block mb-2">3. Gold Exchange</strong>
          We offer 100% exchange value on the prevailing gold weight for all 22K jewelry purchased from Malabar Gold & Diamonds. Making charges and taxes are non-refundable during exchange.
        </>
      );
    }

    return (
      <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
        <SubHeader title={title} />
        <div className="px-6">
          <div className="bg-[#F8F4EE] rounded-3xl p-8 shadow-lg border border-[#990057]/5">
            <p className="text-sm text-[#990057]/80 leading-relaxed space-y-4">
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  if (view === 'privacy') return <TextDocView title="Privacy Policy" type="privacy" />;
  if (view === 'refund') return <TextDocView title="Refund Policy" type="refund" />;
  if (view === 'terms') return <TextDocView title="Terms & Conditions" type="terms" />;

  if (view === 'security') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Security Settings" />
      <div className="px-6 space-y-4">
        <div className="bg-[#F8F4EE] rounded-3xl p-2 shadow-lg border border-[#990057]/5">
          <div className="flex items-center justify-between p-4 border-b border-[#990057]/5">
            <div className="w-[75%]">
              <h4 className="text-sm font-bold font-playfair text-[#990057]">Biometric Login</h4>
              <p className="text-xs text-[#990057]/60 mt-0.5">Use Face ID / Touch ID</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={true} />
              <div className="w-11 h-6 bg-[#990057]/20 rounded-full peer peer-checked:bg-[#990057]"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="w-[75%]">
              <h4 className="text-sm font-bold font-playfair text-[#990057]">Device Management</h4>
              <p className="text-xs text-[#990057]/60 mt-0.5">Logged in on iPhone 15 Pro</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#990057]/30" />
          </div>
        </div>
        <div className="mt-8 border-t border-[#F8F4EE]/20 pt-6">
          {deleteStep === 0 ? (
            <button onClick={() => setDeleteStep(1)} className="w-full flex items-center justify-center space-x-2 py-4 text-[#D1202E] font-bold font-playfair bg-[#F8F4EE] rounded-2xl active:scale-95 transition-transform shadow-md">
              <Trash2 className="w-5 h-5" />
              <span>Delete Account</span>
            </button>
          ) : (
            <div className="bg-[#F8F4EE] border border-red-200 p-6 rounded-3xl shadow-xl">
              <h4 className="text-[#D1202E] font-bold font-playfair text-lg mb-2">Are you sure?</h4>
              <p className="text-sm text-[#D1202E]/80 mb-6 italic leading-relaxed">This action is irreversible. You will lose your Swarna SIP progress, Malabar Gold & Diamonds Stars, and all saved preferences.</p>
              <div className="flex space-x-3">
                <button onClick={() => setDeleteStep(0)} className="flex-1 py-3.5 bg-white text-[#990057] font-bold font-playfair rounded-xl text-sm border border-[#990057]/20">Cancel</button>
                <button onClick={onLogout} className="flex-1 py-3.5 bg-[#D1202E] text-[#F8F4EE] font-bold font-playfair rounded-xl text-sm shadow-md">Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (view === 'settings') return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora">
      <SubHeader title="Notification Settings" />
      <div className="px-6 space-y-4">
        <div className="bg-[#F8F4EE] rounded-3xl p-2 shadow-lg border border-[#990057]/5">
          {[
            { title: "Order Updates", desc: "Push notifications & SMS for delivery status", checked: true },
            { title: "Gold Rate Alerts", desc: "Daily morning SMS for gold price changes", checked: true },
            { title: "WhatsApp Communication", desc: "Receive updates and support on WhatsApp", checked: true },
            { title: "Investment Reminders", desc: "Alerts for upcoming SIP installments", checked: true },
            { title: "Promotional Offers", desc: "Emails for new collections and discounts", checked: false }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border-b border-[#990057]/5 last:border-0">
              <div className="w-[75%]">
                <h4 className="text-sm font-bold font-playfair text-[#990057]">{item.title}</h4>
                <p className="text-xs text-[#990057]/60 mt-1 leading-tight">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                <div className="w-11 h-6 bg-[#990057]/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[#F8F4EE] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#F8F4EE] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#990057]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora text-[#F8F4EE]">
      <SubHeader title="Profile Placeholder" />
      <div className="px-6 text-center italic opacity-70">Feature in development.</div>
    </div>
  );
};

const OrdersScreen = ({ onBack }) => {
  const mockOrders = [
    { id: "ORD-9823", date: "28 Feb 2026", item: "Temple Heritage Necklace", desc: "22g • 22K Gold • Jayanagar Branch", amount: "1,45,000", status: "Dispatched", icon: Truck, color: "text-blue-600 bg-blue-50 border-blue-100" },
    { id: "ORD-9711", date: "10 Jan 2026", item: "Swarna 11-Month SIP", desc: "Installment #6 • Added 0.74g", amount: "5,000", status: "Completed", icon: CheckCircle2, color: "text-green-600 bg-green-50 border-green-100" },
    { id: "ORD-8542", date: "15 Nov 2025", item: "Lakshmi Gold Coin", desc: "10g • 24K Gold (999)", amount: "75,500", status: "Delivered", icon: Package, color: "text-purple-600 bg-purple-50 border-purple-100" }
  ];

  return (
    <div className="h-full w-full bg-transparent flex flex-col pb-24 overflow-y-auto hide-scrollbar font-lora text-[#990057]">
      <div className="bg-[#F8F4EE] px-6 pt-14 pb-6 shadow-sm rounded-b-[2rem] flex items-center space-x-4 mb-6">
        <button onClick={onBack} className="w-10 h-10 bg-[#990057]/5 rounded-full flex items-center justify-center text-[#990057] active:scale-95 transition-transform">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold font-playfair text-[#990057]">My Orders</h2>
      </div>
      
      <div className="px-6 space-y-4">
        {mockOrders.map((order, idx) => (
          <div key={idx} className="bg-[#F8F4EE] rounded-3xl p-6 shadow-lg border border-[#990057]/5">
            <div className="flex justify-between items-start mb-4 border-b border-[#990057]/5 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#990057]/50 uppercase tracking-wider block mb-1">Order #{order.id}</span>
                <p className="text-sm text-[#990057] font-bold">{order.date}</p>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold border flex items-center ${order.color}`}>
                <order.icon className="w-3.5 h-3.5 mr-1.5" />
                {order.status}
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="w-2/3">
                <h4 className="text-base font-bold font-playfair text-[#990057] mb-1">{order.item}</h4>
                <p className="text-xs text-[#990057]/70">{order.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#FFD406]">₹{order.amount}</p>
              </div>
            </div>

            {order.status === "Dispatched" && (
              <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 mt-2">
                <p className="text-xs font-bold text-blue-800 flex items-center mb-2">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                  Arriving by tomorrow, 9 PM
                </p>
                <div className="w-full bg-blue-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 w-[70%] h-full rounded-full"></div>
                </div>
              </div>
            )}

            {order.status === "Completed" || order.status === "Delivered" ? (
              <div className="flex space-x-3 mt-4 pt-4 border-t border-[#990057]/5">
                <button className="flex-1 py-2.5 text-xs font-bold text-[#990057] bg-[#990057]/5 border border-[#990057]/10 rounded-xl active:bg-[#990057]/10 font-playfair">
                  View Details
                </button>
                <button className="flex-1 py-2.5 text-xs font-bold text-[#FFD406] bg-[#990057] rounded-xl active:scale-95 transition-transform flex items-center justify-center font-playfair">
                  <Download className="w-3.5 h-3.5 mr-1.5" /> Invoice
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP WRAPPER ---

export default function App() {
  const [appState, setAppState] = useState('splash'); // splash, intro, login, main
  const [activeTab, setActiveTab] = useState('home');
  const [currentLocation, setCurrentLocation] = useState('Jayanagar');

  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => setAppState('intro'), 7000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleLogin = () => setAppState('main');
  const handleLogout = () => {
    setAppState('login');
    setActiveTab('home');
  };

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'home': return <HomeScreen setActiveTab={setActiveTab} currentLocation={currentLocation} />;
      case 'shop': return <ShopScreen setActiveTab={setActiveTab} />;
      case 'invest': return <InvestScreen />;
      case 'custom': return <CustomizerScreen />;
      case 'profile': return <ProfileScreen onLogout={handleLogout} setActiveTab={setActiveTab} />;
      case 'orders': return <OrdersScreen onBack={() => setActiveTab('home')} />;
      case 'branches': return <BranchScreen onBack={() => setActiveTab('home')} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />;
      default: return <HomeScreen setActiveTab={setActiveTab} currentLocation={currentLocation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 selection:bg-[#FFD406] selection:text-[#990057]">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lora { font-family: 'Lora', serif; }
      `}} />
      <div className="relative w-full max-w-[400px] h-[850px] bg-black rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-900/5">
        <div className="relative w-full h-full bg-gradient-to-b from-[#990057] to-[#7A1E2C] rounded-[2.5rem] overflow-hidden flex flex-col shadow-inner font-lora">
          {appState === 'splash' && <SplashScreen />}
          {appState === 'intro' && <IntroScreen onComplete={() => setAppState('login')} />}
          {appState === 'login' && (
            <>
              <TopStatusBar theme="dark" />
              <LoginScreen onLogin={handleLogin} />
            </>
          )}
          {appState === 'main' && (
            <>
              <TopStatusBar theme="light" />
              <div className="flex-1 overflow-hidden relative">
                {renderActiveTab()}
              </div>
              <BottomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}