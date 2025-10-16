import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    
    {
      question: "Cilat janë orët e punës së sekretarisë?",
      answer: "Ne proces"
    },

    {
      question: "A ka mundësi për aktivitete jashtëshkollore?",
      answer: "Po, absolutisht! Shkolla jonë ofron një gamë të gjerë klubesh dhe aktivitetesh jashtëshkollore, duke përfshirë klube sportive, artistike, shkencore, dhe teknologjike. Nxenesi dhe prindi duhet te firmos deklaraten qe eshte dakord  qe femija te jete pjesmarres"
    },
    {
      question: "Si funksionon sistemi i vlerësimit?",
      answer: "Sistemi ynë i vlerësimit bazohet në notën nga 4 deri në 10. Vlerësimet bëhen nëpërmjet provimeve, testeve, projekteve, dhe pjesëmarrjes në klasë. Çdo semestër ka dy periudha vlerësimi, dhe nota finale përcaktohet nga mesatarja e të gjitha komponentëve."
    },
    {
      question: "Cilat janë kërkesat për Maturën Shtetërore?",
      answer: "Për të marrë pjesë në Maturën Shtetërore, nxënësit duhet të kenë përfunduar me sukses të gjitha lëndët e detyrueshme të klasës së 12-të. Provimi përfshin tre lëndë të detyrueshme (Gjuhë Shqipe, Matematikë, dhe Gjuhë e Huaj) plus nje lëndë me zgjedhje. Regjistrimi zakonisht fillon në Janar."
    },
    
    {
      question: "Si mund të kontaktoj një mësues specifik?",
      answer: "Mund të kontaktoni mësuesit përmes email-it zyrtar të shkollës ose duke kërkuar një takim nëpërmjet sekretarisë."
    },
    {
      question: "Cilat janë rregullat për veshjen në shkollë?",
      answer: "Shkolla jonë ka një kod të veshjes që kërkon veshje të pastër, të përshtatshme dhe profesionale. Kodi i veshjes mund ta gjeni ketu ne faqen e shkolles"
    }
  ];

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pyetje të <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shpeshta</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Gjeni përgjigje për pyetjet më të zakonshme
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Nuk gjetët përgjigjen?
          </h3>
          <p className="text-gray-300 mb-6">
            Mos hezitoni të na kontaktoni direkt për çdo pyetje tjetër
          </p>
          <motion.a
            href="/Kontakti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Kontaktoni
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
