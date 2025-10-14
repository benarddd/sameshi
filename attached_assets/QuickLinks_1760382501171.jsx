import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Clock, BookOpen, Mail, Trophy, Users, Library } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickLinks() {
  const links = [
    { title: "Kalendari", icon: Calendar, url: createPageUrl("Kalendari"), color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40" },
    { title: "Orari", icon: Clock, url: createPageUrl("Orari"), color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40" },
    { title: "Klube", icon: Users, url: createPageUrl("Klube"), color: "from-green-500/10 to-teal-500/10 border-green-500/20 hover:border-green-500/40" },
    { title: "Biblioteka", icon: Library, url: createPageUrl("Biblioteka"), color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 hover:border-indigo-500/40" },
    { title: "Materiale", icon: BookOpen, url: createPageUrl("Materiale"), color: "from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-500/40" },
    { title: "Matura 2025", icon: Trophy, url: createPageUrl("MaturaShtetrore"), color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20 hover:border-yellow-500/40" },
    { title: "Kontakti", icon: Mail, url: createPageUrl("Kontakti"), color: "from-cyan-500/10 to-teal-500/10 border-cyan-500/20 hover:border-cyan-500/40" },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lidhje të <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shpejta</span>
        </h2>
        <p className="text-gray-400 text-lg">Akses i shpejtë në shërbimet kryesore</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={link.url}
              className={`relative block bg-gradient-to-br ${link.color} backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 group overflow-hidden`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700/50 transition-colors relative z-10 group-hover:shadow-lg"
              >
                <link.icon className="w-7 h-7 text-cyan-400" />
              </motion.div>
              <h3 className="text-white font-semibold text-lg relative z-10 group-hover:text-cyan-400 transition-colors">
                {link.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}