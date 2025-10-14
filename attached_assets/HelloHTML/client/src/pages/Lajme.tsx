import { useState } from "react";
import { Link } from "wouter";
import { Bell, Calendar, Filter, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { createPageUrl } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = "urgent" | "event" | "academic" | "general";

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: Category;
  date: string;
  excerpt: string;
}

export default function Lajme() {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const announcements: Announcement[] = [
    {
      id: 1,
      title: "Fillimi i Semestrit të Ri",
      content: "Semestri i dytë fillon më 15 Janar. Të gjithë nxënësit duhet të jenë të pranishëm në orën 08:00. Ju lutemi të sillni materialet e nevojshme shkollore dhe të jeni të përgatitur për një semestër të suksesshëm.",
      category: "academic",
      date: "2025-01-10",
      excerpt: "Semestri i dytë fillon më 15 Janar. Të gjithë nxënësit duhet të jenë të pranishëm në orën 08:00."
    },
    {
      id: 2,
      title: "Konkursi Kombëtar i Matematikës",
      content: "Regjistrohu për konkursin kombëtar të matematikës që do të mbahet më 25 Janar në shkollën tonë. Një mundësi e shkëlqyer për të demonstruar aftësitë tuaja në matematikë dhe për të fituar çmime të vlefshme.",
      category: "event",
      date: "2025-01-08",
      excerpt: "Regjistrohu për konkursin kombëtar të matematikës që do të mbahet më 25 Janar në shkollën tonë."
    },
    {
      id: 3,
      title: "Pushime Dimërore",
      content: "Pushimet dimërore do të fillojnë më 20 Dhjetor dhe do të përfundojnë më 10 Janar. Ju urojmë festa të lumtura dhe pushime të këndshme me familjen tuaj.",
      category: "general",
      date: "2025-01-05",
      excerpt: "Pushimet dimërore do të fillojnë më 20 Dhjetor dhe do të përfundojnë më 10 Janar."
    }
  ];

  const filteredAnnouncements = filterCategory === "all" 
    ? announcements 
    : announcements.filter(a => a.category === filterCategory);

  const getCategoryColor = (category: Category): string => {
    const colors: Record<Category, string> = {
      urgent: "from-red-500/20 to-orange-500/20 border-red-500/30",
      event: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      academic: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      general: "from-gray-500/20 to-gray-600/20 border-gray-500/30",
    };
    return colors[category];
  };

  const getCategoryLabel = (category: Category): string => {
    const labels: Record<Category, string> = {
      urgent: "Urgjent",
      event: "Ngjarje",
      academic: "Akademik",
      general: "E Përgjithshme",
    };
    return labels[category];
  };

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lajme dhe <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Njoftime</span>
          </h1>
          <p className="text-gray-400 text-lg">Qëndro i informuar me ngjarjet dhe njoftimet e shkollës</p>
        </motion.div>

        {/* Filter */}
        <div className="mb-8 flex items-center gap-4">
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
              <SelectItem value="general">E Përgjithshme</SelectItem>
              <SelectItem value="urgent">Urgjent</SelectItem>
              <SelectItem value="event">Ngjarje</SelectItem>
              <SelectItem value="academic">Akademik</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Announcements List */}
        {filteredAnnouncements.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk ka lajme</h3>
            <p className="text-gray-400">Nuk ka lajme për kategorinë e zgjedhur</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -4 }}
              >
                <Link
                  href={createPageUrl(`NewsDetail?id=${announcement.id}`)}
                  className={`block bg-gradient-to-br ${getCategoryColor(announcement.category)} backdrop-blur-sm rounded-2xl p-8 border hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                          {getCategoryLabel(announcement.category)}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(announcement.date), "d MMMM yyyy")}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {announcement.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {announcement.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                        <span>Lexo më shumë</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
