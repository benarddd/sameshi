import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string;
  color: string;
}

export default function ContactInfo() {
  const contactItems: ContactItem[] = [
    {
      icon: MapPin,
      title: "Adresa",
      content: "Rruga Bashkim Kodra, Tiranë, Albania, Nr. 25\nTiranë, Shqipëri",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Mail,
      title: "Email",
      content: "abdullaketa@yahoo.com",
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Clock,
      title: "Orari",
      content: "E Hënë - E Premte\n08:00 - 14:00",
      color: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all`}
            >
              <item.icon className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
