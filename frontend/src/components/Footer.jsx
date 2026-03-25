import React from 'react';
import { Leaf, Phone, Mail, Globe, Sparkles } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-darker text-green-50 pt-20 pb-10 mt-16 rounded-t-[3rem] relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-yellow-400 to-brand"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Leaf size={24} className="text-brand" />
                            </div>
                            <h3 className="text-2xl font-bold">AgroMitra AI</h3>
                        </div>
                        <p className="text-green-200 leading-relaxed">
                            Empowering 140 Million Indian Farmers with Artificial Intelligence. Smart farming decisions, 24/7.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xl font-bold tracking-wide">Contact Us</h4>
                        <ul className="space-y-4 text-green-200">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand" /> +91-1800-AGRO-MITRA
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand" /> support@agromitra.ai
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe size={18} className="text-brand" /> www.agromitra.ai
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xl font-bold tracking-wide">Ready to skyrocket your yield?</h4>
                        <p className="text-green-200">Join thousands of farmers maximizing their profits today.</p>
                        <button onClick={() => window.scrollTo(0, 0)} className="btn-primary flex items-center gap-2 px-6 py-3 bg-white text-brand-dark hover:bg-green-50 w-max shadow-lg">
                            <Sparkles size={18} /> Join AgroMitra
                        </button>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-green-200/60 text-sm">
                    <p>🙏 धन्यवाद · शुक्रिया · Thank You — Together, let's build a prosperous future.</p>
                    <p>Powered by Gemini 2.5 Flash | © 2026 AgroMitra AI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
