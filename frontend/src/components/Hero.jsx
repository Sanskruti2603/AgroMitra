import React from 'react';
import { Bot, Languages, Sprout, ShieldCheck, Star, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import t from '../translations';

const Hero = () => {
    const { lang } = useLang();
    const tx = t[lang].hero;

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">

            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 space-y-7">

                <div className="inline-flex items-center gap-2 bg-brand-subtle text-brand-dark px-5 py-2 rounded-full font-bold text-sm border border-brand/20 shadow-sm">
                    <Bot size={16} /> {tx.badge}
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-brand-darker leading-tight">
                    {tx.h1a} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">{tx.h1b}</span>
                </h1>

                <p className="text-lg md:text-xl text-[#3a5a3a] font-medium max-w-xl leading-relaxed">{tx.sub}</p>

                <div className="flex flex-wrap gap-3">
                    {[tx.lang1, tx.lang2, tx.lang3].map((l) => (
                        <span key={l} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm border border-gray-100 text-brand-dark">
                            <Languages size={14} className="text-brand" /> {l}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-5">
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#4a5c46]"><ShieldCheck size={17} className="text-brand" /> {tx.trust1}</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#4a5c46]"><Star size={17} className="text-yellow-500" /> {tx.trust2}</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#4a5c46]"><Sprout size={17} className="text-brand" /> {tx.trust3}</span>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <button onClick={() => scrollTo('modules')} className="btn-primary flex items-center gap-2 text-base px-7 py-3.5">
                        <Sprout size={20} /> {tx.cta1}
                    </button>
                    <button onClick={() => scrollTo('aiChat')} className="btn-outline flex items-center gap-2 text-base px-7 py-3.5">
                        <Bot size={20} /> {tx.cta2}
                    </button>
                </div>

                <motion.button
                    animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
                    onClick={() => scrollTo('problem')}
                    className="flex items-center gap-2 text-sm text-[#5c6e57] cursor-pointer"
                >
                    <ArrowDown size={15} /> {tx.scrollHint}
                </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm mx-8 lg:mx-0 mt-8 lg:mt-0">
                    <div className="absolute inset-0 bg-brand/20 rounded-full blur-[80px] -z-10 scale-110" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-[50px] -z-10" />

                    <div className="glass-panel p-6 bg-gradient-to-br from-white/90 to-white/60">
                        <img
                            src="/farming.svg"
                            alt="Smart Farming — AgroMitra AI"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://img.freepik.com/free-vector/farmer-concept-illustration_114360-1817.jpg'; }}
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
                        className="absolute -left-10 top-8 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-brand/10 text-sm font-bold text-brand-dark whitespace-nowrap z-10">
                        {tx.badge1}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
                        className="absolute -right-10 top-1/2 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-red-100 text-sm font-bold text-red-600 whitespace-nowrap z-10">
                        {tx.badge2}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-green-100 text-sm font-bold text-green-700 whitespace-nowrap z-10">
                        {tx.badge3}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
