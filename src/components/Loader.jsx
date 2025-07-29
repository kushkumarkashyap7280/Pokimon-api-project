import React from 'react'

function Loader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="text-center">
        {/* Pokemon Ball Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Main Ball */}
            <div className="w-24 h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-full border-4 border-gray-800 relative overflow-hidden">
              {/* Center Line */}
              <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-800 transform -translate-y-1/2"></div>

              {/* Center Button */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full border-2 border-gray-800 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Top Half */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-400 to-red-500 rounded-t-full"></div>

              {/* Bottom Half */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-b-full"></div>
            </div>

            {/* Bounce Animation */}
            <div className="absolute inset-0 animate-bounce">
              <div className="w-full h-full bg-transparent"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 animate-pulse">
            Catching Pokemon...
          </h2>
          <p className="text-gray-600 text-lg">
            Loading your Pokemon collection
          </p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Pokemon Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="text-2xl font-bold text-red-500">100</div>
              <div className="text-xs text-gray-600">Pokemon</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="text-2xl font-bold text-yellow-500">∞</div>
              <div className="text-xs text-gray-600">Abilities</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="text-2xl font-bold text-blue-500">⚡</div>
              <div className="text-xs text-gray-600">Loading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
