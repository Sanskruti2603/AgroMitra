import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MapPin, Globe, Zap, CheckCircle2 } from 'lucide-react';
import { useLang } from '../LanguageContext';
import t from '../translations';

const phaseStyles = [
    { icon: <Zap size={24} />,    color: 'bg-brand text-white',       border: 'border-brand',       ring: 'ring-brand/40 animate-pulse' },
    { icon: <MapPin size={24} />, color: 'bg-amber-500 text-white',   border: 'border-amber-400',   ring: 'ring-gray-100' },
    { icon: <Rocket size={24} />, color: 'bg-purple-600 text-white',  border: 'border-purple-400',  ring: 'ring-gray-100' },
    { icon: <Globe size={24} />,  color: 'bg-blue-600 text-white',    border: 'border-blue-400',    ring: 'ring-gray-100' },
];

const Roadmap = () => {
    const { lang } = useLang();
    const tx = t[lang].roadmap;

    return (
        <section id="roadmap" className="py-20 scroll-mt-24">
            <div className="text-center mb-14">
                <span className="inline-block bg-brand-subtle text-brand-dark text-sm font-bold px-5 py-2 rounded-full mb-4 border border-brand/20">{tx.badge}</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">{tx.heading}</h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">{tx.sub}</p>
            </div>

            <div className="relative">
                <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-brand via-amber-400 via-purple-500 to-blue-500 rounded-full z-0" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {tx.phases.map((step, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
                            className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-full ${phaseStyles[i].color} flex items-center justify-center shadow-xl mb-6 border-4 border-white ring-4 ${phaseStyles[i].ring}`}>
                                {phaseStyles[i].icon}
                            </div>
                            <div className={`glass-panel p-6 w-full border-t-4 ${phaseStyles[i].border} hover:-translate-y-1 transition-transform duration-300`}>
                                <div className="text-xs font-bold text-[#5c6e57] uppercase tracking-widest mb-1">{step.phase}</div>
                                <h3 className="text-xl font-extrabold text-brand-darker mb-1">{step.title}</h3>
                                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {i === 0 ? tx.current : `${tx.upcoming} ${step.timeline}`}
                                </div>
                                <ul className="space-y-2 text-left">
                                    {step.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-[#4a5c46]">
                                            <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${i === 0 ? 'text-brand' : 'text-gray-400'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
                <p className="text-2xl font-bold text-brand-darker mb-2">{tx.bottom1}</p>
                <p className="text-[#5c6e57] text-lg">{tx.bottom2}</p>
            </motion.div>
        </section>
    );
};

export default Roadmap;
