import { Feather, RefreshCcw } from 'lucide-react';
import { useState } from 'react';

const Header = ({ loading, onRefresh }) => {
  const [spinLock, setSpinLock] = useState(false);

  const handleRefresh = () => {
    if (loading || spinLock) return;
    setSpinLock(true);
    onRefresh();
    setTimeout(() => {
      setSpinLock(false);
    }, 1000); 
  };

  const isSpinning = loading || spinLock;

  return (
    <header className="bg-[#fcfcfc]/90 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50 w-full mb-8 lg:mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Feather className="w-8 h-8 text-stone-800" strokeWidth={1.5} />
          <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-stone-900">
            Literary<span className="italic text-stone-500 font-light">Quotes</span>
          </h1>
        </div>
        <button 
          onClick={handleRefresh}
          className="flex items-center text-sm font-medium text-stone-600 hover:text-stone-900 gap-2 bg-transparent px-4 py-2 border-b border-transparent hover:border-stone-900 transition-all duration-300 cursor-pointer"
          disabled={loading || spinLock}
        >
          <RefreshCcw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline uppercase tracking-widest text-xs">Refresh</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
