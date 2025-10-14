import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const events = [
    { 
      id: 1, 
      title: "Konkursi Kombëtar i Matematikës", 
      date: "2025-01-25", 
      time: "09:00", 
      location: "Salla Kryesore",
      type: "academic"
    },
    { 
      id: 2, 
      title: "Ekspozita e Arteve", 
      date: "2025-02-05", 
      time: "14:00", 
      location: "Salla e Arteve",
      type: "cultural"
    },
    { 
      id: 3, 
      title: "Turne Futbolli", 
      date: "2025-02-12", 
      time: "10:00", 
      location: "Fusha Sportive",
      type: "sports"
    },
  ];

  const getEventColor = (type) => {
    const colors = {
      academic: "from-blue-500/10 to-cyan-500/10 border-blue-500/30",
      cultural: "from-purple-500/10 to-pink-500/10 border-purple-500/30",
      sports: "from-green-500/10 to-teal-500/10 border-green-500/30",
    };
    return colors[type] || colors.academic;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      
      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 group-hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
            >
              <Calendar className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-white">Ngjarje të Ardhshme</h2>
              <p className="text-sm text-gray-400">Aktivitete dhe evenimente</p>
            </div>
          </div>
          <Link 
            to={createPageUrl("Kalendari")}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            Shiko të gjitha →
          </Link>
        </div>

        <div className="space-y-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`bg-gradient-to-br ${getEventColor(event.type)} backdrop-blur-sm rounded-xl p-5 border transition-all duration-300`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {format(new Date(event.date), "d MMM yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}