import { Sparkles } from 'lucide-react';

const Hero = ({ quote }) => {
  if (!quote) return null;

  return (
    <div className="w-full bg-stone-100/50 border border-stone-200 p-8 sm:p-12 mb-12 sm:mb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-stone-900"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-stone-400" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">Quote of the Day</span>
          <Sparkles className="w-4 h-4 text-stone-400" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight mb-8">
          "{quote.content}"
        </h2>
        
        <div className="flex flex-col items-center gap-2">
          <div className="h-[1px] w-16 bg-stone-300 mb-2"></div>
          <p className="font-sans font-semibold text-stone-900 tracking-widest uppercase text-sm">
            {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
