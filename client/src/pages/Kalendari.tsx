import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { sq } from "date-fns/locale";
import { motion } from "framer-motion";

type EventType = "academic" | "cultural" | "sports" | "meeting" | "holiday";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
}

export default function Kalendari() {
  const events: Event[] = [
    { id: 1, title: "Fillimi i Semestrit të Ri", description: "Fillimi zyrtar i semestrit të dytë akademik", date: "2025-01-15", time: "08:00", location: "Të gjitha klasat", type: "academic" },
    { id: 2, title: "Konkursi Kombëtar i Matematikës", description: "Konkursi vjetor kombëtar për nxënësit e shkollës së mesme", date: "2025-01-25", time: "09:00", location: "Salla Kryesore", type: "academic" },
    { id: 3, title: "Dita e Pavarësisë", description: "Kremtimi i Ditës së Pavarësisë së Shqipërisë", date: "2025-11-28", time: "10:00", location: "Oborri i Shkollës", type: "holiday" },
  ];

  const getEventTypeColor = (type: EventType): string => {
    const colors: Record<EventType, string> = {
      academic: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      cultural: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      sports: "from-green-500/20 to-teal-500/20 border-green-500/30",
      meeting: "from-orange-500/20 to-red-500/20 border-orange-500/30",
      holiday: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
    };
    return colors[type];
  };

  const getEventTypeLabel = (type: EventType): string => {
    const labels: Record<EventType, string> = {
      academic: "Akademik",
      cultural: "Kulturore",
      sports: "Sportive",
      meeting: "Mbledhje",
      holiday: "Festë",
    };
    return labels[type];
  };

  const eventsByMonth = events.reduce<Record<string, Event[]>>((acc, event) => {
    const month = format(new Date(event.date), "MMMM yyyy", { locale: sq });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kalendari <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shkollor</span>
          </h1>
          <p className="text-gray-400 text-lg">Ngjarje dhe aktivitete të planifikuara</p>
        </motion.div>

        {Object.keys(eventsByMonth).length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <CalendarIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk ka ngjarje</h3>
            <p className="text-gray-400">Nuk ka ngjarje të planifikuara për momentin</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
              <div key={month}>
                <h2 className="text-2xl font-bold text-white mb-6 capitalize">{month}</h2>
                <div className="space-y-4">
                  {monthEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.01, y: -4 }}
                      className={`bg-gradient-to-br ${getEventTypeColor(event.type)} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/20 rounded-xl p-4 flex flex-col items-center justify-center min-w-[80px]">
                          <div className="text-3xl font-bold text-cyan-400">
                            {format(new Date(event.date), "d")}
                          </div>
                          <div className="text-sm text-gray-400">
                            {format(new Date(event.date), "MMM", { locale: sq })}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full mb-3">
                            {getEventTypeLabel(event.type)}
                          </span>
                          
                          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                          <p className="text-gray-300 mb-4">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-cyan-400" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2">
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
