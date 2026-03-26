const t = {
    en: {
        // Navbar
        nav: {
            problem: 'Problem',
            modules: 'Modules',
            askAI: 'Ask AI',
            impact: 'Impact',
            roadmap: 'Roadmap',
            askBtn: 'Ask AgroMitra',
        },

        // Hero
        hero: {
            badge: "India's First Complete AI Farm Companion",
            h1a: 'Smart Farming,',
            h1b: 'Secure Income',
            sub: 'AI-powered assistant for crop advice, soil analysis, pest alerts, and government schemes — in your language, 24/7.',
            lang1: 'मराठी', lang2: 'हिंदी', lang3: 'English',
            trust1: 'Powered by Gemini 2.5 Flash',
            trust2: '6 Powerful Modules',
            trust3: '140M+ Farmers Targeted',
            cta1: 'Start Diagnosis',
            cta2: 'Ask AI Now',
            scrollHint: 'Scroll to see why farmers need AgroMitra',
            badge1: '🌱 Soil pH: 6.8 — Optimal',
            badge2: '🐛 Pest Alert: LOW Risk',
            badge3: '💰 PM-KISAN: ₹6,000 Eligible',
        },

        // Problems
        problems: {
            sectionBadge: '🔴 The Problem',
            heading: 'Why Indian Farmers Need AgroMitra AI',
            sub: 'Every year, farmers lose 30% of potential income due to these critical challenges',
            totalLoss: 'Total Preventable Loss:',
            totalSub: 'AgroMitra AI addresses all 4 problems in one app.',
            seeBtn: 'See Our Solution',
            items: [
                {
                    title: 'Language & Info Gap',
                    desc: '95% of agricultural research is in English, but only 10% of farmers understand it.',
                    loss: '₹15,000/acre/year',
                    solution: 'AI answers in Marathi, Hindi & English',
                },
                {
                    title: 'Soil Health Crisis',
                    desc: '70% of Indian soils are deficient in nitrogen, 80% deficient in organic carbon.',
                    loss: '₹12,000/acre/year',
                    solution: 'Soil Analyser gives instant fertilizer advice',
                },
                {
                    title: 'Pest & Disease Attacks',
                    desc: 'Annual crop loss of ₹90,000 crore due to delayed pest identification.',
                    loss: '₹20,000/acre/year',
                    solution: '7–14 day early pest alerts by region',
                },
                {
                    title: 'Missed Gov Benefits',
                    desc: '₹2.5 lakh crore in subsidies remain unclaimed annually due to lack of awareness.',
                    loss: '₹8,000/farmer/year',
                    solution: 'Scheme Matcher finds eligible subsidies',
                },
            ],
        },

        // Modules
        modules: {
            heading: '🤖 Six Powerful Modules',
            sub: 'Complete farm management designed to solve specific challenges',
            m1title: '1. AI Query Assistant',
            m1desc: 'Answers farming questions in Marathi, Hindi, English. Instant solutions for diseases & yield.',
            m1quote: '✅ "My wheat had yellow leaves. AI suggested nitrogen. Applied urea, saved ₹25,000!"',
            m1btn: 'Ask Question',
            m2title: '2. Soil Health Analyser',
            m2label1: 'N, P, K Values (kg/ha)',
            m2label2: 'Soil pH',
            m2btn: 'Analyze Soil',
            m3title: '3. Pest Forecaster',
            m3label: 'Select Region',
            m3placeholder: 'Choose District...',
            m3opt1: 'Vidarbha (Cotton)',
            m3opt2: 'Marathwada (Soybean)',
            m3opt3: 'Nashik (Grape)',
            m4title: '4. AgriTech Advisor',
            m4desc: 'Recommends modern farming tools based on farm size, crop, and budget.',
            m4placeholder: 'Farm Size (acres)',
            m4btn: 'Get Advice',
            m5title: '5. Renewable Energy Guide',
            m5desc: 'Solar pump sizing, ROI calculation, and PM-KUSUM subsidy information.',
            m5placeholder: 'Monthly Electricity Bill (₹)',
            m5btn: 'Calculate ROI',
            m5solar: 'Solar Cost:',
            m5subsidy: 'PM-KUSUM Subsidy:',
            m5net: 'Net Cost:',
            m5savings: 'Annual Savings:',
            m5payback: 'Payback:',
            m5years: 'years',
            m6title: '6. Scheme Matcher',
            m6desc: 'Matches farmers with eligible government schemes based on profile.',
            m6opt1: 'Small/Marginal Farmer',
            m6opt2: 'General Farmer',
            m6btn: 'Find Schemes',
        },

        // AiChat
        chat: {
            heading: 'Ask AgroMitra AI',
            sub: 'Your 24/7 Farming Assistant powered by Gemini 2.5 Flash',
            welcome: "Hello! I'm your farming assistant. Ask any agriculture question! / नमस्कार! कोणताही शेती प्रश्न विचारा.",
            placeholder: 'E.g., Why are my wheat leaves yellow? / गहू पिकावर पिवळी पाने का?',
            generating: 'Generating response via Gemini...',
            offline: '🌱 AgroMitra AI: Please ensure the backend server is running to connect to Gemini 2.5 Flash.',
        },

        // Profit Calculator
        profit: {
            heading: 'Profit Maximization Calculator',
            sub: 'Calculate your expected profit and see the AgroMitra AI Advantage.',
            crop: 'Crop Type',
            area: 'Land Area (acres)',
            yield: 'Yield (q/acre)',
            price: 'Price (₹/q)',
            btn: 'Calculate Profit',
            base: 'Base Estimated Profit:',
            extra: 'Additional Profit via AI (35% avg):',
            total: 'Total Expected Profit:',
            wheat: 'Wheat', rice: 'Rice', cotton: 'Cotton', soybean: 'Soybean',
        },

        // Impact
        impact: {
            badge: '📊 Real Impact',
            heading: 'Why This Matters',
            sub: 'The scale of the problem demands an AI-powered solution',
            quote: '"AgroMitra AI is a multilingual AI-powered app that helps farmers with crop advice, soil analysis, pest prediction, modern farming tools, renewable energy, and government schemes."',
            quoteSub: 'Together, we can build a smarter future for agriculture. 🙏',
            stats: [
                { value: '140M+', label: 'Farmers Targeted', sub: 'Across India' },
                { value: '₹2L Cr', label: 'Unclaimed Subsidies', sub: 'Every year, unused' },
                { value: '30%', label: 'Crop Loss Reducible', sub: 'With early AI alerts' },
                { value: '35%', label: 'Income Increase', sub: 'Avg. with AgroMitra AI' },
            ],
        },

        // Roadmap
        roadmap: {
            badge: '🛣️ Our Journey',
            heading: 'Roadmap to Impact',
            sub: 'We start small, validate fast, and scale to all of India',
            current: '🟢 In Progress',
            upcoming: '⏳',
            bottom1: '🚀 Start small. Scale to all of India.',
            bottom2: 'Every great revolution begins with a single seed. 🌱',
            phases: [
                { phase: 'Phase 1', title: 'MVP Launch', timeline: 'Month 1–2', items: ['AI Chat (Gemini 2.5 Flash)', 'Soil Health Analyser', 'Pest Forecaster', 'Marathi + Hindi + English'] },
                { phase: 'Phase 2', title: 'Pilot — 5 Districts', timeline: 'Month 3–5', items: ['AgriTech Advisor live', 'Scheme Matcher with real data', 'Voice input (Marathi)', '500 farmer pilot program'] },
                { phase: 'Phase 3', title: 'Maharashtra Scale', timeline: 'Month 6–9', items: ['Renewable Energy ROI live', 'Weather API integration', 'Offline mode (PWA)', '10,000+ active farmers'] },
                { phase: 'Phase 4', title: 'Pan-India Expansion', timeline: 'Month 10–18', items: ['10+ regional languages', 'Government API integration', '1M+ farmers onboarded', 'B2B: FPO & Agri-banks'] },
            ],
        },

        // Footer
        footer: {
            tagline: 'Empowering 140 Million Indian Farmers with Artificial Intelligence. Smart farming decisions, 24/7.',
            quickLinks: 'Quick Links',
            ourModules: 'Our Modules',
            contact: 'Contact Us',
            joinBtn: 'Join AgroMitra',
            closing: '🙏 धन्यवाद · शुक्रिया · Thank You — Together, we can build a smarter future for agriculture.',
            powered: 'Powered by Gemini 2.5 Flash | © 2025 AgroMitra AI',
            modules: ['🤖 AI Query Assistant', '🌱 Soil Health Analyser', '🐛 Pest Risk Forecaster', '🚜 AgriTech Advisor', '☀️ Renewable Energy Guide', '📋 Scheme Matcher'],
            links: [['problem', '🔴 The Problem'], ['modules', '🤖 6 Modules'], ['aiChat', '💬 Ask AI'], ['impact', '📊 Impact'], ['roadmap', '🛣️ Roadmap']],
        },
    },

    mr: {
        // Navbar
        nav: {
            problem: 'समस्या',
            modules: 'मॉड्युल्स',
            askAI: 'AI विचारा',
            impact: 'प्रभाव',
            roadmap: 'रोडमॅप',
            askBtn: 'AgroMitra ला विचारा',
        },

        // Hero
        hero: {
            badge: 'भारतातील पहिला संपूर्ण AI शेती सहाय्यक',
            h1a: 'स्मार्ट शेती,',
            h1b: 'सुरक्षित उत्पन्न',
            sub: 'पीक सल्ला, माती विश्लेषण, कीड अलर्ट आणि सरकारी योजनांसाठी AI सहाय्यक — तुमच्या भाषेत, २४/७.',
            lang1: 'मराठी', lang2: 'हिंदी', lang3: 'English',
            trust1: 'Gemini 2.5 Flash द्वारे',
            trust2: '६ शक्तिशाली मॉड्युल्स',
            trust3: '१४ कोटी+ शेतकरी लक्ष्य',
            cta1: 'निदान सुरू करा',
            cta2: 'AI ला विचारा',
            scrollHint: 'शेतकऱ्यांना AgroMitra का हवे ते पाहण्यासाठी स्क्रोल करा',
            badge1: '🌱 माती pH: ६.८ — उत्तम',
            badge2: '🐛 कीड अलर्ट: कमी धोका',
            badge3: '💰 PM-KISAN: ₹६,००० पात्र',
        },

        // Problems
        problems: {
            sectionBadge: '🔴 समस्या',
            heading: 'भारतीय शेतकऱ्यांना AgroMitra AI का हवे?',
            sub: 'दरवर्षी शेतकरी या गंभीर आव्हानांमुळे ३०% संभाव्य उत्पन्न गमावतात',
            totalLoss: 'एकूण टाळता येण्याजोगे नुकसान:',
            totalSub: 'AgroMitra AI एकाच अॅपमध्ये ४ समस्या सोडवते.',
            seeBtn: 'आमचे समाधान पाहा',
            items: [
                {
                    title: 'भाषा आणि माहितीची दरी',
                    desc: '९५% कृषी संशोधन इंग्रजीत आहे, पण फक्त १०% शेतकऱ्यांना ते समजते.',
                    loss: '₹१५,०००/एकर/वर्ष',
                    solution: 'AI मराठी, हिंदी आणि इंग्रजीत उत्तर देते',
                },
                {
                    title: 'मातीच्या आरोग्याचे संकट',
                    desc: '७०% भारतीय माती नायट्रोजनमध्ये कमतरता, ८०% सेंद्रिय कार्बनमध्ये कमतरता.',
                    loss: '₹१२,०००/एकर/वर्ष',
                    solution: 'माती विश्लेषक तत्काळ खत सल्ला देते',
                },
                {
                    title: 'कीड आणि रोगांचे हल्ले',
                    desc: 'उशिरा कीड ओळखल्यामुळे दरवर्षी ₹९०,००० कोटींचे पीक नुकसान.',
                    loss: '₹२०,०००/एकर/वर्ष',
                    solution: '७–१४ दिवस आधी कीड अलर्ट',
                },
                {
                    title: 'सरकारी लाभ चुकवणे',
                    desc: 'जागरूकतेच्या अभावामुळे दरवर्षी ₹२.५ लाख कोटी अनुदान न वापरलेले राहते.',
                    loss: '₹८,०००/शेतकरी/वर्ष',
                    solution: 'योजना मॅचर पात्र अनुदान शोधते',
                },
            ],
        },

        // Modules
        modules: {
            heading: '🤖 सहा शक्तिशाली मॉड्युल्स',
            sub: 'विशिष्ट आव्हाने सोडवण्यासाठी संपूर्ण शेत व्यवस्थापन',
            m1title: '१. AI प्रश्न सहाय्यक',
            m1desc: 'मराठी, हिंदी, इंग्रजीत शेती प्रश्नांची उत्तरे. रोग आणि उत्पादनासाठी तत्काळ उपाय.',
            m1quote: '✅ "माझ्या गव्हाची पाने पिवळी झाली. AI ने नायट्रोजन सुचवले. युरिया टाकला, ₹२५,००० वाचले!"',
            m1btn: 'प्रश्न विचारा',
            m2title: '२. माती आरोग्य विश्लेषक',
            m2label1: 'N, P, K मूल्ये (kg/ha)',
            m2label2: 'माती pH',
            m2btn: 'माती विश्लेषण करा',
            m3title: '३. कीड अंदाज',
            m3label: 'प्रदेश निवडा',
            m3placeholder: 'जिल्हा निवडा...',
            m3opt1: 'विदर्भ (कापूस)',
            m3opt2: 'मराठवाडा (सोयाबीन)',
            m3opt3: 'नाशिक (द्राक्ष)',
            m4title: '४. कृषी तंत्रज्ञान सल्लागार',
            m4desc: 'शेत आकार, पीक आणि बजेटनुसार आधुनिक शेती साधने सुचवते.',
            m4placeholder: 'शेत आकार (एकर)',
            m4btn: 'सल्ला मिळवा',
            m5title: '५. नवीकरणीय ऊर्जा मार्गदर्शक',
            m5desc: 'सोलर पंप आकार, ROI गणना आणि PM-KUSUM अनुदान माहिती.',
            m5placeholder: 'मासिक वीज बिल (₹)',
            m5btn: 'ROI मोजा',
            m5solar: 'सोलर खर्च:',
            m5subsidy: 'PM-KUSUM अनुदान:',
            m5net: 'निव्वळ खर्च:',
            m5savings: 'वार्षिक बचत:',
            m5payback: 'परतफेड:',
            m5years: 'वर्षे',
            m6title: '६. योजना मॅचर',
            m6desc: 'प्रोफाइलनुसार शेतकऱ्यांना पात्र सरकारी योजना जुळवते.',
            m6opt1: 'लहान/सीमांत शेतकरी',
            m6opt2: 'सामान्य शेतकरी',
            m6btn: 'योजना शोधा',
        },

        // AiChat
        chat: {
            heading: 'AgroMitra AI ला विचारा',
            sub: 'Gemini 2.5 Flash द्वारे तुमचा २४/७ शेती सहाय्यक',
            welcome: 'नमस्कार! मी तुमचा शेती सहाय्यक आहे. कोणताही शेती प्रश्न विचारा.',
            placeholder: 'उदा., गहू पिकावर पिवळी पाने, उपाय काय? / लष्करी अळी कशी नियंत्रित करावी?',
            generating: 'Gemini द्वारे उत्तर तयार होत आहे...',
            offline: '🌱 AgroMitra AI: Gemini 2.5 Flash शी जोडण्यासाठी बॅकएंड सर्व्हर सुरू असल्याची खात्री करा.',
        },

        // Profit Calculator
        profit: {
            heading: 'नफा जास्तीत जास्त करण्याचे कॅल्क्युलेटर',
            sub: 'तुमचा अपेक्षित नफा मोजा आणि AgroMitra AI चा फायदा पाहा.',
            crop: 'पीक प्रकार',
            area: 'जमीन क्षेत्र (एकर)',
            yield: 'उत्पादन (क्विंटल/एकर)',
            price: 'भाव (₹/क्विंटल)',
            btn: 'नफा मोजा',
            base: 'अंदाजे मूळ नफा:',
            extra: 'AI द्वारे अतिरिक्त नफा (३५% सरासरी):',
            total: 'एकूण अपेक्षित नफा:',
            wheat: 'गहू', rice: 'तांदूळ', cotton: 'कापूस', soybean: 'सोयाबीन',
        },

        // Impact
        impact: {
            badge: '📊 वास्तविक प्रभाव',
            heading: 'हे का महत्त्वाचे आहे',
            sub: 'समस्येच्या व्याप्तीसाठी AI-आधारित समाधान आवश्यक आहे',
            quote: '"AgroMitra AI एक बहुभाषिक AI-आधारित अॅप आहे जे शेतकऱ्यांना पीक सल्ला, माती विश्लेषण, कीड अंदाज, आधुनिक शेती साधने, नवीकरणीय ऊर्जा आणि सरकारी योजनांमध्ये मदत करते."',
            quoteSub: 'एकत्र, आपण शेतीसाठी एक स्मार्ट भविष्य बनवू शकतो. 🙏',
            stats: [
                { value: '१४ कोटी+', label: 'लक्ष्य शेतकरी', sub: 'संपूर्ण भारतात' },
                { value: '₹२ लाख कोटी', label: 'न वापरलेले अनुदान', sub: 'दरवर्षी' },
                { value: '३०%', label: 'पीक नुकसान कमी करता येते', sub: 'AI अलर्टसह' },
                { value: '३५%', label: 'उत्पन्न वाढ', sub: 'AgroMitra AI सह सरासरी' },
            ],
        },

        // Roadmap
        roadmap: {
            badge: '🛣️ आमचा प्रवास',
            heading: 'प्रभावाचा रोडमॅप',
            sub: 'आम्ही लहान सुरुवात करतो, जलद तपासतो आणि संपूर्ण भारतात विस्तार करतो',
            current: '🟢 प्रगतीपथावर',
            upcoming: '⏳',
            bottom1: '🚀 लहान सुरुवात. संपूर्ण भारतात विस्तार.',
            bottom2: 'प्रत्येक महान क्रांती एका बीजाने सुरू होते. 🌱',
            phases: [
                { phase: 'टप्पा १', title: 'MVP लॉन्च', timeline: 'महिना १–२', items: ['AI चॅट (Gemini 2.5 Flash)', 'माती आरोग्य विश्लेषक', 'कीड अंदाज', 'मराठी + हिंदी + इंग्रजी'] },
                { phase: 'टप्पा २', title: 'पायलट — ५ जिल्हे', timeline: 'महिना ३–५', items: ['कृषी तंत्रज्ञान सल्लागार लाइव्ह', 'वास्तविक डेटासह योजना मॅचर', 'व्हॉइस इनपुट (मराठी)', '५०० शेतकरी पायलट कार्यक्रम'] },
                { phase: 'टप्पा ३', title: 'महाराष्ट्र विस्तार', timeline: 'महिना ६–९', items: ['नवीकरणीय ऊर्जा ROI लाइव्ह', 'हवामान API एकत्रीकरण', 'ऑफलाइन मोड (PWA)', '१०,०००+ सक्रिय शेतकरी'] },
                { phase: 'टप्पा ४', title: 'अखिल भारत विस्तार', timeline: 'महिना १०–१८', items: ['१०+ प्रादेशिक भाषा', 'सरकारी API एकत्रीकरण', '१० लाख+ शेतकरी', 'B2B: FPO आणि कृषी बँका'] },
            ],
        },

        // Footer
        footer: {
            tagline: 'कृत्रिम बुद्धिमत्तेसह १४ कोटी भारतीय शेतकऱ्यांना सक्षम करणे. स्मार्ट शेती निर्णय, २४/७.',
            quickLinks: 'द्रुत दुवे',
            ourModules: 'आमचे मॉड्युल्स',
            contact: 'आमच्याशी संपर्क करा',
            joinBtn: 'AgroMitra मध्ये सामील व्हा',
            closing: '🙏 धन्यवाद · शुक्रिया · Thank You — एकत्र, आपण शेतीसाठी एक समृद्ध भविष्य बनवू.',
            powered: 'Gemini 2.5 Flash द्वारे | © २०२५ AgroMitra AI',
            modules: ['🤖 AI प्रश्न सहाय्यक', '🌱 माती आरोग्य विश्लेषक', '🐛 कीड धोका अंदाज', '🚜 कृषी तंत्रज्ञान सल्लागार', '☀️ नवीकरणीय ऊर्जा मार्गदर्शक', '📋 योजना मॅचर'],
            links: [['problem', '🔴 समस्या'], ['modules', '🤖 ६ मॉड्युल्स'], ['aiChat', '💬 AI विचारा'], ['impact', '📊 प्रभाव'], ['roadmap', '🛣️ रोडमॅप']],
        },
    },
};

export default t;
