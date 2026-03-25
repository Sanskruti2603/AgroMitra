import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const ProfitCalculator = () => {
    const [profit, setProfit] = useState(null);

    const calculateProfit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const area = parseFloat(fd.get('area'));
        const yieldExpected = parseFloat(fd.get('yield'));
        const price = parseFloat(fd.get('price'));

        const revenue = area * yieldExpected * price;
        const estimatedCost = area * 15000; // rough estimation
        const additionalAIProfit = revenue * 0.35; // 35% higher with AI recommendations (from landing page claim)

        setProfit({
            base: revenue - estimatedCost,
            withAi: (revenue - estimatedCost) + additionalAIProfit,
            extra: additionalAIProfit
        });
    };

    return (
        <section className="py-10">
            <div className="bg-gradient-to-br from-[#1e3222] to-[#2a4530] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">

                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3">
                            <TrendingUp className="text-yellow-400" size={36} /> Profit Maximization Calculator
                        </h2>
                        <p className="text-lg text-green-100/80">
                            Calculate your expected expected profit and see the <strong>AgroMitra AI Advantage</strong>.
                        </p>

                        {profit && (
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mt-8 space-y-4">
                                <div className="flex justify-between items-center text-green-50">
                                    <span>Base Estimated Profit:</span>
                                    <span className="font-bold">₹{profit.base.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-yellow-400 border-b border-white/10 pb-4">
                                    <span>Additional Profit via AI (35% avg):</span>
                                    <span className="font-bold text-xl">+ ₹{profit.extra.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-white text-xl">
                                    <span className="font-bold">Total Expected Profit:</span>
                                    <span className="font-black text-2xl text-green-400">₹{profit.withAi.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 w-full max-w-md bg-white p-8 rounded-[2rem] text-brand-dark shadow-2xl">
                        <form onSubmit={calculateProfit} className="space-y-5 flex flex-col">
                            <div>
                                <label className="label text-sm text-gray-600">Crop Type</label>
                                <select name="crop" className="input-field py-3 bg-gray-50 border-gray-200">
                                    <option value="wheat">Wheat</option>
                                    <option value="rice">Rice</option>
                                    <option value="cotton">Cotton</option>
                                    <option value="soybean">Soybean</option>
                                </select>
                            </div>
                            <div>
                                <label className="label text-sm text-gray-600">Land Area (acres)</label>
                                <input type="number" name="area" defaultValue="5" className="input-field py-3 bg-gray-50 border-gray-200" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label text-sm text-gray-600">Yield (q/acre)</label>
                                    <input type="number" name="yield" defaultValue="20" className="input-field py-3 bg-gray-50 border-gray-200" />
                                </div>
                                <div>
                                    <label className="label text-sm text-gray-600">Price (₹/q)</label>
                                    <input type="number" name="price" defaultValue="2200" className="input-field py-3 bg-gray-50 border-gray-200" />
                                </div>
                            </div>
                            <button type="submit" className="btn-primary w-full mt-4 py-4 text-lg shadow-xl shadow-brand-dark/20">Calculate Profit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfitCalculator;
