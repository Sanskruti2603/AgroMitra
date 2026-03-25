import React from 'react';
import { MessageSquareOff, Droplets, BugOff, FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: <MessageSquareOff size={40} />,
        title: "Language & Info Gap",
        desc: "95% of agricultural research is in English, but only 10% of farmers understand it.",
        loss: "₹15,000/acre/year",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        icon: <Droplets size={40} />,
        title: "Soil Health Crisis",
        desc: "70% of Indian soils are deficient in nitrogen, 80% deficient in organic carbon.",
        loss: "₹12,000/acre/year",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        icon: <BugOff size={40} />,
        title: "Pest & Disease Attacks",
        desc: "Annual crop loss of ₹90,000 crore due to delayed pest identification.",
        loss: "₹20,000/acre/year",
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        icon: <FileQuestion size={40} />,
        title: "Missed Gov Benefits",
        desc: "₹2.5 lakh crore in subsidies remain unclaimed annually.",
        loss: "₹8,000/farmer/year",
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Problems = () => {
    return (
        <section id="problem" className="py-20 scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">
                    📉 Why Indian Farmers Need AgroMitra AI
                </h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">
                    Every year, farmers lose 30% of potential income due to these critical challenges
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {problems.map((prob, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="glass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 ${prob.bg} group-hover:h-full transition-all duration-500 -z-10 opacity-50`}></div>
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${prob.bg} ${prob.color} mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                            {prob.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-darker mb-3">{prob.title}</h3>
                        <p className="text-[#4a5c46] mb-6 min-h-[80px]">{prob.desc}</p>
                        <div className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-lg font-bold text-sm tracking-wide border border-red-100">
                            Loss: {prob.loss}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Problems;
