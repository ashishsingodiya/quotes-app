const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-stone-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-stone-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-stone-800 rounded-full animate-bounce"></div>
      </div>
      <p className="text-stone-500 text-xs tracking-widest uppercase">Loading</p>
    </div>
  );
};

export default Loader;
