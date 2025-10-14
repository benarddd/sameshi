import { motion } from "framer-motion";
import { BookOpen, Shield, Users, Clock, Clipboard, Award, AlertTriangle, LucideIcon } from "lucide-react";

interface Section {
  icon: LucideIcon;
  title: string;
  content: string[];
}

export default function Rregullorja() {
  const sections: Section[] = [
    {
      icon: Users,
      title: "Të Drejtat dhe Detyrimet e Nxënësve",
      content: [
        "Çdo nxënës ka të drejtë për një edukim cilësor dhe të barabartë",
        "Nxënësit kanë të drejtë të shprehin mendimin e tyre në mënyrë të respektueshme",
        "Nxënësit duhet të respektojnë mësuesit, stafin dhe bashkënxënësit",
        "Pjesëmarrja në aktivitetet mësimore është e detyrueshme",
        "Nxënësit kanë të drejtë të ankohen për çështje që lidhen me shkollën"
      ]
    },
    {
      icon: Clock,
      title: "Orari dhe Prezencat",
      content: [
        "Mësimet fillojnë në orën 08:00 dhe përfundojnë në orën 14:00",
        "Vonesë mbi 15 minuta konsiderohet si mungesë",
        "Mungesat duhet të justifikohen brenda 3 ditëve",
        "Mbi 20% mungesë të pajustifikuara mund të çojnë në vlerësim negativ",
        "Nxënësit duhet të jenë të pranishëm në të gjitha provimet"
      ]
    },
    {
      icon: Clipboard,
      title: "Vlerësimi Akademik",
      content: [
        "Vlerësimi bëhet me nota nga 4 deri në 10",
        "Nota 5 konsiderohet kalim minimal",
        "Çdo semestër ka dy periudha vlerësimi",
        "Nota finale përcaktohet nga mesatarja e të gjitha vlerësimeve",
        "Provimi i maturës shtetërore është i detyrueshëm për klasën e 12-të"
      ]
    },
    {
      icon: Shield,
      title: "Sjellja dhe Disiplina",
      content: [
        "Duhet të respektohet pronë shkollore dhe mjetet mësimore",
        "Përdorimi i telefonave celularë lejohet vetëm gjatë pushimeve",
        "Ndalimi i plotë i dhunës fizike dhe verbale",
        "Respektimi i kodit të veshjes së shkollës",
        "Konsumimi i duhanit dhe substancave të tjera është i ndaluar rreptësisht"
      ]
    },
    {
      icon: Award,
      title: "Shpërblimet",
      content: [
        "Nxënësit me rezultate të shkëlqyera njëhen publikisht",
        "Dhënia e çertifikatave për sukses akademik",
        "Mundësi pjesëmarrje në konkurse kombëtare dhe ndërkombëtare",
        "Bursa për nxënësit me rezultate të larta",
        "Njohje për kontribut në aktivitete jashtëshkollore"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Masat Disiplinore",
      content: [
        "Paralajmërim me gojë për shkelje të vogla",
        "Paralajmërim me shkrim për shkelje të përsëritura",
        "Pezullim i përkohshëm për shkelje serioze",
        "Përjashtim nga shkolla për shkelje të rënda",
        "Të gjitha masat disiplinore regjistrohen në dosjen e nxënësit"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <BookOpen className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rregullorja e <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shkollës</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Rregullat dhe normat që udhëheqin jetën shkollore dhe sjelljen e të gjithë anëtarëve të komunitetit tonë.
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-3">Rëndësia e Rregullores</h3>
          <p className="text-gray-300 leading-relaxed">
            Rregullorja e shkollës është hartuar për të garantuar një mjedis të sigurt, të respektuar dhe produktiv 
            për të gjithë. Të gjithë nxënësit, prindërit dhe stafi janë të detyruar ta lexojnë dhe ta respektojnë këtë rregullore.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <section.icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    </span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Shkarko Rregulloren e Plotë</h3>
          <p className="text-gray-300 mb-6">
            Për versionin e plotë të rregullores së shkollës, shkarko dokumentin PDF më poshtë.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <BookOpen className="w-5 h-5" />
            Shkarko Rregulloren (PDF)
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
