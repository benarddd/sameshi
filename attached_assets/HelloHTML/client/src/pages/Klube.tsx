import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Users, Trophy, Palette, Microscope, Code, Globe2, MessageSquare, MapPin, Calendar, Filter, ChevronRight, LucideIcon } from "lucide-react";
import { createPageUrl } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = "sports" | "arts" | "science" | "technology" | "cultural" | "debate";

interface Club {
  id: number;
  name: string;
  description: string;
  category: Category;
  meeting_schedule: string;
  location: string;
  coordinator: string;
  member_count: number;
}

export default function Klube() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const clubs: Club[] = [
    { id: 1, name: "Klubi i Futbollit", description: "Trajnime dhe ndeshje të rregullta, pjesëmarrje në turne lokale dhe kombëtare", category: "sports", meeting_schedule: "E Hënë, E Mërkurë, E Premte 15:00-17:00", location: "Fusha Sportive", coordinator: "Prof. Alban Gashi", member_count: 25 },
    { id: 2, name: "Klubi i Arteve", description: "Pikturë, skulpturë dhe art digjital. Organizimi i ekspozitave dhe konkurseve artistike", category: "arts", meeting_schedule: "E Martë, E Enjte 14:00-16:00", location: "Salla e Arteve", coordinator: "Prof. Mirela Shehu", member_count: 18 },
    { id: 3, name: "Klubi i Shkencave", description: "Eksperimente shkencore, projekte kërkimore dhe pjesëmarrje në panairin shkencor", category: "science", meeting_schedule: "E Mërkurë 15:00-17:00", location: "Laboratori i Shkencave", coordinator: "Prof. Elira Mara", member_count: 22 },
    { id: 4, name: "Klubi i Teknologjisë", description: "Programim, robotikë dhe zhvillim i projekteve teknologjike novatore", category: "technology", meeting_schedule: "E Premte 15:00-18:00", location: "Laboratori i Kompjuterit", coordinator: "Prof. Arben Hoxha", member_count: 30 },
  ];

  const filteredClubs = filterCategory === "all" 
    ? clubs 
    : clubs.filter(c => c.category === filterCategory);

  const getCategoryIcon = (category: Category): LucideIcon => {
    const icons: Record<Category, LucideIcon> = {
      sports: Trophy,
      arts: Palette,
      science: Microscope,
      technology: Code,
      cultural: Globe2,
      debate: MessageSquare,
    };
    return icons[category] || Users;
  };

  const getCategoryColor = (category: Category): string => {
    const colors: Record<Category, string> = {
      sports: "from-green-500/20 to-teal-500/20 border-green-500/30",
      arts: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      science: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      technology: "from-orange-500/20 to-red-500/20 border-orange-500/30",
      cultural: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
      debate: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
    };
    return colors[category] || "from-gray-500/20 to-gray-600/20 border-gray-500/30";
  };

  const getCategoryLabel = (category: Category): string => {
    const labels: Record<Category, string> = {
      sports: "Sport",
      arts: "Arte",
      science: "Shkencë",
      technology: "Teknologji",
      cultural: "Kulturore",
      debate: "Debat",
    };
    return labels[category] || category;
  };

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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Users className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Klubet <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Tona</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Bashkohu me klubet e shkollës dhe zhvillo interesat e tua jashtë orëve të mësimit.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mb-8 flex items-center gap-4 justify-center">
          <div className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filtro sipas:</span>
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48 bg-gray-800/50 border-gray-700 text-white">
              <SelectValue placeholder="Kategoria" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">Të Gjitha</SelectItem>
              <SelectItem value="sports">Sport</SelectItem>
              <SelectItem value="arts">Arte</SelectItem>
              <SelectItem value="science">Shkencë</SelectItem>
              <SelectItem value="technology">Teknologji</SelectItem>
              <SelectItem value="cultural">Kulturore</SelectItem>
              <SelectItem value="debate">Debat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clubs Grid */}
        {filteredClubs.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk ka klube</h3>
            <p className="text-gray-400">Nuk ka klube për kategorinë e zgjedhur</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClubs.map((club, index) => {
              const CategoryIcon = getCategoryIcon(club.category);
              
              return (
                <motion.div
                  key={club.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(6, 182, 212, 0.2)" }}
                >
                  <Link
                    href={createPageUrl(`ClubDetail?id=${club.id}`)}
                    className={`block bg-gradient-to-br ${getCategoryColor(club.category)} backdrop-blur-sm rounded-2xl p-6 border hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full`}
                  >
                    {/* Club Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                    >
                      <CategoryIcon className="w-8 h-8 text-cyan-400" />
                    </motion.div>

                    {/* Category Badge */}
                    <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full mb-4">
                      {getCategoryLabel(club.category)}
                    </span>

                    {/* Club Info */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {club.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {club.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 border-t border-gray-700/50 pt-4 mt-4">
                      {club.meeting_schedule && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          {club.meeting_schedule}
                        </div>
                      )}
                      {club.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          {club.location}
                        </div>
                      )}
                      {club.member_count && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-white font-semibold">{club.member_count}</span>
                          <span className="text-gray-400">anëtarë aktivë</span>
                        </div>
                      )}
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-cyan-400 mt-4 group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">Mëso më shumë</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
