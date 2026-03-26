import React, { useState } from 'react';
import { Bot, Sprout, CloudSunRain, Cpu, Sun, FileSpreadsheet, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import t from '../translations';

const Modules = () => {
    const { lang } = useLang();
    const tx = t[lang].modules;

    const [soilResult,     setSoilResult]     = useState(null);
    const [pestResult,     setPestResult]     = useState(null);
    const [agriTechResult, setAgriTechResult] = useState(null);
    const [energyResult,   setEnergyResult]   = useState(null);
    const [schemeResult,   setSchemeResult]   = useState(null);

    const analyzeSoil = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const ph = parseFloat(fd.get('ph')), n = parseFloat(fd.get('n')), p = parseFloat(fd.get('p')), k = parseFloat(fd.get('k'));
        let recs = [];
        if (ph < 6.0) recs.push('Soil too acidic: Apply 500kg/acre lime. Cost: ₹2000/acre.');
        if (ph > 7.5) recs.push('Soil too alkaline: Apply gypsum 200kg/acre. Cost: ₹1500/acre.');
        if (n < 140)  recs.push('Nitrogen deficient: Apply 80kg Urea/acre. Cost: ₹800/acre.');
        if (p < 25)   recs.push('Phosphorus deficient: Apply 100kg DAP/acre. Cost: ₹1200/acre.');
        if (k < 150)  recs.push('Potassium deficient: Apply 60kg MOP/acre. Cost: ₹1000/acre.');
        if (recs.length === 0) recs.push('Your soil is balanced! Maintain with organic manure.');
        setSoilResult(recs);
    };

    const getPestAlert = (e) => {
        const d = e.target.value;
        const data = {
            vidarbha:   { pest: 'Cotton Bollworm',  risk: 'HIGH',   solution: 'Spray Chlorantraniliprole 0.4ml/L. Cost: ₹1200/acre.' },
            marathwada: { pest: 'Fall Armyworm',    risk: 'MEDIUM', solution: 'Spray Emamectin Benzoate 0.5g/L. Monitor daily.' },
            nashik:     { pest: 'Downy Mildew',     risk: 'LOW',    solution: 'Spray Mancozeb 2g/L every 15 days.' },
        };
        setPestResult(data[d] || null);
    };

    const getAgriTechAdvice = (e) => {
        e.preventDefault();
        const area = parseFloat(new FormData(e.target).get('area'));
        let recs = [];
        if (area < 2)       recs = [{ tool: 'Drip Irrigation Kit', cost: '₹15,000', benefit: 'Save 40% water' }, { tool: 'Soil Moisture Sensor', cost: '₹3,500', benefit: 'Optimize watering' }];
        else if (area < 10) recs = [{ tool: 'Solar Water Pump (3HP)', cost: '₹85,000', benefit: '₹12K/year savings' }, { tool: 'Drone Sprayer (Rental)', cost: '₹800/acre', benefit: 'Faster pest control' }, { tool: 'Weather Station', cost: '₹25,000', benefit: 'Predict rain & frost' }];
        else                recs = [{ tool: 'Tractor-mounted Sprayer', cost: '₹1.2L', benefit: 'Cover 20 acres/day' }, { tool: 'IoT Farm Monitoring', cost: '₹50,000', benefit: 'Real-time alerts' }, { tool: 'Solar Pump (10HP)', cost: '₹2.5L', benefit: '₹40K/year savings' }];
        setAgriTechResult(recs);
    };

    const calculateEnergyROI = (e) => {
        e.preventDefault();
        const bill = parseFloat(new FormData(e.target).get('bill'));
        const solarCost = bill * 12 * 7, subsidy = solarCost * 0.3, netCost = solarCost - subsidy, annualSavings = bill * 12;
        setEnergyResult({ solarCost, subsidy, netCost, annualSavings, payback: (netCost / annualSavings).toFixed(1) });
    };

    const findSchemes = (e) => {
        e.preventDefault();
        const cat = new FormData(e.target).get('category');
        const schemes = {
            small:   [{ name: 'PM-KISAN', amount: '₹6,000/year', desc: 'Direct income support' }, { name: 'Kisan Credit Card', amount: '₹3L loan @ 4%', desc: 'Low-interest credit' }, { name: 'Soil Health Card', amount: 'Free', desc: 'Soil testing subsidy' }],
            general: [{ name: 'PM-KUSUM (Solar)', amount: '30% subsidy', desc: 'Solar pump subsidy' }, { name: 'Crop Insurance (PMFBY)', amount: '2% premium', desc: 'Protect against loss' }, { name: 'Micro Irrigation', amount: '50% subsidy', desc: 'Drip/sprinkler subsidy' }],
        };
        setSchemeResult(schemes[cat] || schemes.general);
    };

    return (
        <section id="modules" className="py-20 scroll-mt-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darker mb-4">{tx.heading}</h2>
                <p className="text-xl text-[#5c6e57] max-w-2xl mx-auto font-medium">{tx.sub}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* M1 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Bot size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m1title}</h3>
                    <p className="text-[#4a5c46] mb-6 flex-grow">{tx.m1desc}</p>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
                        <p className="text-sm text-green-800 font-medium">{tx.m1quote}</p>
                    </div>
                    <button onClick={() => document.getElementById('aiChat')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline w-full mt-auto">{tx.m1btn}</button>
                </div>

                {/* M2 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Sprout size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m2title}</h3>
                    <form onSubmit={analyzeSoil} className="space-y-4 flex-grow">
                        <div>
                            <label className="label text-sm">{tx.m2label1}</label>
                            <div className="grid grid-cols-3 gap-2">
                                <input name="n" type="number" defaultValue="140" className="input-field py-2 px-3 text-sm" placeholder="N" />
                                <input name="p" type="number" defaultValue="25"  className="input-field py-2 px-3 text-sm" placeholder="P" />
                                <input name="k" type="number" defaultValue="180" className="input-field py-2 px-3 text-sm" placeholder="K" />
                            </div>
                        </div>
                        <div>
                            <label className="label text-sm">{tx.m2label2}</label>
                            <input name="ph" type="number" step="0.1" defaultValue="6.5" className="input-field py-2 px-3" />
                        </div>
                        <button type="submit" className="btn-primary w-full py-2.5 text-sm mt-4">{tx.m2btn}</button>
                    </form>
                    {soilResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200 text-sm font-medium text-green-800">
                            {soilResult.map((r, i) => <div key={i} className="mb-1 flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" />{r}</div>)}
                        </motion.div>
                    )}
                </div>

                {/* M3 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><CloudSunRain size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m3title}</h3>
                    <div className="space-y-4 flex-grow">
                        <label className="label text-sm">{tx.m3label}</label>
                        <select onChange={getPestAlert} className="input-field py-2.5" defaultValue="">
                            <option value="" disabled>{tx.m3placeholder}</option>
                            <option value="vidarbha">{tx.m3opt1}</option>
                            <option value="marathwada">{tx.m3opt2}</option>
                            <option value="nashik">{tx.m3opt3}</option>
                        </select>
                    </div>
                    {pestResult && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className={`mt-6 p-4 rounded-xl border ${pestResult.risk === 'HIGH' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                            <div className="flex font-bold items-center gap-2 mb-2"><AlertTriangle size={18} /> {pestResult.pest} ({pestResult.risk})</div>
                            <p className="text-sm">{pestResult.solution}</p>
                        </motion.div>
                    )}
                </div>

                {/* M4 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Cpu size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m4title}</h3>
                    <p className="text-[#4a5c46] mb-4">{tx.m4desc}</p>
                    <form onSubmit={getAgriTechAdvice} className="mt-auto space-y-3">
                        <input name="area" type="number" placeholder={tx.m4placeholder} defaultValue="5" className="input-field py-2 px-3" required />
                        <button type="submit" className="btn-outline w-full py-2">{tx.m4btn}</button>
                    </form>
                    {agriTechResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-2">
                            {agriTechResult.map((r, i) => (
                                <div key={i} className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-sm">
                                    <div className="font-bold text-blue-900">{r.tool}</div>
                                    <div className="text-blue-700 text-xs">{r.cost} • {r.benefit}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* M5 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><Sun size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m5title}</h3>
                    <p className="text-[#4a5c46] mb-4">{tx.m5desc}</p>
                    <form onSubmit={calculateEnergyROI} className="mt-auto space-y-3">
                        <input name="bill" type="number" placeholder={tx.m5placeholder} defaultValue="3000" className="input-field py-2 px-3" required />
                        <button type="submit" className="btn-outline w-full py-2">{tx.m5btn}</button>
                    </form>
                    {energyResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-sm space-y-1">
                            <div className="flex justify-between"><span className="text-gray-600">{tx.m5solar}</span><span className="font-bold">₹{energyResult.solarCost.toLocaleString()}</span></div>
                            <div className="flex justify-between text-green-700"><span>{tx.m5subsidy}</span><span className="font-bold">-₹{energyResult.subsidy.toLocaleString()}</span></div>
                            <div className="flex justify-between border-t pt-1"><span className="font-bold">{tx.m5net}</span><span className="font-bold">₹{energyResult.netCost.toLocaleString()}</span></div>
                            <div className="flex justify-between"><span>{tx.m5savings}</span><span className="font-bold text-brand-dark">₹{energyResult.annualSavings.toLocaleString()}</span></div>
                            <div className="bg-brand-subtle p-2 rounded-lg mt-2 text-center font-bold text-brand-dark">{tx.m5payback} {energyResult.payback} {tx.m5years}</div>
                        </motion.div>
                    )}
                </div>

                {/* M6 */}
                <div className="glass-panel p-8 flex flex-col h-full border-t-4 border-t-brand">
                    <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-sm"><FileSpreadsheet size={32} /></div>
                    <h3 className="text-2xl font-bold text-brand-darker mb-3">{tx.m6title}</h3>
                    <p className="text-[#4a5c46] mb-4">{tx.m6desc}</p>
                    <form onSubmit={findSchemes} className="mt-auto space-y-3">
                        <select name="category" className="input-field py-2 px-3">
                            <option value="small">{tx.m6opt1}</option>
                            <option value="general">{tx.m6opt2}</option>
                        </select>
                        <button type="submit" className="btn-outline w-full py-2">{tx.m6btn}</button>
                    </form>
                    {schemeResult && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-2">
                            {schemeResult.map((s, i) => (
                                <div key={i} className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-sm">
                                    <div className="font-bold text-purple-900">{s.name}</div>
                                    <div className="text-purple-700 text-xs">{s.amount}</div>
                                    <div className="text-purple-600 text-xs">{s.desc}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Modules;
