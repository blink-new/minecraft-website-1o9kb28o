import React from 'react';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#1a0000] flex items-center justify-center overflow-hidden">
      {/* Banner background */}
      <img
        src="/crimson-banner.png"
        alt="CrimsonMC Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        draggable={false}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="font-minecraft text-5xl md:text-7xl text-yellow-300 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)] mb-8 tracking-widest select-none">
          CRIMSONMC
        </h1>
        <button
          className="mt-4 px-8 py-3 rounded bg-red-700 hover:bg-red-600 text-white font-minecraft text-lg shadow-lg transition-all duration-200 border-b-4 border-red-900 hover:border-red-700"
        >
          Enter
        </button>
      </div>
      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a0000] to-transparent pointer-events-none" />
    </div>
  );
};

export default App;
