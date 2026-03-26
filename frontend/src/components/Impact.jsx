import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Leaf, IndianRupee } from 'lucide-react';
import { useLang } from '../LanguageContext';
import t from '../translations';

const statIcons = [
    { icon: <Users size={36} />,       color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-200' },
    { icon: <IndianRupee size={36} />, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { icon: <TrendingUp size={36} />,  color: 'text-red-500',    bg: 'bg-red-50',    border: 'border-red-200' },
    { icon: <Leaf size={36} />,        color: 'text-brand-dark', bg: 'bg-brand-subtle', border: 'border-brand/30' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item      = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } } };

const Impact = () => {
    const { lang } = useLang();
    const tx = t[lang].impact;

    return (
        <section id="impact" className="py-20 scroll-mt-24">
            <div className="text-center mb-14">
                <span className="inline-block bg-brand-subtle text-brand-dark text-sm font-bold px-5 py-2 rounded-full mb-4 border border-brand/20">{tx.badge}</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">{tx.heading}</h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">{tx.sub}</p>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {tx.stats.map((s, i) => (
                    <motion.div key={i} variants={item}
                        className={`glass-panel p-8 text-center border-2 ${statIcons[i].border} hover:-translate-y-2 transition-transform duration-300`}>
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${statIcons[i].bg} ${statIcons[i].color} mb-5 shadow-sm`}>
                            {statIcons[i].icon}
                        </div>
                        <div className={`text-4xl font-black mb-1 ${statIcons[i].color}`}>{s.value}</div>
                        <div className="text-lg font-bold text-brand-darker mb-1">{s.label}</div>
                        <div className="text-sm text-[#5c6e57]">{s.sub}</div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-gradient-to-r from-brand-darker to-[#2a5c2e] text-white rounded-[2rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                    <div className="text-5xl mb-6">🌾</div>
                    <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-6 max-w-3xl mx-auto">{tx.quote}</blockquote>
                    <p className="text-green-200 text-lg font-medium">{tx.quoteSub}</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Impact;
