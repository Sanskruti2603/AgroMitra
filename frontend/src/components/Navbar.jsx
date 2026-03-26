import React, { useState, useEffect } from 'react';
import { Leaf, Mic, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LanguageContext';
import t from '../translations';

const NAV_IDS = ['problem', 'modules', 'aiChat', 'impact', 'roadmap'];

const Navbar = () => {
    const { lang, setLang } = useLang();
    const tx = t[lang].nav;

    const [scrolled,  setScrolled]  = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);
    const [activeId,  setActiveId]  = useState('');

    const NAV_LINKS = [
        { id: 'problem', label: tx.problem },
        { id: 'modules', label: tx.modules },
        { id: 'aiChat',  label: tx.askAI   },
        { id: 'impact',  label: tx.impact  },
        { id: 'roadmap', label: tx.roadmap },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observers = [];
        NAV_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-brand/10' : 'bg-white/80 backdrop-blur-md'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                    {/* Logo */}
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-gradient-to-br from-brand-dark to-brand rounded-full flex items-center justify-center text-white shadow-md">
                            <Leaf size={18} />
                        </div>
                        <span className="text-lg font-extrabold bg-gradient-to-r from-brand-darker to-brand bg-clip-text text-transparent hidden sm:block">
                            AgroMitra AI
                        </span>
                    </button>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollTo(id)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                                        ${activeId === id
                                            ? 'bg-brand text-white shadow-md'
                                            : 'text-[#2c5e2a] hover:bg-brand-subtle'}`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: Language switcher + CTA + mobile toggle */}
                    <div className="flex items-center gap-2">

                        {/* Language switcher */}
                        <div className="flex items-center bg-gray-100 rounded-full p-0.5 gap-0.5">
                            <button
                                onClick={() => setLang('en')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200
                                    ${lang === 'en' ? 'bg-brand text-white shadow-sm' : 'text-gray-500 hover:text-brand-dark'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang('mr')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200
                                    ${lang === 'mr' ? 'bg-brand text-white shadow-sm' : 'text-gray-500 hover:text-brand-dark'}`}
                            >
                                मर
                            </button>
                        </div>

                        <button
                            onClick={() => scrollTo('aiChat')}
                            className="btn-primary hidden md:flex items-center gap-1.5 py-2 px-4 text-sm"
                        >
                            <Mic size={15} /> {tx.askBtn}
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-xl text-brand-dark hover:bg-brand-subtle transition-colors"
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-brand/10 overflow-hidden"
                        >
                            <div className="px-4 py-4 flex flex-col gap-1">
                                {NAV_LINKS.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => scrollTo(id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all
                                            ${activeId === id ? 'bg-brand text-white' : 'text-brand-dark hover:bg-brand-subtle'}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                                <button onClick={() => scrollTo('aiChat')} className="btn-primary w-full flex items-center justify-center gap-2 mt-2 py-3">
                                    <Mic size={15} /> {tx.askBtn}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Spacer for fixed navbar */}
            <div className="h-16" />
        </>
    );
};

export default Navbar;
