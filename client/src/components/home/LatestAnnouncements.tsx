import { Bell, Calendar, AlertTriangle, PartyPopper, BookOpen, ChevronRight, LucideIcon } from "lucide-react";
import { format } from "date-fns";
import { Link } from "wouter";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";

type Category = "urgent" | "event" | "academic" | "general";

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: Category;
  date: string;
}

export default function LatestAnnouncements() {
  const announcements: Announcement[] = [
    {
      id: 1,
      title: "Fillimi i Semestrit të Ri",
      content: "Semestri i dytë fillon më 15 Janar. Të gjithë nxënësit duhet të jenë të pranishëm në orën 08:00.",
      category: "academic",
      date: "2025-01-10"
    },
    {
      id: 2,
      title: "Konkursi Kombëtar i Matematikës",
      content: "Regjistrohu për konkursin kombëtar të matematikës që do të mbahet më 25 Janar në shkollën tonë.",
      category: "event",
      date: "2025-01-08"
    }
  ];

  const getCategoryColor = (category: Category) => {
    const colors = {
      urgent: "from-red-500/10 to-orange-500/10 border-red-500/30",
      event: "from-purple-500/10 to-pink-500/10 border-purple-500/30",
      academic: "from-blue-500/10 to-cyan-500/10 border-blue-500/30",
      general: "from-gray-500/10 to-gray-600/10 border-gray-500/30",
    };
    return colors[category] || colors.general;
  };

  const getCategoryIcon = (category: Category): LucideIcon => {
    const icons = {
      urgent: AlertTriangle,
      event: PartyPopper,
      academic: BookOpen,
      general: Bell,
    };
    return icons[category] || Bell;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
          >
            <Bell className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-white">Lajme të Fundit</h2>
            <p className="text-sm text-gray-400">Njoftime dhe ngjarje</p>
          </div>
        </div>
        <Link 
          href={createPageUrl("Lajme")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group"
        >
          Shiko të gjitha
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {announcements.map((announcement, index) => {
        const CategoryIcon = getCategoryIcon(announcement.category);
        const isUrgent = announcement.category === "urgent";
        
        return (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className={`relative bg-gradient-to-br ${getCategoryColor(announcement.category)} backdrop-blur-xl rounded-2xl p-6 border group-hover:border-cyan-500/30 transition-all duration-300 overflow-hidden`}>
              {isUrgent && (
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
              
              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isUrgent ? "bg-red-500/20" : "bg-cyan-500/20"
                  }`}
                >
                  <CategoryIcon className={`w-6 h-6 ${isUrgent ? "text-red-400" : "text-cyan-400"}`} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {announcement.content}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(announcement.date), "d MMMM yyyy")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
