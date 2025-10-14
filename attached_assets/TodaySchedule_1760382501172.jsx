import React, { useEffect, useState } from "react";
import { Clock, MapPin, Zap, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { sq } from "date-fns/locale";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function TodaySchedule() {
  const today = format(new Date(), "EEEE", { locale: sq });
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const todayClasses = [
    { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Prof. A. Hoxha", room: "201" },
    { time: "08:50 - 09:35", subject: "Fizikë", teacher: "Prof. E. Mara", room: "305" },
    { time: "09:40 - 10:25", subject: "Gjuhë Shqipe", teacher: "Prof. M. Kola", room: "102" },
    { time: "10:40 - 11:25", subject: "Anglisht", teacher: "Prof. L. Dervishi", room: "204" },
  ];

  const isCurrentClass = (timeRange) => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const [start] = timeRange.split(" - ");
    const [startHour, startMin] = start.split(":").map(Number);
    const startMinutes = startHour * 60 + startMin;
    return Math.abs(now - startMinutes) < 45;
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
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
            >
              <Clock className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-white">Orari i Sotëm</h2>
              <p className="text-sm text-gray-400">{today}</p>
            </div>
          </div>
          <Link 
            to={createPageUrl("Orari")}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
          >
            Shiko të plotë
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-3">
          {todayClasses.map((classItem, index) => {
            const isCurrent = isCurrentClass(classItem.time);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`relative rounded-xl p-5 border transition-all duration-300 ${
                  isCurrent 
                    ? "bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/30 shadow-lg shadow-cyan-500/10" 
                    : "bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/20"
                }`}
              >
                {isCurrent && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-r-full"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-semibold ${isCurrent ? "text-cyan-300" : "text-cyan-400"}`}>
                        {classItem.time}
                      </span>
                      {isCurrent && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-1 text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full"
                        >
                          <Zap className="w-3 h-3" />
                          Në progres
                        </motion.span>
                      )}
                    </div>
                    <h3 className={`font-semibold text-lg mb-1 transition-colors ${
                      isCurrent ? "text-white" : "text-gray-200"
                    }`}>
                      {classItem.subject}
                    </h3>
                    <p className="text-sm text-gray-400">{classItem.teacher}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {classItem.room}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}