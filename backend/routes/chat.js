const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;
// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

router.post('/', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const systemInstruction = `You are AgroMitra AI, a 24/7 farming assistant helping Indian farmers. You answer farming questions about plant diseases, fertilizer doses, pest control, solar subsidies and more. Keep responses concise and practical. If the user asks in Marathi or Hindi, reply in that language. Emphasize organic practices and cost-effective solutions. Use helpful emojis.`;

        // Using gemini-2.5-flash as requested
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        res.json({ reply: response.text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});

module.exports = router;
