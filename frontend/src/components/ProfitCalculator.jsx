import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useLang } from '../LanguageContext';
import t from '../translations';

const ProfitCalculator = () => {
    const { lang } = useLang();
    const tx = t[lang].profit;
    const [profit, setProfit] = useState(null);

    const calculateProfit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const area = parseFloat(fd.get('area')), yieldQ = parseFloat(fd.get('yield')), price = parseFloat(fd.get('price'));
        const revenue = area * yieldQ * price, cost = area * 15000, extra = revenue * 0.35;
        setProfit({ base: revenue - cost, withAi: (revenue - cost) + extra, extra });
    };

    return (
        <section className="py-10">
            <div className="bg-gradient-to-br from-[#1e3222] to-[#2a4530] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3">
                            <TrendingUp className="text-yellow-400" size={36} /> {tx.heading}
                        </h2>
                        <p className="text-lg text-green-100/80">{tx.sub}</p>
                        {profit && (
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mt-8 space-y-4">
                                <div className="flex justify-between items-center text-green-50">
                                    <span>{tx.base}</span><span className="font-bold">₹{profit.base.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-yellow-400 border-b border-white/10 pb-4">
                                    <span>{tx.extra}</span><span className="font-bold text-xl">+ ₹{profit.extra.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-white text-xl">
                                    <span className="font-bold">{tx.total}</span>
                                    <span className="font-black text-2xl text-green-400">₹{profit.withAi.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 w-full max-w-md bg-white p-8 rounded-[2rem] text-brand-dark shadow-2xl">
                        <form onSubmit={calculateProfit} className="space-y-5">
                            <div>
                                <label className="label text-sm text-gray-600">{tx.crop}</label>
                                <select name="crop" className="input-field py-3 bg-gray-50 border-gray-200">
                                    <option value="wheat">{tx.wheat}</option>
                                    <option value="rice">{tx.rice}</option>
                                    <option value="cotton">{tx.cotton}</option>
                                    <option value="soybean">{tx.soybean}</option>
                                </select>
                            </div>
                            <div>
                                <label className="label text-sm text-gray-600">{tx.area}</label>
                                <input type="number" name="area" defaultValue="5" className="input-field py-3 bg-gray-50 border-gray-200" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="label text-sm text-gray-600">{tx.yield}</label>
                                    <input type="number" name="yield" defaultValue="20" className="input-field py-3 bg-gray-50 border-gray-200" />
                                </div>
                                <div>
                                    <label className="label text-sm text-gray-600">{tx.price}</label>
                                    <input type="number" name="price" defaultValue="2200" className="input-field py-3 bg-gray-50 border-gray-200" />
                                </div>
                            </div>
                            <button type="submit" className="btn-primary w-full mt-4 py-4 text-lg">{tx.btn}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfitCalculator;
