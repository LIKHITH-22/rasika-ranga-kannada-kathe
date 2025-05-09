
import { useEffect, useState } from 'react';

const Logo = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-40'}`}
      >
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full bg-kannada-gold flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/f8454e7f-3022-4a0b-aad6-c93a61d30f36.png" 
              alt="Kannada Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-2xl font-bold font-heading text-kannada-red">ಚಿತ್ರಕಥೆ</span>
        </div>
      </div>
      <span className="text-sm block text-kannada-blue font-body">Chithrakathe</span>
    </div>
  );
};

export default Logo;
