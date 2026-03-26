import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Modules from './components/Modules';
import AiChat from './components/AiChat';
import ProfitCalculator from './components/ProfitCalculator';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen relative overflow-x-hidden">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero />
                    <Problems />
                    <Modules />
                    <AiChat />
                    <ProfitCalculator />
                    <Impact />
                    <Roadmap />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
