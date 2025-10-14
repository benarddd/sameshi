import { Globe, BookOpen, ClipboardList, Bell, Users, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Portali() {
  const portalSections = [
    {
      icon: BookOpen,
      title: "Notat",
      description: "Shiko notat dhe vlerësimet e tua",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
    },
    {
      icon: ClipboardList,
      title: "Detyrat",
      description: "Menaxho detyrat dhe projektet",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
    },
    {
      icon: Bell,
      title: "Njoftime",
      description: "Shiko njoftimet e fundit",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30"
    },
    {
      icon: Users,
      title: "Prezenca",
      description: "Gjendja e prezencës",
      color: "from-green-500/20 to-teal-500/20 border-green-500/30"
    },
    {
      icon: Settings,
      title: "Cilësimet",
      description: "Menaxho profilin tënd",
      color: "from-gray-500/20 to-gray-600/20 border-gray-500/30"
    },
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
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Globe className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portali <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shkollor</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Akses në informatat e nxënësve, notat, detyrat dhe më shumë
          </p>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-12 text-center"
        >
          <p className="text-gray-300">
            Për akses në portalin shkollor, ju lutemi kontaktoni sekretarinë e shkollës për të marrë kredencialet tuaja të hyrjes.
          </p>
        </motion.div>

        {/* Portal Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gradient-to-br ${section.color} backdrop-blur-sm rounded-2xl p-8 border hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
              >
                <section.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {section.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Keni Nevojë për Ndihmë?</h3>
          <p className="text-gray-300 mb-6">
            Për çdo pyetje ose problem me portalin, kontaktoni zyrën e sekretarisë.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sekretaria@gjimnazi-keta.edu.al"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Dërgo Email
            </a>
            <a
              href="tel:+355412345567"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Telefono
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
