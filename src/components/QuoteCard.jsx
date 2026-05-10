const QuoteCard = ({ quote }) => {
  return (
    <div className="group bg-white p-8 sm:p-10 border border-stone-200 hover:border-stone-400 transition-colors duration-500 flex flex-col h-full shadow-sm hover:shadow-md">
      
      <div className="mb-10">
        <p className="text-stone-800 text-xl sm:text-2xl font-serif italic leading-relaxed text-justify">
          "{quote.content}"
        </p>
      </div>
      
      <div className="mt-auto flex flex-col gap-4">
        <div className="h-[1px] w-12 bg-stone-300 mb-2"></div>
        <div>
          <p className="font-sans font-medium text-stone-900 tracking-wide uppercase text-sm mb-1">{quote.author}</p>
        </div>
        
        {quote.tags && quote.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
            {quote.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] tracking-widest uppercase font-semibold text-stone-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCard;
