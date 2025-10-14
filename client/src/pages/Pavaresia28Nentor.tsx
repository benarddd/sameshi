import { motion } from "framer-motion";
import { Calendar, Flag, Heart, Star } from "lucide-react";

export default function Pavaresia28Nentor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000]">
      {/* Animated background with Albanian flag colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-yellow-600/10 rounded-full blur-3xl"
        />

        {/* Floating golden particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Flag className="w-5 h-5 text-red-500" />
            <span className="text-red-400 font-semibold">28 Nëntor 1912</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Dita e{" "}
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
              Pavarësisë
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Festojmë me krenari 113 vjet pavarësi të kombit tonë
          </p>
        </motion.div>

        {/* Eagle Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-full blur-2xl opacity-30"
            />
            <div className="relative w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50">
              <span className="text-6xl">🦅</span>
            </div>
          </div>
        </motion.div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Flag,
              title: "Flamuri Kombëtar",
              description: "Shqiponja dykrenare në sfond të kuq simbolizon krenarin tonë kombëtare",
              color: "red"
            },
            {
              icon: Heart,
              title: "Uniteti Kombëtar",
              description: "Bashkë festojmë lirinë dhe pavarësinë që trashëgoi brezat tanë",
              color: "yellow"
            },
            {
              icon: Star,
              title: "Ardhmëria e Ndritur",
              description: "Duke ndërtuar një të ardhme më të mirë për brezat e rinj",
              color: "red"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: item.color === "red" 
                  ? "0 20px 60px rgba(239, 68, 68, 0.3)" 
                  : "0 20px 60px rgba(234, 179, 8, 0.3)"
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                item.color === "red" 
                  ? "from-red-600/20 to-red-800/20" 
                  : "from-yellow-600/20 to-yellow-800/20"
              } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 group-hover:border-red-500/30 transition-all duration-300">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${
                    item.color === "red" 
                      ? "from-red-600/30 to-red-800/30" 
                      : "from-yellow-600/30 to-yellow-800/30"
                  } rounded-xl flex items-center justify-center mb-6`}
                >
                  <item.icon className={`w-7 h-7 ${
                    item.color === "red" ? "text-red-400" : "text-yellow-400"
                  }`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Historical Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-yellow-600/20 to-red-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/50 backdrop-blur-2xl border border-red-500/20 rounded-3xl p-12 text-center">
              <div className="text-6xl text-yellow-400 mb-4">"</div>
              <p className="text-2xl md:text-3xl text-white font-light italic mb-6 leading-relaxed">
                Shqipëria është e lirë dhe e pavarur!
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500"></div>
                <p className="text-red-400 font-semibold">Ismail Qemali, 28 Nëntor 1912</p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Celebration Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 rounded-2xl px-8 py-4">
            <Calendar className="w-6 h-6 text-yellow-400" />
            <p className="text-lg text-gray-200">
              <span className="font-bold text-red-400">Gjimnazi Abdulla Keta</span> uron të gjithë 
              <span className="font-bold text-yellow-400"> Ditën e Pavarësisë!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
