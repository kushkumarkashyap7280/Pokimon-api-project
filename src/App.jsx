import React, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import Card from './components/Card' ;

function App() {

  const [pokimons, setPokimons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyWord] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        // create 100 fetch promises
        const promises = [];
        for (let i = 1; i <= 100; i++) {
          promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }

        // wait until all are done
        const results = await Promise.all(promises);

        // map to required data
        const pokiData = results.map(data => ({
          abilities: data.abilities,
          name: data.species.name,
          image: data.sprites.front_default,
          weight: data.weight,
        }));

        setPokimons(pokiData);
        setFiltered(pokiData); // Initialize filtered with all pokemon
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAll();

  }, []);

  useEffect(() => {
    // Filter pokemon based on keyword
    const filteredPokemon = pokimons.filter((poki) =>
      poki.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltered(filteredPokemon);
  }, [keyword, pokimons]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/vite.svg"
                alt="Pokemon Logo"
                className="w-12 h-12 animate-pulse"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Pokemon Explorer
                </h1>
                <p className="text-gray-600">
                  Discover {pokimons.length} amazing Pokemon
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🎯 {filtered.length} Pokemon Found
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search Pokemon by name..."
              value={keyword}
              onChange={(e) => setKeyWord(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pokemon Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Pokemon Found</h3>
            <p className="text-gray-500">Try searching with a different keyword</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filtered.map((pokimon, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <Card {...pokimon} />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Data provided by the PokeAPI • Built with React & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
