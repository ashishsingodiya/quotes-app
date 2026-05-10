import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ paginationData, onPageChange }) => {
  const { page, totalPages, previousPage, nextPage } = paginationData;

  return (
    <div className="flex items-center justify-between border-t border-stone-200 mt-20 pt-6 mb-8 max-w-2xl mx-auto">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={!previousPage}
        className="flex items-center justify-center gap-2 text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:hover:text-stone-600 transition-colors uppercase tracking-widest text-xs font-medium cursor-pointer disabled:cursor-not-allowed"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </button>
      
      <div className="text-stone-500 text-xs tracking-widest uppercase">
        <span className="text-stone-900 font-semibold">{page}</span> / {totalPages}
      </div>
      
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!nextPage}
        className="flex items-center justify-center gap-2 text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:hover:text-stone-600 transition-colors uppercase tracking-widest text-xs font-medium cursor-pointer disabled:cursor-not-allowed"
      >
        <span className="hidden sm:inline">Next</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
