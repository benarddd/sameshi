import { useState } from "react";
import { Clock, MapPin, User } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

interface Schedule {
  day: string;
  class_name: string;
  subject: string;
  time_start: string;
  time_end: string;
  teacher: string;
  room: string;
}

export default function Orari() {
  const [selectedDay, setSelectedDay] = useState("E Hënë");
  const [selectedClass, setSelectedClass] = useState("10A");
  
  const schedules: Schedule[] = [
    // 10A
    { day: "E Hënë", class_name: "10A", subject: "Matematikë", time_start: "08:00", time_end: "08:45", teacher: "Prof. A. Hoxha", room: "201" },
    { day: "E Hënë", class_name: "10A", subject: "Fizikë", time_start: "08:50", time_end: "09:35", teacher: "Prof. E. Mara", room: "305" },
    { day: "E Hënë", class_name: "10A", subject: "Gjuhë Shqipe", time_start: "09:40", time_end: "10:25", teacher: "Prof. M. Kola", room: "102" },
    { day: "E Martë", class_name: "10A", subject: "Anglisht", time_start: "08:00", time_end: "08:45", teacher: "Prof. L. Dervishi", room: "204" },
    { day: "E Martë", class_name: "10A", subject: "Kimi", time_start: "08:50", time_end: "09:35", teacher: "Prof. S. Nushi", room: "306" },
    
    // 10B
    { day: "E Hënë", class_name: "10B", subject: "Gjuhë Shqipe", time_start: "08:00", time_end: "08:45", teacher: "Prof. M. Kola", room: "103" },
    { day: "E Hënë", class_name: "10B", subject: "Matematikë", time_start: "08:50", time_end: "09:35", teacher: "Prof. A. Hoxha", room: "201" },
    { day: "E Martë", class_name: "10B", subject: "Histori", time_start: "08:00", time_end: "08:45", teacher: "Prof. R. Dedaj", room: "108" },
    
    // 10C
    { day: "E Hënë", class_name: "10C", subject: "Biologji", time_start: "08:00", time_end: "08:45", teacher: "Prof. L. Pepa", room: "307" },
    { day: "E Hënë", class_name: "10C", subject: "Anglisht", time_start: "08:50", time_end: "09:35", teacher: "Prof. L. Dervishi", room: "204" },
    
    // 11A
    { day: "E Hënë", class_name: "11A", subject: "Matematikë", time_start: "08:00", time_end: "08:45", teacher: "Prof. D. Saliaj", room: "202" },
    { day: "E Hënë", class_name: "11A", subject: "Letërsi", time_start: "08:50", time_end: "09:35", teacher: "Prof. F. Tafa", room: "104" },
    { day: "E Martë", class_name: "11A", subject: "Fizikë", time_start: "08:00", time_end: "08:45", teacher: "Prof. E. Mara", room: "305" },
    
    // 11B
    { day: "E Hënë", class_name: "11B", subject: "Kimi", time_start: "08:00", time_end: "08:45", teacher: "Prof. S. Nushi", room: "306" },
    { day: "E Hënë", class_name: "11B", subject: "Gjeografi", time_start: "08:50", time_end: "09:35", teacher: "Prof. A. Berberi", room: "109" },
    
    // 11C
    { day: "E Hënë", class_name: "11C", subject: "Gjuhë Shqipe", time_start: "08:00", time_end: "08:45", teacher: "Prof. M. Kola", room: "102" },
    { day: "E Hënë", class_name: "11C", subject: "Anglisht", time_start: "08:50", time_end: "09:35", teacher: "Prof. K. Duka", room: "205" },
    
    // 12A
    { day: "E Hënë", class_name: "12A", subject: "Matematikë", time_start: "08:00", time_end: "08:45", teacher: "Prof. D. Saliaj", room: "202" },
    { day: "E Hënë", class_name: "12A", subject: "Filozofi", time_start: "08:50", time_end: "09:35", teacher: "Prof. B. Xhaferi", room: "110" },
    { day: "E Martë", class_name: "12A", subject: "Fizikë", time_start: "08:00", time_end: "08:45", teacher: "Prof. E. Mara", room: "305" },
    
    // 12B
    { day: "E Hënë", class_name: "12B", subject: "Letërsi", time_start: "08:00", time_end: "08:45", teacher: "Prof. F. Tafa", room: "104" },
    { day: "E Hënë", class_name: "12B", subject: "Histori", time_start: "08:50", time_end: "09:35", teacher: "Prof. R. Dedaj", room: "108" },
    
    // 12C
    { day: "E Hënë", class_name: "12C", subject: "Biologji", time_start: "08:00", time_end: "08:45", teacher: "Prof. L. Pepa", room: "307" },
    { day: "E Hënë", class_name: "12C", subject: "Kimi", time_start: "08:50", time_end: "09:35", teacher: "Prof. S. Nushi", room: "306" },
  ];

  const days = ["E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte"];
  const classes = ["10A", "10B", "10C", "11A", "11B", "11C", "12A", "12B", "12C"];
  
  const filteredSchedules = schedules
    .filter(s => s.day === selectedDay && s.class_name === selectedClass)
    .sort((a, b) => a.time_start.localeCompare(b.time_start));

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Orari <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mësimor</span>
          </h1>
          <p className="text-gray-400 text-lg">Shiko orarin e plotë të nxënësve dhe mësuesve</p>
        </motion.div>

        {/* Class Selector */}
        <div className="mb-6 flex justify-center">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-64 bg-gray-800/50 border-gray-700 text-white h-12 text-lg">
              <SelectValue placeholder="Zgjidhni klasën" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {classes.map((cls) => (
                <SelectItem key={cls} value={cls} className="text-white">
                  Klasa {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Day Tabs */}
        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-gray-800/50 border border-gray-700">
            {days.map((day) => (
              <TabsTrigger 
                key={day} 
                value={day}
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-gray-400"
              >
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Schedule */}
        {filteredSchedules.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk ka orë</h3>
            <p className="text-gray-400">Nuk ka orë të planifikuara për këtë ditë</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSchedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, x: 5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 rounded-xl p-3 text-center min-w-[80px]">
                    <div className="text-lg font-bold text-cyan-400">
                      {schedule.time_start}
                    </div>
                    <div className="text-sm text-gray-400">
                      {schedule.time_end}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{schedule.subject}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        {schedule.teacher}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        Dhoma {schedule.room}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
