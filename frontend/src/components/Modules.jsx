import React, { useState } from 'react';
import { Bot, Sprout, CloudSunRain, Cpu, Sun, FileSpreadsheet, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Modules = () => {
    const [soilResult, setSoilResult] = useState(null);
    const [pestResult, setPestResult] = useState(null);

    const analyzeSoil = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const ph = parseFloat(fd.get('ph'));
        const n = parseFloat(fd.get('n'));
        const p = parseFloat(fd.get('p'));
        const k = parseFloat(fd.get('k'));

        let recommendations = [];
        if (ph < 6.0) recommendations.push("Soil too acidic: Apply 500kg/acre lime. Cost: ₹2000/acre.");
        if (ph > 7.5) recommendations.push("Soil too alkaline: Apply gypsum 200kg/acre. Cost: ₹1500/acre.");
        if (n < 140) recommendations.push("Nitrogen deficient: Apply 80kg Urea/acre. Cost: ₹800/acre.");
        if (p < 25) recommendations.push("Phosphorus deficient: Apply 100kg DAP/acre. Cost: ₹1200/acre.");
        if (k < 150) recommendations.push("Potassium deficient: Apply 60kg MOP/acre. Cost: ₹1000/acre.");

        if (recommendations.length === 0) recommendations.push("Your soil is balanced! Maintain with organic manure.");

        setSoilResult(recommendations);
    };

    const getPestAlert = (e) => {
        const district = e.target.value;
        const pestData = {
            vidarbha: { pest: "Cotton Bollworm", risk: "HIGH", solution: "Spray Chlorantraniliprole 0.4ml/L. Cost: ₹1200/acre." },
            marathwada: { pest: "Fall Armyworm", risk: "MEDIUM", solution: "Spray Emamectin Benzoate 0.5g/L. Monitor daily." },
            nashik: { pest: "Downy Mildew", risk: "LOW", solution: "Spray Mancozeb 2g/L every 15 days." }
        };
        setPestResult(pestData[district] || null);
    };

    return (
        <section id="modules" className="py-20 scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">
                    🤖 Six Powerful Modules
                </h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">
                    Complete farm management designed to solve specific challenges
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Module 1 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm">
                        <Bot size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">1. AI Query Assistant</h3>
                    <p className="text-[#4a5c46] mb-6 flex-grow">Answers farming questions in Marathi, Hindi, English. Instant solutions for diseases & yield.</p>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
                        <p className="text-sm text-green-800 font-medium">✅ "My wheat had yellow leaves. AI suggested nitrogen. Applied urea, saved ₹25,000!"</p>
                    </div>
                    <button onClick={() => document.getElementById('aiChat')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline w-full mt-auto">Ask Question</button>
                </div>

                {/* Module 2 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm">
                        <Sprout size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">2. Soil Health Analyser</h3>
                    <form onSubmit={analyzeSoil} className="space-y-4 flex-grow">
                        <div>
                            <label className="label text-sm">N, P, K Values (kg/ha)</label>
                            <div className="grid grid-cols-3 gap-2">
                                <input name="n" type="number" defaultValue="140" className="input-field py-2 px-3 text-sm" placeholder="N" />
                                <input name="p" type="number" defaultValue="25" className="input-field py-2 px-3 text-sm" placeholder="P" />
                                <input name="k" type="number" defaultValue="180" className="input-field py-2 px-3 text-sm" placeholder="K" />
                            </div>
                        </div>
                        <div>
                            <label className="label text-sm">Soil pH</label>
                            <input name="ph" type="number" step="0.1" defaultValue="6.5" className="input-field py-2 px-3" />
                        </div>
                        <button type="submit" className="btn-primary w-full py-2.5 text-sm mt-4">Analyze Soil</button>
                    </form>
                    {soilResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 text-sm font-medium text-green-800">
                            {soilResult.map((res, i) => <div key={i} className="mb-1 flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" /> {res}</div>)}
                        </motion.div>
                    )}
                </div>

                {/* Module 3 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm">
                        <CloudSunRain size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">3. Pest Forecaster</h3>
                    <div className="space-y-4 flex-grow">
                        <label className="label text-sm">Select Region</label>
                        <select onChange={getPestAlert} className="input-field py-2.5" defaultValue="">
                            <option value="" disabled>Choose District...</option>
                            <option value="vidarbha">Vidarbha (Cotton)</option>
                            <option value="marathwada">Marathwada (Soybean)</option>
                            <option value="nashik">Nashik (Grape)</option>
                        </select>
                    </div>
                    {pestResult && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`mt-6 p-4 rounded-xl border ${pestResult.risk === 'HIGH' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                            <div className="flex font-bold items-center gap-2 mb-2">
                                <AlertTriangle size={18} /> {pestResult.pest} ({pestResult.risk})
                            </div>
                            <p className="text-sm">{pestResult.solution}</p>
                        </motion.div>
                    )}
                </div>

                {/* Other modules mapped simply for the prototype without full interactive logic to save space, but keeping design */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Cpu size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">4. AgriTech Advisor</h3>
                    <p className="text-[#4a5c46]">Recommends modern farming tools based on farm size, crop, and budget.</p>
                    <div className="mt-auto space-y-3 pt-6">
                        <input type="number" placeholder="Farm Size (acres)" className="input-field py-2 px-3" />
                        <button className="btn-outline w-full py-2">Get Advice</button>
                    </div>
                </div>

                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Sun size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">5. Renewable Energy Guide</h3>
                    <p className="text-[#4a5c46]">Solar pump sizing, ROI calculation, and PM-KUSUM subsidy information.</p>
                    <div className="mt-auto space-y-3 pt-6">
                        <input type="number" placeholder="Electricity Bill (₹)" className="input-field py-2 px-3" />
                        <button className="btn-outline w-full py-2">Calculate ROI</button>
                    </div>
                </div>

                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><FileSpreadsheet size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">6. Scheme Matcher</h3>
                    <p className="text-[#4a5c46]">Matches farmers with eligible government schemes based on profile.</p>
                    <div className="mt-auto space-y-3 pt-6">
                        <select className="input-field py-2 px-3"><option>Small/Marginal Farmer</option><option>General</option></select>
                        <button className="btn-outline w-full py-2">Find Schemes</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Modules;
