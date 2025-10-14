import { motion } from "framer-motion";
import { Users, Award, Target, Calendar, Mail, MessageSquare, User, Clock, MapPin, LucideIcon } from "lucide-react";

interface SenateMember {
  name: string;
  role: string;
  class: string;
  email: string;
}

interface Responsibility {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Meeting {
  date: string;
  time: string;
  topic: string;
  location: string;
}

export default function Senati() {
  const senateMembers: SenateMember[] = [
    { name: "Andi Malaj", role: "Kryetar i Senatit", class: "12A", email: "andi.malaj@student.gjimnazi-keta.edu.al" },
    { name: "Sara Hoxha", role: "Zëvendës Kryetar", class: "12B", email: "sara.hoxha@student.gjimnazi-keta.edu.al" },
    { name: "Ergis Duka", role: "Sekretar", class: "11A", email: "ergis.duka@student.gjimnazi-keta.edu.al" },
    { name: "Elisa Marku", role: "Anëtare", class: "11C", email: "elisa.marku@student.gjimnazi-keta.edu.al" },
    { name: "Klajdi Shala", role: "Anëtar", class: "10B", email: "klajdi.shala@student.gjimnazi-keta.edu.al" },
    { name: "Anxhela Kola", role: "Anëtare", class: "10A", email: "anxhela.kola@student.gjimnazi-keta.edu.al" },
  ];

  const responsibilities: Responsibility[] = [
    {
      icon: Target,
      title: "Përfaqësimi i Nxënësve",
      description: "Senati përfaqëson interesat dhe shqetësimet e të gjithë nxënësve para administrimit të shkollës."
    },
    {
      icon: MessageSquare,
      title: "Komunikim me Drejtimin",
      description: "Mban takime të rregullta me drejtimin e shkollës për të diskutuar çështje që preokupojnë nxënësit."
    },
    {
      icon: Calendar,
      title: "Organizimi i Aktiviteteve",
      description: "Organizon dhe mbikëqyr aktivitete sociale, kulturore dhe sportive për komunitetin shkollor."
    },
    {
      icon: Award,
      title: "Promovimi i Ekscelencës",
      description: "Inkurajon dhe njeh arritjet e nxënësve në të gjitha fushat akademike dhe jashtëshkollore."
    },
  ];

  const upcomingMeetings: Meeting[] = [
    { date: "2025-01-20", time: "15:00", topic: "Diskutim rreth aktiviteteve të muajit Shkurt", location: "Salla e Mbledhjeve" },
    { date: "2025-02-03", time: "15:00", topic: "Planifikimi i festës së Pavarësisë", location: "Salla e Mbledhjeve" },
    { date: "2025-02-17", time: "15:00", topic: "Propozime për përmirësimin e mjedisit shkollor", location: "Salla e Mbledhjeve" },
  ];

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
            Senati i <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shkollës</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Zëri i nxënësve - duke përfaqësuar, duke dëgjuar dhe duke vepruar për komunitetin tonë shkollor.
          </p>
        </motion.div>

        {/* About Senate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Çfarë është Senati i Shkollës?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Senati i Shkollës është organi përfaqësues i nxënësve të Gjimnazit Abdulla Keta. 
            Anëtarët e senatit zgjidhen demokratikisht nga vetë nxënësit dhe shërbejnë si lidhja midis 
            trupit studentor dhe administrimit të shkollës.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Misioni ynë është të sigurojmë që çdo zë të dëgjohet, të promovojmë një mjedis pozitiv dhe 
            gjithëpërfshirës, dhe të organizojmë aktivitete që pasurohen përvojën shkollore të të gjithëve.
          </p>
        </motion.div>

        {/* Responsibilities Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Përgjegjësitë <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Tona</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4"
                >
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Senate Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Anëtarët e <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Senatit</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {senateMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm mb-3">Klasa {member.class}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Meetings */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Mbledhjet e <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Ardhshme</span>
          </h2>
          <div className="space-y-4">
            {upcomingMeetings.map((meeting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 rounded-xl p-3 text-center min-w-[70px]">
                    <div className="text-2xl font-bold text-cyan-400">{meeting.date.split('-')[2]}</div>
                    <div className="text-sm text-gray-400">
                      {new Date(meeting.date).toLocaleDateString('sq-AL', { month: 'short' })}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{meeting.topic}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        {meeting.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {meeting.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
