import React from 'react';
import { Bot, Languages, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
            >
                <div className="inline-flex items-center gap-2 bg-brand-subtle text-brand-dark px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-sm border border-brand/20">
                    <Bot size={18} />
                    India's First Complete AI Farm Companion
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-brand-darker leading-tight">
                    स्मार्ट शेती, <br />सुरक्षित उत्पन्न <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
                        Smart Farming, Secure Income
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-[#3a5a3a] font-medium max-w-xl leading-relaxed">
                    Real-time pest alerts • Soil diagnosis • Government schemes • Profit maximization
                </p>

                <div className="flex flex-wrap gap-3 py-2">
                    {['मराठी', 'हिंदी', 'English'].map((lang, idx) => (
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            key={lang}
                            className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm border border-gray-100 text-brand-dark"
                        >
                            <Languages size={16} className="text-brand" /> {lang}
                        </motion.span>
                    ))}
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => {
                            const el = document.getElementById('modules');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-primary flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
                    >
                        <Sprout size={22} /> Start Diagnosis
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex justify-center lg:justify-end relative"
            >
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/30 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-yellow-400/20 rounded-full blur-[60px] -z-10"></div>

                <div className="relative w-full max-w-md aspect-square glass-panel p-8 flex items-center justify-center bg-gradient-to-br from-white/80 to-white/40">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/farmer-driving-tractor-in-field-5301825-4422935.png" alt="Smart Farming Tractor" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
