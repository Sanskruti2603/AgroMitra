import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Modules from './components/Modules';
import AiChat from './components/AiChat';
import ProfitCalculator from './components/ProfitCalculator';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Container wrapper for max width and padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Navbar />
                <Hero />
                <Problems />
                <Modules />
                <AiChat />
                <ProfitCalculator />
            </div>
            <Footer />
        </div>
    );
}

export default App;
