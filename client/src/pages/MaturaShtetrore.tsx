import { motion } from "framer-motion";
import { Calendar, Book, FileText, Download, AlertCircle, Trophy, Clock, LucideIcon } from "lucide-react";

interface ImportantDate {
  date: string;
  event: string;
  icon: LucideIcon;
}

interface Subject {
  name: string;
  required: boolean;
  date: string;
}

interface Material {
  title: string;
  type: string;
  size: string;
}

export default function MaturaShtetrore() {
  const importantDates: ImportantDate[] = [
    { date: "15 Janar 2025", event: "Fillimi i Regjistrimit", icon: Calendar },
    { date: "28 Shkurt 2025", event: "Mbyllja e Regjistrimit", icon: Calendar },
    { date: "1-15 Qershor 2025", event: "Periudha e Provimeve", icon: Book },
    { date: "30 Qershor 2025", event: "Publikimi i Rezultateve", icon: Trophy },
  ];

  const subjects: Subject[] = [
    { name: "Gjuhë Shqipe", required: true, date: "2 Qershor 2025" },
    { name: "Matematikë", required: true, date: "5 Qershor 2025" },
    { name: "Gjuhë e Huaj (Anglisht)", required: true, date: "8 Qershor 2025" },
    { name: "Lëndë me Zgjedhje 1", required: false, date: "11 Qershor 2025" },
    { name: "Lëndë me Zgjedhje 2", required: false, date: "14 Qershor 2025" },
  ];

  const materials: Material[] = [
    { title: "Udhëzues për Maturën Shtetërore 2025", type: "PDF", size: "2.5 MB" },
    { title: "Programe Orientuese - Gjuhë Shqipe", type: "PDF", size: "1.8 MB" },
    { title: "Programe Orientuese - Matematikë", type: "PDF", size: "2.1 MB" },
    { title: "Ushtrime të Zgjidhura - Matematikë", type: "PDF", size: "3.4 MB" },
    { title: "Teste të Viteve të Mëparshme", type: "ZIP", size: "8.7 MB" },
  ];

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Trophy className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Matura <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shtetërore 2025</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Informacion i plotë për Provimin e Maturës Shtetërore të vitit akademik 2024-2025
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <AlertCircle className="w-6 h-6 text-orange-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Njoftim i Rëndësishëm</h3>
              <p className="text-gray-300 leading-relaxed">
                Regjistrimi për Maturën Shtetërore 2025 është i hapur deri më 28 Shkurt 2025. 
                Të gjithë nxënësit e klasës së 12-të duhet të regjistrohen në kohë. 
                Për informacion të detajuar, kontaktoni zyrën e sekretarisë.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Data të <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Rëndësishme</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4"
                >
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </motion.div>
                <p className="text-lg font-bold text-cyan-400 mb-2">{item.date}</p>
                <p className="text-gray-300">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exam Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Lëndët e <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Provimit</span>
          </h2>
          
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Book className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                      {subject.required && (
                        <span className="text-sm text-orange-400">Lëndë e Detyrueshme</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span>{subject.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Materials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Materiale <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Përgatitore</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {material.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {material.type} • {material.size}
                      </p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
