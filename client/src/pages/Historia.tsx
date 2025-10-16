import { motion } from "framer-motion";
import { History, Award, Users, BookOpen, TrendingUp, Globe, LucideIcon } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Achievement {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function Historia() {
  const milestones: Milestone[] = [
    { year: "1999", title: "Themelimi i Shkollës", description: "Gjimnazi Abdulla Keta u themelua me qëllimin për të ofruar edukim cilësor për të gjithë nxënësit." },
    { year: "2005", title: "Zgjerimi i Infrastrukturës", description: "U ndërtuan klasa të reja të, duke rritur kapacitetet edukative." },
    //{ year: "2010", title: "Zgjerimi i Infrastrukturës", description: "U ndërtuan laboratorë të rinj të shkencës dhe teknologjisë, duke rritur kapacitetet edukative." },
    //{ year: "2015", title: "Programi Ndërkombëtar", description: "Filloi bashkëpunimi me shkolla partnere në Evropë përmes programeve shkëmbimi studentor." },
    { year: "2020", title: "Transformimi Dixhital", description: "Implementimi i platformave digjitale dhe mësimit online, duke modernizuar procesin arsimor." },
    { year: "2025", title: "26 Vite Ekscelencë", description: "Kremtimi i 26 vjetorit të shkollës me mbi 2500 të diplomuar të suksesshëm." },
  ];

  const achievements: Achievement[] = [
    //{ icon: Award, value: "50+", label: "Çmime Kombëtare" },
    { icon: Users, value: "2500+", label: "Të Diplomuar" },
    //{ icon: BookOpen, value: "100+", label: "Projekte Kërkimore" },
    //{ icon: Globe, value: "15", label: "Partneritete Ndërkombëtare" },
  ];

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <History className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Historia <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Jonë</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Një udhëtim 26-vjeçar i përkushtuar ndaj ekscelencës akademike dhe formimit të brezave të rinj.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
              >
                <achievement.icon className="w-7 h-7 text-cyan-400" />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-teal-500/50"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Content */}
                <motion.div 
                  whileHover={{ scale: 1.03, x: index % 2 === 0 ? 10 : -10 }}
                  className="lg:w-5/12 w-full"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>

                {/* Center Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full border-4 border-[#071018] z-10 shadow-lg shadow-cyan-500/50"
                />

                {/* Empty Space */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        
      </div>
    </div>
  );
}
