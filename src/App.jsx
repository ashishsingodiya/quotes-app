import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Pagination from './components/Pagination';
import QuoteCard from './components/QuoteCard';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [quotesData, setQuotesData] = useState(null);
  const [quoteOfTheDay, setQuoteOfTheDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchQuotes = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}?page=${page}&limit=9`);
      if (!response.ok) {
        throw new Error(`Failed to fetch quotes: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      
      if (data.success || data.statusCode === 200) {
        setQuotesData(data.data);
      } else {
        throw new Error(data.message || 'Something went wrong while fetching quotes.');
      }
    } catch (err) {
      console.error(err);
      setError('Unable to load quotes at this moment. Please check your connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchQuoteOfTheDay = async () => {
    try {
      const qodResponse = await fetch(`${API_URL}/quote/random`);
      if (qodResponse.ok) {
        const qodData = await qodResponse.json();
        if (qodData.success && qodData.data) {
          setQuoteOfTheDay(qodData.data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch quote of the day:', err);
    }
  };

  useEffect(() => {
    fetchQuotes(currentPage);
    fetchQuoteOfTheDay();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans font-normal text-stone-900 flex flex-col selection:bg-stone-200">
      <Header loading={loading} onRefresh={() => fetchQuotes(currentPage)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        {!loading && quoteOfTheDay && currentPage === 1 && (
          <Hero quote={quoteOfTheDay} />
        )}
        
        {loading && !quotesData ? (
          <Loader />
        ) : error ? (
          <div className="mt-10 mx-auto max-w-lg bg-white p-8 rounded-none border border-stone-300 shadow-sm text-center">
            <h3 className="text-xl font-serif text-stone-900 mb-2">Error Occurred</h3>
            <p className="text-stone-600 mb-6">{error}</p>
            <button
              onClick={() => fetchQuotes(currentPage)}
              className="px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white text-sm tracking-widest uppercase transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
              {quotesData?.data?.map((quote) => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </div>

            {(!quotesData?.data || quotesData.data.length === 0) && (
              <div className="text-center py-20 text-stone-500 font-serif text-lg italic">
                No quotes available.
              </div>
            )}

            {quotesData && quotesData.totalPages > 1 && (
              <Pagination 
                paginationData={quotesData} 
                onPageChange={handlePageChange}
              />
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
