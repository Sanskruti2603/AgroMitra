import React, { useState, useEffect } from 'react';
import { Leaf, Mic, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`sticky top-0 z-50 flex items-center justify-between py-4 px-6 md:px-10 mt-4 mx-auto w-full transition-all duration-300 rounded-[2rem] 
      ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl' : 'glass-panel'}`}
        >
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-dark to-brand rounded-full flex items-center justify-center text-white shadow-lg shadow-brand/20">
                    <Leaf size={24} />
                </div>
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-brand-darker to-brand bg-clip-text text-transparent hidden sm:block">
                    AgroMitra AI
                </h1>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 font-semibold text-[#2c5e2a]">
                {['problem', 'modules', 'impact', 'roadmap'].map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => scrollToSection(item)}
                            className="hover:text-brand transition-colors capitalize cursor-pointer font-semibold relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="hidden md:block">
                <button
                    onClick={() => scrollToSection('aiChat')}
                    className="btn-primary flex items-center gap-2"
                >
                    <Mic size={18} />
                    <span>Ask AgroMitra</span>
                </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-dark p-2">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-24 left-0 right-0 bg-white shadow-2xl rounded-3xl p-6 flex flex-col gap-4 mx-4 border border-brand/10 z-50"
                    >
                        {['problem', 'modules', 'impact', 'roadmap'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-left py-3 px-4 rounded-xl hover:bg-brand-subtle text-brand-dark font-semibold capitalize transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('aiChat')}
                            className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                        >
                            <Mic size={18} /> Ask AgroMitra
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
