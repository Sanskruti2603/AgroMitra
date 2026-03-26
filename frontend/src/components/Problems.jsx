import React from 'react';
import { MessageSquareOff, Droplets, BugOff, FileQuestion, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import t from '../translations';

const icons = [
    { icon: <MessageSquareOff size={36} />, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', solutionColor: 'text-blue-700 bg-blue-50 border-blue-200' },
    { icon: <Droplets size={36} />,         color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', solutionColor: 'text-amber-700 bg-amber-50 border-amber-200' },
    { icon: <BugOff size={36} />,           color: 'text-red-500',   bg: 'bg-red-50',   border: 'border-red-200',   solutionColor: 'text-red-700 bg-red-50 border-red-200' },
    { icon: <FileQuestion size={36} />,     color: 'text-purple-600',bg: 'bg-purple-50',border: 'border-purple-200',solutionColor: 'text-purple-700 bg-purple-50 border-purple-200' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item      = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } };

const Problems = () => {
    const { lang } = useLang();
    const tx = t[lang].problems;

    return (
        <section id="problem" className="py-20 scroll-mt-24">
            <div className="text-center mb-14">
                <span className="inline-block bg-red-50 text-red-600 text-sm font-bold px-5 py-2 rounded-full mb-4 border border-red-200">
                    {tx.sectionBadge}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">{tx.heading}</h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">{tx.sub}</p>
            </div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tx.items.map((prob, idx) => (
                    <motion.div key={idx} variants={item}
                        className={`glass-panel p-7 flex flex-col group hover:-translate-y-2 transition-transform duration-300 border-2 ${icons[idx].border}`}>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${icons[idx].bg} ${icons[idx].color} mb-5 shadow-sm group-hover:scale-110 transition-transform`}>
                            {icons[idx].icon}
                        </div>
                        <h3 className="text-lg font-bold text-brand-darker mb-2">{prob.title}</h3>
                        <p className="text-[#4a5c46] text-sm mb-5 flex-grow leading-relaxed">{prob.desc}</p>
                        <div className="inline-block bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-bold text-xs border border-red-100 mb-4">
                            💸 {prob.loss}
                        </div>
                        <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border ${icons[idx].solutionColor}`}>
                            <ArrowRight size={13} className="shrink-0" /> {prob.solution}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-brand-subtle to-[#f0f7ea] border border-brand/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <p className="text-2xl font-extrabold text-brand-darker mb-1">
                        {tx.totalLoss} <span className="text-red-600">₹55,000+/acre/year</span>
                    </p>
                    <p className="text-[#5c6e57] font-medium">{tx.totalSub}</p>
                </div>
                <button onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary flex items-center gap-2 whitespace-nowrap">
                    {tx.seeBtn} <ArrowRight size={18} />
                </button>
            </motion.div>
        </section>
    );
};

export default Problems;
