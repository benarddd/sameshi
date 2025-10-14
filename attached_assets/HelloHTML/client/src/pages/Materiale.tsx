import { useState } from "react";
import { BookOpen, Download, Calendar, Filter } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Material {
  id: number;
  title: string;
  subject: string;
  class_level: string;
  description: string;
  file_url: string;
  upload_date: string;
}

export default function Materiale() {
  const [filterSubject, setFilterSubject] = useState<string>("all");
  
  const materials: Material[] = [
    { id: 1, title: "Ushtrime Matematike - Klasa 10", subject: "Matematikë", class_level: "10", description: "Përmbledhje e ushtrimore për matematikën e klasës 10", file_url: "#", upload_date: "2025-01-08" },
    { id: 2, title: "Nota Fizike - Lëvizja", subject: "Fizikë", class_level: "10", description: "Materialet mbi lëvizjen dhe ligjet e Newton-it", file_url: "#", upload_date: "2025-01-07" },
    { id: 3, title: "Letërsia Shqiptare - Romantizmi", subject: "Gjuhë Shqipe", class_level: "11", description: "Studim mbi romantizmin në letërsinë shqiptare", file_url: "#", upload_date: "2025-01-05" },
  ];

  const subjects = Array.from(new Set(materials.map(m => m.subject)));
  
  const filteredMaterials = filterSubject === "all" 
    ? materials 
    : materials.filter(m => m.subject === filterSubject);

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Materiale <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Mësimore</span>
          </h1>
          <p className="text-gray-400 text-lg">Akses në materiale dhe burime edukative</p>
        </motion.div>

        {/* Filter */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filtro sipas:</span>
          </div>
          <Select value={filterSubject} onValueChange={setFilterSubject}>
            <SelectTrigger className="w-48 bg-gray-800/50 border-gray-700 text-white">
              <SelectValue placeholder="Lënda" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">Të Gjitha</SelectItem>
              {subjects.map(subject => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Materials Grid */}
        {filteredMaterials.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk ka materiale</h3>
            <p className="text-gray-400">Nuk ka materiale për lëndën e zgjedhur</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {material.subject}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {material.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {material.description}
                </p>

                <div className="flex items-center justify-between text-sm border-t border-gray-700/50 pt-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(material.upload_date), "d MMM yyyy")}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Shkarko
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
