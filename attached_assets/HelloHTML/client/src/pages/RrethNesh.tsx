import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Lightbulb, LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function RrethNesh() {
  const values: Value[] = [
    { icon: Heart, title: "Përkushtim", description: "Jemi të përkushtuar ndaj suksesit të çdo nxënësi" },
    { icon: Award, title: "Ekscelencë", description: "Përpiqemi për të arritur standarde të larta në të gjitha aspektet" },
    { icon: Users, title: "Komunitet", description: "Ndërtojmë një komunitet mbështetës dhe gjithëpërfshirës" },
    { icon: Lightbulb, title: "Inovacion", description: "Nxisim kreativitetin dhe të menduarit kritik" },
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Nxënës" },
    { number: "40+", label: "Mësues" },
    { number: "25+", label: "Vite Përvojë" },
    { number: "95%", label: "Shkallë Suksesi" },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rreth <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Nesh</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Njihuni me misionin, vizionin dhe vlerat që na udhëheqin në rrugën tonë drejt ekscelencës edukative.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm rounded-2xl p-8"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6"
            >
              <Target className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">Misioni Ynë</h2>
            <p className="text-gray-300 leading-relaxed">
              Misioni ynë është të ofrojmë një edukim cilësor që përgatit nxënësit për sfidat e shekullit të 21-të. 
              Ne synojmë të zhvillojmë jo vetëm njohuritë akademike, por edhe karakterin, kreativitetin dhe mendjen kritike të çdo nxënësi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-8"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6"
            >
              <Eye className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">Vizioni Ynë</h2>
            <p className="text-gray-300 leading-relaxed">
              Vizioni ynë është të jemi një institucion udhëheqës në arsim, i njohur për inovacionin, përsosmërinë akademike 
              dhe kontributin tonë në formimin e qytetarëve të përgjegjshëm dhe të suksesshëm.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Vlerat <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Tona</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4"
                >
                  <value.icon className="w-7 h-7 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Në <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Numra</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
