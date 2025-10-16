import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Palette, Microscope, Code, Globe2, MessageSquare, Mail, User, LucideIcon } from "lucide-react";
import { createPageUrl } from "@/lib/utils";

type Category = "sports" | "arts" | "science" | "technology" | "cultural" | "debate";

interface Club {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  category: Category;
  meeting_schedule: string;
  location: string;
  coordinator: string;
  coordinatorEmail: string;
  member_count: number;
  achievements: string[];
  requirements: string;
}

export default function ClubDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id') || '0');
  
  const clubs: Club[] = [
    /**{ 
      id: 1, 
      name: "Klubi i Futbollit", 
      description: "Trajnime dhe ndeshje të rregullta, pjesëmarrje në turne lokale dhe kombëtare", 
      fullDescription: "Klubi i Futbollit është një nga klubet më aktive të shkollës sonë. Ne organizojmë trajnime profesionale tri herë në javë, ku nxënësit mësojnë teknika të reja, përmirësojnë aftësitë e tyre dhe zhvillojnë punën në ekip.\n\nGjatë vitit shkollor, marrim pjesë në turne lokale dhe kombëtare, duke përfaqësuar shkollën tonë me krenari. Klubi ka fituar disa çmime të rëndësishme në vitet e fundit, duke treguar cilësinë e trajnimit dhe përkushtimin e anëtarëve tanë.\n\nÇdo nxënës që do të bashkohet me klubin do të ketë mundësinë të zhvillojë jo vetëm aftësitë sportive, por edhe disiplinën, punën në ekip dhe frymën konkurruese.", 
      category: "sports", 
      meeting_schedule: "E Hënë, E Mërkurë, E Premte 15:00-17:00", 
      location: "Fusha Sportive", 
      coordinator: "Prof. Alban Gashi", 
      coordinatorEmail: "a.gashi@gjimnazi-keta.edu.al",
      member_count: 25,
      achievements: [
        "Vendi i 1-rë në Turneun Kombëtar 2024",
        "Çmimi 'Ekipi më i Mirë' 2023",
        "5 anëtarë të përzgjedhur në ekipet kombëtare rinore"
      ],
      requirements: "Njohuri bazë të futbollit, dëshirë për të mësuar, angazhim dhe disiplinë"
    },**/
    { 
      id: 2, 
      name: "Klubi Art dhe Zeje", 
      description: "Pikturë, skulpturë dhe art digjital. Organizimi i ekspozitave dhe konkurseve artistike", 
      fullDescription: "Klubi i Arteve është një hapësirë ku kreativiteti lulëzon. Ne eksplorojmë forma të ndryshme artistike, nga piktura tradicionale deri tek arti digjital modern.\n\nGjatë vitit, organizojmë ekspozita të rregullta ku nxënësit shfaqin punët e tyre. Gjithashtu, marrim pjesë në konkurse kombëtare të arteve, ku anëtarët tanë kanë fituar çmime të shumta.\n\nNëse je i apasionuar pas artit dhe dëshiron të zhvillosh talentin tënd, ky është vendi i duhur për ty!", 
      category: "arts", 
      meeting_schedule: "Ne proces", 
      location: "Salla e Arteve", 
      coordinator: "Ms. Vetetima Prendi", 
      coordinatorEmail: "xy",
      member_count: 0,
      achievements: [
        "Ne proces"
      ],
      requirements: "Ne proces"
    },
    /**{ 
      id: 3, 
      name: "Klubi i Shkencave", 
      description: "Eksperimente shkencore, projekte kërkimore dhe pjesëmarrje në panairin shkencor", 
      fullDescription: "Klubi i Shkencave ofron mundësi unike për nxënësit që duan të eksplorojnë botën e shkencës përtej teksteve shkollore. Ne kryejmë eksperimente të ndryshme në fizikë, kimi, biologji dhe më shumë.\n\nÇdo vit, anëtarët e klubit zhvillojnë projekte kërkimore origjinale dhe marrin pjesë në Panairin Shkencor Kombëtar. Disa nga projektet tona kanë fituar çmime të rëndësishme dhe kanë tërhequr vëmendjen e universiteteve.\n\nNëse je kurioz dhe dëshiron të zbulosh se si funksionon bota rreth nesh, bashkohu me ne!", 
      category: "science", 
      meeting_schedule: "E Mërkurë 15:00-17:00", 
      location: "Laboratori i Shkencave", 
      coordinator: "Prof. Elira Mara", 
      coordinatorEmail: "e.mara@gjimnazi-keta.edu.al",
      member_count: 22,
      achievements: [
        "Vendi i 1-rë në Panairin Shkencor 2024",
        "2 projekte të publikuara në revista shkencore",
        "Bashkëpunim me universitete lokale"
      ],
      requirements: "Kuriozitet shkencor, aftësi analitike, dëshirë për kërkim"
    },**/
     /**{ 
      id: 4, 
      name: "Klubi i Teknologjisë", 
      description: "Programim, robotikë dhe zhvillim i projekteve teknologjike novatore", 
      fullDescription: "Klubi i Teknologjisë është në zemër të revolucionit digjital. Ne mësojmë programim, zhvillojmë aplikacione, ndërtojmë robotë dhe eksplorojmë teknologjitë më të fundit.\n\nAnëtarët e klubit punojnë në projekte të vërteta që zgjedhin probleme konkrete. Disa nga projektet tona janë zbatuar në shkollë dhe kanë marrë vëmendje nga kompani teknologjike.\n\nNëse dëshiron të mësosh të kodosh, të ndërtosh diçka me duart e tua, ose thjesht të jesh pjesë e së ardhmes, ky klub është për ty!", 
      category: "technology", 
      meeting_schedule: "E Premte 15:00-18:00", 
      location: "Laboratori i Kompjuterit", 
      coordinator: "Prof. Arben Hoxha", 
      coordinatorEmail: "a.hoxha@gjimnazi-keta.edu.al",
      member_count: 30,
      achievements: [
        "Fitues i Hackathon Kombëtar 2024",
        "3 aplikacione të zhvilluara dhe publikuara",
        "Partneritet me kompani teknologjike"
      ],
      requirements: "Interes për teknologjinë, aftësi bazë kompjuterike (jo të domosdoshme), kreativitet"
    },**/
  ];

  const club = clubs.find(c => c.id === id);

  if (!club) {
    return (
      <div className="min-h-screen bg-[#071018] py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Klubi nuk u gjet</h1>
          <Link href={createPageUrl("Klube")} className="text-cyan-400 hover:text-cyan-300">
            Kthehu te klubet
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: Category): LucideIcon => {
    const icons: Record<Category, LucideIcon> = {
      sports: Trophy,
      arts: Palette,
      science: Microscope,
      technology: Code,
      cultural: Globe2,
      debate: MessageSquare,
    };
    return icons[category];
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
    return colors[category];
  };

  const CategoryIcon = getCategoryIcon(club.category);

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            href={createPageUrl("Klube")}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kthehu te klubet
          </Link>

          {/* Club Header */}
          <div className={`bg-gradient-to-br ${getCategoryColor(club.category)} backdrop-blur-sm rounded-2xl p-8 md:p-12 border mb-8`}>
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <CategoryIcon className="w-10 h-10 text-cyan-400" />
              </motion.div>
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{club.name}</h1>
                <p className="text-gray-300 text-lg leading-relaxed">{club.description}</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Detaje të Klubit</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Orari i Takimeve</p>
                      <p className="text-white">{club.meeting_schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Vendndodhja</p>
                      <p className="text-white">{club.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Anëtarë Aktivë</p>
                      <p className="text-white">{club.member_count} nxënës</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Koordinator</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-white">{club.coordinator}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                    <a href={`mailto:${club.coordinatorEmail}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {club.coordinatorEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Arritje</h3>
              <ul className="space-y-3">
                {club.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    </span>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Përshkrim i Plotë</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{club.fullDescription}</p>
          </div>

          {/* Requirements */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-3">Kërkesat për Anëtarësim</h3>
            <p className="text-gray-300">{club.requirements}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
