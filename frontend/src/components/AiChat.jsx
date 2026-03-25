import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, User } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';

const AiChat = () => {
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'नमस्कार! मी तुमचा शेती सहाय्यक आहे. कोणताही शेती प्रश्न विचारा. / Hello! I\'m your farming assistant. Ask any agriculture question!' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            // Calling our Express backend which uses Gemini 2.5 Flash
            const response = await axios.post('http://localhost:5000/api/chat', { message: userMsg });
            setMessages(prev => [...prev, { role: 'ai', content: response.data.reply }]);
        } catch (error) {
            console.error("Chat Error:", error);
            // Fallback if backend is not running to ensure prototype doesn't break entirely
            const offlineResponses = {
                'default': "🌱 AgroMitra AI: Please ensure the backend server is running to connect to Gemini 2.5 Flash. Until then, use recommended organic practices."
            };
            setMessages(prev => [...prev, { role: 'ai', content: offlineResponses['default'], error: true }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="aiChat" className="py-20 scroll-mt-20">
            <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-brand/10">

                {/* Decorative BG */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px]"></div>

                <div className="text-center mb-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-dark to-brand rounded-full text-white mb-6 shadow-lg shadow-brand/30">
                        <Bot size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker mb-4">
                        Ask AgroMitra AI
                    </h2>
                    <p className="text-lg text-[#5c6e57] font-medium">
                        Your 24/7 Farming Assistant powered by Gemini 2.5 Flash
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-brand/20 rounded-3xl overflow-hidden shadow-inner flex flex-col h-[500px]">

                    {/* Chat Messages */}
                    <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                            >
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${msg.role === 'user' ? 'bg-brand text-white' : 'bg-brand-dark text-white'}`}>
                                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                                </div>
                                <div className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-brand text-white rounded-tr-none'
                                        : msg.error ? 'bg-red-50 text-red-800 border-red-200 border rounded-tl-none' : 'bg-white text-[#2c5e2a] border border-[#e2ecd9] rounded-tl-none'
                                    }`}>
                                    {msg.content}
                                </div>
                            </motion.div>
                        ))}
                        {loading && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white"><Bot size={20} /></div>
                                <div className="p-4 rounded-2xl bg-white border border-[#e2ecd9] rounded-tl-none flex items-center gap-2 text-brand-dark">
                                    <Loader2 className="animate-spin" size={18} /> Generating response via Gemini...
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={sendMessage} className="p-4 bg-white border-t border-brand/10 flex gap-3 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="E.g., गहू पिकावर पिवळी पाने, उपाय काय? / How to control armyworm?"
                            className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 rounded-full outline-none transition-all placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="w-14 h-14 bg-brand-dark hover:bg-brand text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
                        >
                            <Send size={20} className="ml-1" />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AiChat;
