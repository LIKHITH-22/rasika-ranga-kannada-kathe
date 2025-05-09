
import { useEffect, useState } from 'react';
import { Image } from 'lucide-react';

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
          <div className="h-10 w-10 rounded-full bg-kannada-red flex items-center justify-center">
            <Image size={22} className="text-kannada-gold" />
          </div>
          <span className="text-2xl font-bold font-heading text-kannada-red">ಚಿತ್ರಕಥೆ</span>
        </div>
      </div>
      <span className="text-sm block text-kannada-blue font-body">Chithrakathe</span>
    </div>
  );
};

export default Logo;
