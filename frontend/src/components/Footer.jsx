import React from 'react';
import { Leaf, Phone, Mail, Globe, Sparkles, Github, Linkedin } from 'lucide-react';
import { useLang } from '../LanguageContext';
import t from '../translations';

const Footer = () => {
    const { lang } = useLang();
    const tx = t[lang].footer;

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="bg-brand-darker text-green-50 pt-20 pb-10 mt-16 rounded-t-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-yellow-400 to-brand" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                <Leaf size={24} className="text-brand" />
                            </div>
                            <h3 className="text-2xl font-bold">AgroMitra AI</h3>
                        </div>
                        <p className="text-green-200 leading-relaxed text-sm">{tx.tagline}</p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"><Github size={16} /></a>
                            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"><Linkedin size={16} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-bold">{tx.quickLinks}</h4>
                        <ul className="space-y-3 text-green-200 text-sm">
                            {tx.links.map(([id, label]) => (
                                <li key={id}>
                                    <button onClick={() => scrollTo(id)} className="hover:text-white transition-colors text-left">{label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Modules */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-bold">{tx.ourModules}</h4>
                        <ul className="space-y-2 text-green-200 text-sm">
                            {tx.modules.map((m, i) => <li key={i}>{m}</li>)}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h4 className="text-lg font-bold">{tx.contact}</h4>
                        <ul className="space-y-3 text-green-200 text-sm">
                            <li className="flex items-center gap-3"><Phone size={16} className="text-brand shrink-0" /> +91-1800-AGRO-MITRA</li>
                            <li className="flex items-center gap-3"><Mail size={16} className="text-brand shrink-0" /> support@agromitra.ai</li>
                            <li className="flex items-center gap-3"><Globe size={16} className="text-brand shrink-0" /> www.agromitra.ai</li>
                        </ul>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="btn-primary flex items-center gap-2 px-5 py-2.5 bg-white text-brand-dark hover:bg-green-50 text-sm shadow-lg mt-2">
                            <Sparkles size={16} /> {tx.joinBtn}
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-green-200/60 text-sm">
                    <p>{tx.closing}</p>
                    <p className="shrink-0">{tx.powered}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
