import { Feather } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fcfcfc] py-12 mt-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center text-xs tracking-widest uppercase text-stone-400 space-y-4">
        <Feather className="w-5 h-5 text-stone-300" strokeWidth={1} />
        <p>© {new Date().getFullYear()} Literary Quotes • Powered by FreeAPI</p>
      </div>
    </footer>
  );
};

export default Footer;
